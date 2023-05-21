struct BufferPoint {
  density: f32,
  color: f32,
  vel: vec2<f32>,
}
struct Uniforms {
  image_width: f32,
  image_height: f32,
  buffer_width: f32,
  buffer_height: f32,
}
struct BufferData {
  data: array<BufferPoint>,
}
struct ImageData {
  data: array<vec4<f32 > >,
}
@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var<storage, read> imageBuffer : ImageData;
@binding(2) @group(0) var<storage, read_write> bufferData : BufferData;


@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) GlobalInvocationID: vec3<u32>) {
    var index: u32 = GlobalInvocationID.y + GlobalInvocationID.x * u32(uniforms.buffer_height);

    var buffer_posx: f32 = f32(GlobalInvocationID.x) / uniforms.buffer_width;
    var buffer_posy: f32 = f32(GlobalInvocationID.y) / uniforms.buffer_height;

    var image_index_x: u32 = u32(floor(buffer_posx * uniforms.image_width));
    var image_index_y: u32 = u32(floor(buffer_posy * uniforms.image_height));


    var image_index: u32 = image_index_x + image_index_y * u32(uniforms.image_width);

    var image_sample: vec4<f32> = imageBuffer.data[image_index];

    bufferData.data[index].density = image_sample.x;
}


