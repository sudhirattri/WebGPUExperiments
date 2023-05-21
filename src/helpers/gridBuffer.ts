import { Dimensions } from "../core/framework";

export class ImageToBuffer {
    imageToBufferBindGroupLayout: GPUBindGroupLayout
    imageToBufferPipeline: GPUComputePipeline;
    device: GPUDevice;
    sampler: GPUSampler
    bufferBindGroups: GPUBindGroup[]
    uniformBuffer: GPUBuffer
    numBuffers: number;
    bufferDimensions: Dimensions

    constructor(device: GPUDevice){
        this.device = device;
        
    }

}