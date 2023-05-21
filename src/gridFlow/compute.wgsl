struct Particle {
  density: f32,
  color: f32,
  vel: vec2<f32>,
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
struct Particles {
  particles: array<Particle>,
}
@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var<storage, read> particlesA : Particles;
@binding(2) @group(0) var<storage, read_write> particlesB : Particles;

// https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) GlobalInvocationID: vec3<u32>) {
    var index = GlobalInvocationID.y + GlobalInvocationID.x * u32(uniforms.buffery);

    var vDensity = particlesA.particles[index].density;
    var vcolor = particlesA.particles[index].color;
    var vVel = particlesA.particles[index].vel;


    var kernelSize: i32 = 1;
    var avgDensity: f32 = 0.0;

    var diffuse: f32 = 0.0;
    // var t: f32 = 0.001 * (1.0 / ((f32(2 * kernelSize + 1)) * (f32(2 * kernelSize + 1))));
    var t: f32 = 1. / 9.;

    for (var i = -kernelSize; i <= kernelSize; i++) {
        for (var j = -kernelSize; j <= kernelSize; j++) {
            var limitx = i32(uniforms.bufferx)-1;
            var limity = i32(uniforms.buffery)-1;
            var newX = clamp(i32(GlobalInvocationID.x) + i, 0, limitx);
            var newY = clamp(i32(GlobalInvocationID.y) + j, 0, limity);
            var indexParticle: i32 = newY + newX * i32(uniforms.buffery);
            avgDensity += particlesA.particles[indexParticle].density;
        }
    }
    avgDensity = avgDensity / 9.;
    particlesB.particles[index].density = avgDensity * 0.99;

    // particlesB.particles[index].density = vDensity * (1. - t - diffuse) + avgDensity;
    particlesB.particles[index].color = vcolor;
    particlesB.particles[index].vel = vVel;
}
