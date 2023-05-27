import { Dimensions } from "../core/framework";
import computeWGSL from './shaders/compute.wgsl';

export class FluidBuffer {
    device: GPUDevice;
    bufferDimensions: Dimensions

    computePipeline: GPUComputePipeline;
    numBuffers: number;

    uniformBuffer: GPUBuffer
    public buffersArray: GPUBuffer[];
    public auxiliaryBuffer: GPUBuffer;

    bindGroupLayout :GPUBindGroupLayout;

    bufferDimension: Dimensions;
    bufferSize : number;
    auxiliaryBufferSize : number;

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
                    },
                    {
                        binding: 3,
                        visibility: GPUShaderStage.COMPUTE,
                        buffer: {
                            type: "storage" as GPUBufferBindingType,
                        },
                    }
                ],
            });
        

        const initialBufferData = new Float32Array(this.bufferDimension.width * this.bufferDimension.height * 4);
        const initialAuxiliaryData = new Float32Array(this.bufferDimension.width * this.bufferDimension.height * 4);
        let cnt = 0;
        for (let i = 0; i < this.bufferDimension.width * this.bufferDimension.height ; ++i) {
            let yCoord = i % this.bufferDimension.height;
            let xCoord = Math.floor(i / this.bufferDimension.height);

            // console.log(xCoord,yCoord)

            initialBufferData[4 * i + 0] = Math.random()*0.5    ;
            initialBufferData[4 * i + 1] = 1.0;
            initialBufferData[4 * i + 2] = 0.0;
            initialBufferData[4 * i + 3] = 0.0;

            initialAuxiliaryData[4 * i + 0] = 0.0;
            initialAuxiliaryData[4 * i + 1] = 0.0;
            initialAuxiliaryData[4 * i + 2] = 0.0;
            initialAuxiliaryData[4 * i + 3] = 0.0;

            // xCoord==0 || xCoord==this.bufferDimension.width-1 || yCoord==0 || yCoord==this.bufferDimension.height-1
            // Add border walls
            let xCoordNorm = (xCoord/this.bufferDimension.width) -0.5;
            let yCoordNorm = (yCoord/this.bufferDimension.height) -0.5;
            let dist = xCoordNorm*xCoordNorm + yCoordNorm*yCoordNorm;
            if(dist<0.01){
                // console.log("is",xCoordNorm,yCoordNormyCoordNorm)
                initialBufferData[4 * i + 2] = 0.0;
                initialBufferData[4 * i + 3] = 1.0;
            }
            if(xCoord==0 || xCoord==this.bufferDimension.width-1 || yCoord==0 || yCoord==this.bufferDimension.height-1){
                initialBufferData[4 * i + 1] = 0.0;
                // initialBufferData[4 * i + 0] = 1.0;
                cnt++;
            }

        }
        console.log("count",this.bufferDimension,cnt/4);
        this.bufferSize = initialBufferData.byteLength;
        this.auxiliaryBufferSize = initialAuxiliaryData.byteLength;
        this.buffersArray = new Array(2);
        for (let i = 0; i < 2; ++i) {
            this.buffersArray[i] = this.device.createBuffer({
                size: initialBufferData.byteLength,
                usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
                mappedAtCreation: true,
            });
            new Float32Array(this.buffersArray[i].getMappedRange()).set(
                initialBufferData
            );
            this.buffersArray[i].unmap();
        }

        this.auxiliaryBuffer = this.device.createBuffer({
            size: initialAuxiliaryData.byteLength,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
            mappedAtCreation: true,
        });
        new Float32Array(this.auxiliaryBuffer.getMappedRange()).set(
            initialAuxiliaryData
        );
        this.auxiliaryBuffer.unmap();

    }

}