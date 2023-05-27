struct Uniforms {
  width: f32,
  height: f32,
  bufferX: f32,
  bufferY: f32,
  mouseX: f32,
  mouseY: f32,
  deltaT: f32
}
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

@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var<storage, read> mainBuffer : array<MainBuffer>;
@binding(2) @group(0) var<storage, read> auxiliaryBuffer : array<AuxiliaryBuffer>;

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

    var xBpos: u32 = u32(floor(xPos * uniforms.bufferX));
    var yBpos: u32 = u32(floor(yPos * uniforms.bufferY));


    var indexParticle: u32 = yBpos + xBpos * u32(floor(uniforms.bufferY));

    var density: f32 = mainBuffer[indexParticle].density;
    var velX: f32 = mainBuffer[indexParticle].vel.x;
    var velY: f32 = mainBuffer[indexParticle].vel.y;

    var col = vec3(0.9, 0.3, 0.6);


    var col_density = vec3(1., 0., 0.);
    var col_velocity_x = vec3(0., 1., 0.);
    var col_velocity_y = vec3(0., 0., 1.);

    var retCol = vec3(0.);
    // retCol = density * col_density ;
    retCol += velX * col_velocity_x;
    // retCol += velY * col_velocity_y;

    // retCol += col_velocity_y * mainBuffer.particles[indexParticle].vel.y;
    // retCol += col_velocity_x * mainBuffer.particles[indexParticle].vel.x;

    return vec4(retCol, 1.);
}
