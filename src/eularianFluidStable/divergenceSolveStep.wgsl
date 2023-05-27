struct MainBuffer {
  density: f32,
  obstacle: f32,
  vel: vec2<f32>,
}
struct AuxiliaryBuffer {
  pressure: f32,
  foam: f32,
  force: vec2<f32>,
}
struct Uniforms {
  width: f32,
  height: f32,
  bufferx: f32,
  buffery: f32,
  mouseX: f32,
  mouseY: f32,
  overRelaxation: f32,
}
@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var<storage, read> mainBufferFrom : array<MainBuffer>;
@binding(2) @group(0) var<storage, read_write> mainBufferTo : array<MainBuffer>;
@binding(2) @group(0) var<storage, read_write> auxiliaryBuffer : array<MainBuffer>;

fn getMainBufferDelta(xCoord: u32, yCoord: u32, deltaX: i32, deltaY: i32) -> u32 {
    var limitx = i32(uniforms.bufferx)-1;
    var limity = i32(uniforms.buffery)-1;

    // var newX: u32 = u32(clamp(i32(xCoord) + deltaX, 0, limitx));
    // var newY: u32 = u32(clamp(i32(yCoord) + deltaY, 0, limity));
    var newX: u32 = u32(i32(xCoord) + deltaX);
    var newY: u32 = u32(i32(yCoord) + deltaY);

    return newY + newX * u32(uniforms.buffery);
}

@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) GlobalInvocationID: vec3<u32>) {
    var x = GlobalInvocationID.x;
    var y = GlobalInvocationID.y;
    var index = y + x * u32(uniforms.buffery);
    var density = mainBufferFrom[index].density;
    var obstacle = mainBufferFrom[index].obstacle;
    var vVel = mainBufferFrom[index].vel;

    if obstacle == 0.0 {
        return;
    }
    var limitx = i32(uniforms.bufferx)-1;
    var limity = i32(uniforms.buffery)-1;

    var leftCell: u32 = getMainBufferDelta(x, y, 1, 1);
    var leftCellBuffer: MainBuffer = mainBufferFrom[leftCell];

    var rightCell: u32 = getMainBufferDelta(x, y, 1, 0);
    var upCell: u32 = getMainBufferDelta(x, y, 0, -1);
    var downCell: u32 = getMainBufferDelta(x, y, 0, 1);

    var leftUpDiagCell: u32 = getMainBufferDelta(x, y, -1, -1);
    var leftDownDiagCell: u32 = getMainBufferDelta(x, y, -1, 1);
    var rightUpDiagCell: u32 = getMainBufferDelta(x, y, 1, -1);
    var rightDownDiagCell: u32 = getMainBufferDelta(x, y, 1, 1);

    var sx0: f32 = leftCellBuffer.obstacle;
    var sx1: f32 = mainBufferFrom[rightCell].obstacle;
    var sy0: f32 = mainBufferFrom[upCell].obstacle;
    var sy1: f32 = mainBufferFrom[downCell].obstacle;

    var s: f32 = sx0 + sx1 + sy0 + sy1;

    if s == 0.0 {
        return;
    }

    // if index == 5000u {
    //     vVel.x = 1.0;
    //     mainBufferTo[index].vel = vVel;
    //     mainBufferTo[leftCell].vel.x = 0.6;
    // }

    var div: f32 = mainBufferFrom[rightCell].vel.x - vVel.x + mainBufferFrom[downCell].vel.y - vVel.y;
    var p: f32 = -div / s;

    p *= uniforms.overRelaxation;
    vVel.x = sx0 * p;
    vVel.y = sy0 * p;
    // this.u[(i+1)*n + j] += sx1 * p;
    mainBufferTo[rightCell].vel.x = sx1 * p;
    // this.v[i*n + j+1] += sy1 * p;
    mainBufferTo[downCell].vel.x = sy1 * p;

    mainBufferTo[index].density = density;
    mainBufferTo[index].obstacle = obstacle;
}
