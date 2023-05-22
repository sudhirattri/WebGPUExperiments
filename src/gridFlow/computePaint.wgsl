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

fn rand(co: vec2<f32>) -> f32 {
    var randomVec2 = vec2(12.9898, 78.233);
    var rand1: f32 = sin(dot(randomVec2, co)) * 43758.5453;
    return fract(rand1);
}

@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var<storage, read> particlesA : Particles;
@binding(2) @group(0) var<storage, read_write> particlesB : Particles;

// https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) GlobalInvocationID: vec3<u32>) {
    var index = GlobalInvocationID.y + GlobalInvocationID.x * u32(uniforms.buffery);

    var mouseX: f32 = uniforms.mouseX / uniforms.width;
    var mouseY: f32 = uniforms.mouseY / uniforms.height;

    var xPos: f32 = f32(GlobalInvocationID.x) / uniforms.bufferx;
    var yPos: f32 = f32(GlobalInvocationID.y) / uniforms.buffery;

    var vDensity = particlesA.particles[index].density;
    var vcolor = particlesA.particles[index].color;
    var vVel = particlesA.particles[index].vel;

    var dist = 0.;
    dist += ((xPos - mouseX) * (xPos - mouseX));
    dist += ((yPos - mouseY) * (yPos - mouseY));
    // dist = clamp(dist, 0., 10.);
    // vDensity += min(1., 0.001 / dist) / 5.;

    vDensity += 0.0001 / dist;
    particlesB.particles[index].density = vDensity ;
    particlesB.particles[index].color = vcolor;
    particlesB.particles[index].vel = vVel;
}


