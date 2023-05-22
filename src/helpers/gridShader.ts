import { Dimensions } from "../core/framework";
import { GridBuffer } from "./gridBuffer";
import computeWGSL from './shaders/compute.wgsl';

export class GridShader {
    device: GPUDevice;

    uniformBuffer: GPUBuffer

    computePipeline: GPUComputePipeline;
    bindGroupsArray: GPUBindGroup[];

    numBuffers: number;
    bufferDimension: Dimensions
    screenDimension: Dimensions

    constructor(device: GPUDevice, gridBuffer: GridBuffer, shader: string, screenDimension: Dimensions, bufferDimension: Dimensions){
        this.device = device;
        this.bufferDimension = bufferDimension;
        this.screenDimension = screenDimension;

        const uniformBufferSize = 7 * Float32Array.BYTES_PER_ELEMENT;
        this.uniformBuffer = this.device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });


        this.device.queue.writeBuffer(
            this.uniformBuffer,
            0,
            new Float32Array([
                this.screenDimension.width,
                this.screenDimension.height,
                bufferDimension.width,
                bufferDimension.height,
                0,
                0,
                0
            ])
        );

        this.computePipeline = this.device.createComputePipeline({
            layout: this.device.createPipelineLayout({
                bindGroupLayouts: [gridBuffer.bindGroupLayout],
            }),
            compute: {
                module: this.device.createShaderModule({
                    code: shader,
                }),
                entryPoint: 'main',
            },
        });
        this.bindGroupsArray = new Array(2);
        for (let i = 0; i < 2; ++i) {
            this.bindGroupsArray[i] = this.device.createBindGroup({
                layout: this.computePipeline.getBindGroupLayout(0),
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
                            buffer: gridBuffer.buffersArray[i],
                            offset: 0,
                            size: gridBuffer.bufferSize,
                        },
                    },
                    {
                        binding: 2,
                        resource: {
                            buffer: gridBuffer.buffersArray[(i + 1) % 2],
                            offset: 0,
                            size: gridBuffer.bufferSize,
                        },
                    },
                ],
            });
        }

    }

    render(commandEncoder: GPUCommandEncoder,index: number){
        const passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.computePipeline);
        passEncoder.setBindGroup(0, this.bindGroupsArray[index]);
        passEncoder.dispatchWorkgroups(this.bufferDimension.width / 8, this.bufferDimension.height / 8);
        passEncoder.end();
    }

}