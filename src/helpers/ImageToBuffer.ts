import { Dimensions } from '../core/framework';
import imageToBufferWGSL from './shaders/ImageToBuffer.wgsl';
const WORKGROUP_SIZE = 8



export class ImageToBuffer {
    imageToBufferBindGroupLayout: GPUBindGroupLayout
    imageToBufferPipeline: GPUComputePipeline;
    device: GPUDevice;
    sampler: GPUSampler
    bufferBindGroups: GPUBindGroup[]
    uniformBuffer: GPUBuffer
    numBuffers: number;
    bufferDimensions: Dimensions

    constructor(){

    }

    async initialize(device: GPUDevice, imageURL:string, bufferArray: GPUBuffer[], bufferSize: number, bufferDimensions: Dimensions) {
        this.device = device;

        const img:HTMLImageElement = document.createElement('img');
        img.src = imageURL
        await img.decode();
        
        const tempCanvas = document.createElement('canvas');
        const tempContext = tempCanvas.getContext('2d');
        tempCanvas.width = img.width;
        tempCanvas.height = img.height;
        tempContext.drawImage(img, 0, 0, img.width, img.height);
        // Get the image data from the temporary canvas
        const imageDataTemp = tempContext.getImageData(0, 0, img.width, img.height).data;
        
        const imageDataF32 = new Float32Array(img.width * img.height * 4);
        for (let i = 0; i < img.width * img.height * 4; ++i) {
            imageDataF32[4 * i + 0] = imageDataTemp[4 * i + 0]/256.0;
            imageDataF32[4 * i + 1] = imageDataTemp[4 * i + 1]/256.0;
            imageDataF32[4 * i + 2] = imageDataTemp[4 * i + 2]/256.0;
            imageDataF32[4 * i + 3] = imageDataTemp[4 * i + 3]/256.0;
        }

        
        const imageBuffer:GPUBuffer = this.device.createBuffer({
            size: imageDataF32.byteLength,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
            mappedAtCreation: true,
        });
        new Float32Array(imageBuffer.getMappedRange()).set(
            imageDataF32
        );
        imageBuffer.unmap();


        this.device = device;
        this.numBuffers = bufferArray.length;
        this.bufferDimensions = bufferDimensions;
        
        this.imageToBufferBindGroupLayout =
            this.device.createBindGroupLayout({
                entries: [{
                        binding: 0,
                        visibility: GPUShaderStage.COMPUTE,
                        buffer: {
                            type: "uniform" as GPUBufferBindingType,
                        },
                    },
                    {
                        binding: 1,
                        visibility: GPUShaderStage.COMPUTE,
                        buffer: {
                            type: "read-only-storage" as GPUBufferBindingType,
                        },
                    },
                    {
                        binding: 2,
                        visibility: GPUShaderStage.COMPUTE,
                        buffer: {
                            type: "storage" as GPUBufferBindingType,
                        },
                    }
                ],
            });
        this.imageToBufferPipeline = this.device.createComputePipeline({
            layout: this.device.createPipelineLayout({
                bindGroupLayouts: [this.imageToBufferBindGroupLayout],
            }),
            compute: {
                module: this.device.createShaderModule({
                    code: imageToBufferWGSL,
                }),
                entryPoint: 'main',
            },
        });


        
        const uniformBufferSize = 4 * Float32Array.BYTES_PER_ELEMENT;
        this.uniformBuffer = this.device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        this.device.queue.writeBuffer(
            this.uniformBuffer,
            0,
            new Float32Array([
                img.width,
                img.height,
                this.bufferDimensions.width,
                this.bufferDimensions.height,
            ])
        );
        
        
        this.bufferBindGroups = new Array(this.numBuffers);
        for (let i = 0; i < this.numBuffers; ++i) {
            this.bufferBindGroups[i] = this.device.createBindGroup({
                layout: this.imageToBufferPipeline.getBindGroupLayout(0),
                entries: [
                    {
                        binding: 0,
                        resource: {
                            buffer: this.uniformBuffer,
                        },
                    },
                    {
                        binding: 1,
                        resource: {
                            buffer: imageBuffer,
                            offset: 0,
                            size: imageDataF32.byteLength,
                        },
                    },
                    {
                        binding: 2,
                        resource: {
                            buffer: bufferArray[i],
                            offset: 0,
                            size: bufferSize,
                        },
                    },
                ],
            });
        }
    }
    performCopy(index: number){
        const commandEncoder = this.device.createCommandEncoder();
        const passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.imageToBufferPipeline);
        passEncoder.setBindGroup(0, this.bufferBindGroups[index % this.numBuffers]);
        passEncoder.dispatchWorkgroups(this.bufferDimensions.width / WORKGROUP_SIZE, this.bufferDimensions.height / WORKGROUP_SIZE);
        passEncoder.end();
        this.device.queue.submit([commandEncoder.finish()]);
        console.log("Copied Image to buffer")
    }
}