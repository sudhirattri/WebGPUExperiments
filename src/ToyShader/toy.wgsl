struct Uniforms {
  width : f32,
  height : f32,
}
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

@vertex
fn vertex_main(
  @builtin(vertex_index) VertexIndex : u32
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
  @builtin(position) position :vec4<f32>
) -> @location(0) vec4<f32> {
  var xPos = position.x/uniforms.width;
  var yPos = position.y/uniforms.height;
  return vec4(fract(xPos*5.0),fract(yPos*5.0), 0.0, 1.0);
}
