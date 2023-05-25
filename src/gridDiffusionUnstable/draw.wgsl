struct Uniforms {
  width: f32,
  height: f32,
  bufferx: f32,
  buffery: f32,
  mouseX: f32,
  mouseY: f32,
  frame: f32
}
struct Particle {
  density: f32,
  color: f32,
  vel: vec2<f32>,
}
struct Particles {
  particles: array<Particle>,
}

@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var<storage, read> particlesA : Particles;
@vertex
fn vertex_main(
    @builtin(vertex_index) VertexIndex: u32
) -> @builtin(position) vec4<f32> {
    var pos = array<vec2<f32>, 6>(
        vec2(-1.0, 1.0),
        vec2(-1.0, -1.0),
        vec2(1.0, 1.0),
        vec2(-1.0, -1.0),
        vec2(1.0, -1.0),
        vec2(1.0, 1.0)
    );

    return vec4<f32>(pos[VertexIndex], 0.0, 1.0);
}

@fragment
fn fragment_main(
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    var mouseX: f32 = uniforms.mouseX / uniforms.width;
    var mouseY: f32 = uniforms.mouseY / uniforms.height;

    var xPos: f32 = position.x / uniforms.width;
    var yPos: f32 = position.y / uniforms.height;

    var xBpos: u32 = u32(floor(xPos * uniforms.bufferx));
    var yBpos: u32 = u32(floor(yPos * uniforms.buffery));


    var indexParticle: u32 = yBpos + xBpos * u32(floor(uniforms.buffery));

    var density: f32 = particlesA.particles[indexParticle].density;

    var avg: f32 = 0.;
    avg += particlesA.particles[indexParticle].density;
    avg = avg / 1.;
    var col = vec3(0.9, 0.3, 0.6);
    var col_density = vec3(1., 0., 0.);

    var col_velocity_x = vec3(0., 1., 0.);
    var col_velocity_y = vec3(0., 0., 1.);

    var retCol = avg * col_density ;
    retCol += col_velocity_y * 0.4;
    // retCol += col_velocity_y * particlesA.particles[indexParticle].vel.y;
    // retCol += col_velocity_x * particlesA.particles[indexParticle].vel.x;

    return vec4(retCol, 1.);
}
