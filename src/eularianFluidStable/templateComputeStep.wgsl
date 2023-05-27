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
  frame: f32
}
@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var<storage, read> mainBufferFrom : array<MainBuffer>;
@binding(2) @group(0) var<storage, read_write> mainBufferTo : array<MainBuffer>;
@binding(2) @group(0) var<storage, read_write> auxiliaryBuffer : array<MainBuffer>;

// https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) GlobalInvocationID: vec3<u32>) {
    var index = GlobalInvocationID.y + GlobalInvocationID.x * u32(uniforms.buffery);

    var vDensity = mainBufferFrom[index].density;
    var vObstacle = mainBufferFrom[index].obstacle;
    var vVel = mainBufferFrom[index].vel;


    var kernelSize: i32 = 1;
    var avgDensity: f32 = 0.0;

    var diffuse: f32 = 0.0;
    var t: f32 = 1. / 9.;
    var kernel = mat3x3<f32>(
        vec3<f32>(1., 1., 1.),
        vec3<f32>(1., 1., 1.),
        vec3<f32>(1., 1., 1.)
    );

    for (var i = -kernelSize; i <= kernelSize; i++) {
        for (var j = -kernelSize; j <= kernelSize; j++) {
            var limitx = i32(uniforms.bufferx)-1;
            var limity = i32(uniforms.buffery)-1;
            var newX = clamp(i32(GlobalInvocationID.x) + i, 0, limitx);
            var newY = clamp(i32(GlobalInvocationID.y) + j, 0, limity);
            var indexParticle: i32 = newY + newX * i32(uniforms.buffery);
            avgDensity += mainBufferFrom[indexParticle].density * kernel[j][i];
        }
    }
    avgDensity = avgDensity / 9.;
    mainBufferTo[index].density = avgDensity * 0.99;

    mainBufferTo[index].obstacle = vObstacle;
    mainBufferTo[index].vel = vVel;
}
