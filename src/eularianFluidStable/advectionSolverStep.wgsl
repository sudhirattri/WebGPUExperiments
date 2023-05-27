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
  deltaT: f32,
}
@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var<storage, read> mainBufferFrom : array<MainBuffer>;
@binding(2) @group(0) var<storage, read_write> mainBufferTo : array<MainBuffer>;
@binding(2) @group(0) var<storage, read_write> auxiliaryBuffer : array<MainBuffer>;

fn getMainBufferDelta(xCoord: u32, yCoord: u32, deltaX: i32, deltaY: i32) -> i32 {
    var limitx = i32(uniforms.bufferx)-1;
    var limity = i32(uniforms.buffery)-1;

    var newX = clamp(i32(xCoord) + deltaX, 0, limitx);
    var newY = clamp(i32(yCoord) + deltaY, 0, limity);
    var index: i32 = newY + newX * i32(uniforms.buffery);
    return index;
}

// fn avgV(x: u32, y: u32) -> f32 {

// }

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


    var leftCell: MainBuffer = mainBufferFrom[getMainBufferDelta(x, y, -1, 0)];
    var rightCell: MainBuffer = mainBufferFrom[getMainBufferDelta(x, y, 1, 0)];
    var upCell: MainBuffer = mainBufferFrom[getMainBufferDelta(x, y, 0, -1)];
    var downCell: MainBuffer = mainBufferFrom[getMainBufferDelta(x, y, 0, 1)];

    var leftUpDiagCell: MainBuffer = mainBufferFrom[getMainBufferDelta(x, y, -1, 1)];


    if leftCell.obstacle == 0.0 {
        var u = vVel.x;
        var v = 0.0;
        return;
    }


    mainBufferTo[index].density = density;
    mainBufferTo[index].obstacle = obstacle;
    mainBufferTo[index].vel = vVel;
}
