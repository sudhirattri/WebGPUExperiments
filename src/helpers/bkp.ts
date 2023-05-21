// let cubeTexture: GPUTexture;
// {
//   cubeTexture = device.createTexture({
//     size: [imageBitmap.width, imageBitmap.height, 1],
//     format: 'rgba8unorm',
//     usage:
//       GPUTextureUsage.TEXTURE_BINDING |
//       GPUTextureUsage.COPY_DST |
//       GPUTextureUsage.RENDER_ATTACHMENT  
//   });
//   device.queue.copyExternalImageToTexture(
//     { source: imageBitmap },
//     { texture: cubeTexture },
//     [imageBitmap.width, imageBitmap.height]
//   );
// }

// this.sampler = device.createSampler({
//     magFilter: 'linear',
//     minFilter: 'linear',
//   });

// const imageBitmap : ImageBitmap= await createImageBitmap(img);

// await copyImageToBuffer(this.device,this.particleBuffers[this.frameCount%2],
//     initialParticleData.byteLength,
//     {
//         height:BUFFER_SIZE_Y,
//         width:BUFFER_SIZE_X
//     }
// );
// console.log("Copied to buffer")