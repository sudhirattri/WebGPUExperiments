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
  deltaT: f32
}
@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var<storage, read> mainBufferFrom : array<MainBuffer>;
@binding(2) @group(0) var<storage, read_write> mainBufferTo : array<MainBuffer>;
@binding(2) @group(0) var<storage, read_write> auxiliaryBuffer : array<MainBuffer>;

// https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) GlobalInvocationID: vec3<u32>) {
    var index = GlobalInvocationID.y + GlobalInvocationID.x * u32(uniforms.buffery);
    var density = mainBufferFrom[index].density;
    var obstacle = mainBufferFrom[index].obstacle;
    var vVel = mainBufferFrom[index].vel;


    vVel.y += uniforms.deltaT * 9.8;

    mainBufferTo[index].density = density;
    mainBufferTo[index].obstacle = obstacle;
    mainBufferTo[index].vel = vVel;
}
