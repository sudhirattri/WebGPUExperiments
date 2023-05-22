import { Dimensions } from "../core/framework";
import computeWGSL from './shaders/compute.wgsl';

export class GridBuffer {
     device: GPUDevice;
    bufferDimensions: Dimensions

    computePipeline: GPUComputePipeline;
    numBuffers: number;

    uniformBuffer: GPUBuffer
    public buffersArray: GPUBuffer[];

    bindGroupLayout :GPUBindGroupLayout;

    bufferDimension: Dimensions;
    bufferSize : number;

    constructor(device: GPUDevice, bufferDimension: Dimensions){
        this.device = device;
        this.bufferDimension = bufferDimension;

        this.bindGroupLayout =
            this.device.createBindGroupLayout({
                entries: [
                    {
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
        

        const initialParticleData = new Float32Array(this.bufferDimension.width * this.bufferDimension.height * 4);
        for (let i = 0; i < this.bufferDimension.width * this.bufferDimension.height * 4; ++i) {
            let xCoord = Math.floor((i / 4) % this.bufferDimension.width) / this.bufferDimension.width;
            let yCoord = Math.floor((i / 4) / this.bufferDimension.width) / this.bufferDimension.height;
            if (Number.isNaN(yCoord))
                yCoord = 0.0;

            initialParticleData[4 * i + 0] = 0.5;
            initialParticleData[4 * i + 1] = yCoord;
            initialParticleData[4 * i + 2] = 0.;
            initialParticleData[4 * i + 3] = 0.;
        }
        this.bufferSize = initialParticleData.byteLength;

        this.buffersArray = new Array(2);
        for (let i = 0; i < 2; ++i) {
            this.buffersArray[i] = this.device.createBuffer({
                size: initialParticleData.byteLength,
                usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
                mappedAtCreation: true,
            });
            new Float32Array(this.buffersArray[i].getMappedRange()).set(
                initialParticleData
            );
            this.buffersArray[i].unmap();
        }
    }

}