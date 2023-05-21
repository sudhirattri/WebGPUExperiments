import spriteWGSL from './sprite.wgsl';
import updateSpritesWGSL from './updateSprites.wgsl';
import { WebGPUProject } from '../core/framework'

export class Boids implements WebGPUProject {
    device: GPUDevice;
    context: GPUCanvasContext;
    computePipeline: GPUComputePipeline;
    renderPipeline: GPURenderPipeline;

    renderPassDescriptor: GPURenderPassDescriptor;
    particleBindGroups: GPUBindGroup[];

    particleBuffers: GPUBuffer[];
    spriteVertexBuffer: GPUBuffer

    frameCount: number = 0;
    numParticles: number = 1500;
    constructor(device: GPUDevice, context: GPUCanvasContext) {
        this.device = device;
        this.context = context;
    }
    initialize() {
        const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
        this.context.configure({
            device: this.device,
            format: presentationFormat,
            alphaMode: 'premultiplied',
        });

        const spriteShaderModule = this.device.createShaderModule({ code: spriteWGSL });
        this.renderPipeline = this.device.createRenderPipeline({
            layout: 'auto',
            vertex: {
                module: spriteShaderModule,
                entryPoint: 'vert_main',
                //@ts-ignore
                buffers: [
                    {
                        // instanced particles buffer
                        arrayStride: 4 * 4,
                        stepMode: 'instance',
                        attributes: [
                            {
                                // instance position
                                shaderLocation: 0,
                                offset: 0,
                                format: 'float32x2',
                            },
                            {
                                // instance velocity
                                shaderLocation: 1,
                                offset: 2 * 4,
                                format: 'float32x2',
                            },
                        ],
                    },
                    {
                        // vertex buffer
                        arrayStride: 2 * 4,
                        stepMode: 'vertex',
                        attributes: [
                            {
                                // vertex positions
                                shaderLocation: 2,
                                offset: 0,
                                format: 'float32x2',
                            },
                        ],
                    },
                ],
            },
            fragment: {
                module: spriteShaderModule,
                entryPoint: 'frag_main',
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

        this.computePipeline = this.device.createComputePipeline({
            layout: 'auto',
            compute: {
                module: this.device.createShaderModule({
                    code: updateSpritesWGSL,
                }),
                entryPoint: 'main',
            },
        });

        this.renderPassDescriptor = {
            //@ts-ignore
            colorAttachments: [
                {
                    view: undefined, // Assigned later
                    clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
                    loadOp: 'clear',
                    storeOp: 'store',
                },
            ],
        };

        // prettier-ignore
        const vertexBufferData = new Float32Array([
            -0.01, -0.02, 0.01,
            -0.02, 0.0, 0.02,
        ]);

        this.spriteVertexBuffer = this.device.createBuffer({
            size: vertexBufferData.byteLength,
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });
        new Float32Array(this.spriteVertexBuffer.getMappedRange()).set(vertexBufferData);
        this.spriteVertexBuffer.unmap();

        const simParams = {
            deltaT: 0.04,
            rule1Distance: 0.1,
            rule2Distance: 0.025,
            rule3Distance: 0.025,
            rule1Scale: 0.02,
            rule2Scale: 0.05,
            rule3Scale: 0.005,
        };

        const simParamBufferSize = 7 * Float32Array.BYTES_PER_ELEMENT;
        const simParamBuffer = this.device.createBuffer({
            size: simParamBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        // function updateSimParams() {
        //     this.device.queue.writeBuffer(
        //         simParamBuffer,
        //         0,
        //         new Float32Array([
        //             simParams.deltaT,
        //             simParams.rule1Distance,
        //             simParams.rule2Distance,
        //             simParams.rule3Distance,
        //             simParams.rule1Scale,
        //             simParams.rule2Scale,
        //             simParams.rule3Scale,
        //         ])
        //     );
        // }
        // updateSimParams();
        // Object.keys(simParams).forEach((k) => {
        //     gui.add(simParams, k).onFinishChange(updateSimParams);
        // });

        this.device.queue.writeBuffer(
            simParamBuffer,
            0,
            new Float32Array([
                simParams.deltaT,
                simParams.rule1Distance,
                simParams.rule2Distance,
                simParams.rule3Distance,
                simParams.rule1Scale,
                simParams.rule2Scale,
                simParams.rule3Scale,
            ])
        );

        const initialParticleData = new Float32Array(this.numParticles * 4);
        for (let i = 0; i < this.numParticles; ++i) {
            initialParticleData[4 * i + 0] = 2 * (Math.random() - 0.5);
            initialParticleData[4 * i + 1] = 2 * (Math.random() - 0.5);
            initialParticleData[4 * i + 2] = 2 * (Math.random() - 0.5) * 0.1;
            initialParticleData[4 * i + 3] = 2 * (Math.random() - 0.5) * 0.1;
        }

        this.particleBuffers = new Array(2);
        this.particleBindGroups = new Array(2);
        for (let i = 0; i < 2; ++i) {
            this.particleBuffers[i] = this.device.createBuffer({
                size: initialParticleData.byteLength,
                usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
                mappedAtCreation: true,
            });
            new Float32Array(this.particleBuffers[i].getMappedRange()).set(
                initialParticleData
            );
            this.particleBuffers[i].unmap();
        }

        for (let i = 0; i < 2; ++i) {
            this.particleBindGroups[i] = this.device.createBindGroup({
                layout: this.computePipeline.getBindGroupLayout(0),
                entries: [
                    {
                        binding: 0,
                        resource: {
                            buffer: simParamBuffer,
                        },
                    },
                    {
                        binding: 1,
                        resource: {
                            buffer: this.particleBuffers[i],
                            offset: 0,
                            size: initialParticleData.byteLength,
                        },
                    },
                    {
                        binding: 2,
                        resource: {
                            buffer: this.particleBuffers[(i + 1) % 2],
                            offset: 0,
                            size: initialParticleData.byteLength,
                        },
                    },
                ],
            });
        }
    }
    render() {
        //@ts-ignore
        this.renderPassDescriptor.colorAttachments[0].view = this.context
            .getCurrentTexture()
            .createView();

        const commandEncoder = this.device.createCommandEncoder();
        {
            const passEncoder = commandEncoder.beginComputePass();
            passEncoder.setPipeline(this.computePipeline);
            passEncoder.setBindGroup(0, this.particleBindGroups[this.frameCount % 2]);
            passEncoder.dispatchWorkgroups(Math.ceil(this.numParticles / 64));
            passEncoder.end();
        }
        {
            const passEncoder = commandEncoder.beginRenderPass(this.renderPassDescriptor);
            passEncoder.setPipeline(this.renderPipeline);
            passEncoder.setVertexBuffer(0, this.particleBuffers[(this.frameCount + 1) % 2]);
            passEncoder.setVertexBuffer(1, this.spriteVertexBuffer);
            passEncoder.draw(3, this.numParticles, 0, 0);
            passEncoder.end();
        }
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