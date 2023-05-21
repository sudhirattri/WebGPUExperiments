import spriteWGSL from './sprite.wgsl';
import updateSpritesWGSL from './updateSprites.wgsl';
import { WebGPUProject, Dimensions } from '../core/framework'

import toyWGSL from './toy.wgsl';


export class ToyShader implements WebGPUProject {
    device: GPUDevice;
    context: GPUCanvasContext;
    computePipeline: GPUComputePipeline;
    pipeline: GPURenderPipeline;

    renderPassDescriptor: GPURenderPassDescriptor;
    uniformBindGroup: GPUBindGroup

    particleBuffers: GPUBuffer[];
    spriteVertexBuffer: GPUBuffer

    dimension: Dimensions

    frameCount: number = 0;

    constructor(device: GPUDevice, context: GPUCanvasContext, dimension: Dimensions) {
        this.device = device;
        this.context = context;
        this.dimension = dimension;
    }
    initialize() {
        const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
        this.context.configure({
            device: this.device,
            format: presentationFormat,
            alphaMode: 'premultiplied',
        });

        const bindGroupLayout =
            this.device.createBindGroupLayout({
                entries: [{
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT || GPUShaderStage.VERTEX,
                    buffer: {
                        type: "uniform" as GPUBufferBindingType,
                    },
                }],
            });
        this.pipeline = this.device.createRenderPipeline({
            layout: this.device.createPipelineLayout({
                bindGroupLayouts: [bindGroupLayout],
            }),
            vertex: {
                module: this.device.createShaderModule({
                    code: toyWGSL,
                }),
                entryPoint: 'vertex_main',
            },
            fragment: {
                module: this.device.createShaderModule({
                    code: toyWGSL,
                }),
                entryPoint: 'fragment_main',
                targets: [
                    {
                        format: presentationFormat,
                    },
                ],
            },
            primitive: {
                topology: 'triangle-list',
            },
        });

        const uniformBufferSize = 2 * Float32Array.BYTES_PER_ELEMENT;
        const uniformBuffer = this.device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        this.uniformBindGroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: uniformBuffer,
                    },
                },
            ],

        });

        this.device.queue.writeBuffer(
            uniformBuffer,
            0,
            new Float32Array([
                this.dimension.width,
                this.dimension.height,
            ])
        );

        this.frameCount = 0;
    }
    render() {
        const commandEncoder = this.device.createCommandEncoder();
        const textureView = this.context.getCurrentTexture().createView();

        const renderPassDescriptor: GPURenderPassDescriptor = {
            colorAttachments: [
                {
                    view: textureView,
                    clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
                    loadOp: 'clear' as GPULoadOp,
                    storeOp: 'store' as GPUStoreOp,
                },
            ],
        };
        // if(this.frameCount%500==200){
        //     console.log(this.pipeline.label)
        // }

        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setBindGroup(0, this.uniformBindGroup);
        passEncoder.draw(6, 1, 0, 0);
        passEncoder.end();

        this.device.queue.submit([commandEncoder.finish()]);
        ++this.frameCount;
    }
    onClick(mouseX: number, mouseY: number) {

    }
    onDragFinished(dx: number, dy: number, mouseX: number, mouseY: number) {

    }
    onDrag(mouseX: number, mouseY: number) {

    }
}