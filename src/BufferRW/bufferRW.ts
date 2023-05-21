import spriteWGSL from './sprite.wgsl';
import computeWGSL from './compute.wgsl';
import paintWGSL from './paint.wgsl';
import { WebGPUProject, Dimensions } from '../core/framework'
import * as dat from 'dat.gui';
import bufferRW from './bufferRW.wgsl';
const BUFFER_SIZE_X = 256
const BUFFER_SIZE_Y = 256 - 64

const WORKGROUP_SIZE = 8

export class BufferRW implements WebGPUProject {
    device: GPUDevice;
    context: GPUCanvasContext;
    computePipeline: GPUComputePipeline;
    paintPipeline: GPUComputePipeline;
    pipeline: GPURenderPipeline;

    renderPassDescriptor: GPURenderPassDescriptor;
    renderBindGroups: GPUBindGroup[]

    particleBuffers: GPUBuffer[];
    spriteVertexBuffer: GPUBuffer

    dimension: Dimensions

    renderFrameCount: number = 0;
    frameCount: number = 0;

    particleBuffer: GPUBuffer[];
    particleBindGroups: GPUBindGroup[];

    paused: boolean = false;

    SPEED: number = 0.5;

    lastPressed: boolean = false;
    uniformBuffer: GPUBuffer;

    lastMouseX: number = 0;
    lastMouseY: number = 0;

    simParams: Record<string, any>;

    constructor(device: GPUDevice, context: GPUCanvasContext, dimension: Dimensions) {
        this.device = device;
        this.context = context;
        this.dimension = dimension;
    }
    initialize() {
        const gui = new dat.GUI({ name: 'My GUI' });
        var gridSettings = gui.addFolder('Grid Settings');

        this.simParams = {
            resolutionScaling: 1.0,
            speed: 1.0
        };
        let updateSimParams = () => {
            console.log("Changed Params", this.simParams)
            this.SPEED = this.simParams.speed;
        }

        gridSettings.add(this.simParams, "resolutionScaling", 0, 1, 0.1).onFinishChange(updateSimParams);
        gridSettings.add(this.simParams, "speed", 0, 5, 0.1).onFinishChange(updateSimParams);
        gridSettings.open()

        const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
        this.context.configure({
            device: this.device,
            format: presentationFormat,
            alphaMode: 'premultiplied',
        });

        //Buffer
        const BUFFER_T_SIZE = 1000;

        const bufferT = this.device.createBuffer({
            size: BUFFER_T_SIZE,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC
        });

        const renderBindGroupLayout =
            this.device.createBindGroupLayout({
                entries: [
                    {
                        binding: 0,
                        visibility: GPUShaderStage.FRAGMENT || GPUShaderStage.VERTEX,
                        buffer: {
                            type: "uniform" as GPUBufferBindingType,
                        },
                    },
                    {
                        binding: 1,
                        visibility: GPUShaderStage.FRAGMENT || GPUShaderStage.VERTEX,
                        buffer: {
                            type: "read-only-storage" as GPUBufferBindingType,
                        },
                    }
                ],
            });
        this.pipeline = this.device.createRenderPipeline({
            layout: this.device.createPipelineLayout({
                bindGroupLayouts: [renderBindGroupLayout],
            }),
            vertex: {
                module: this.device.createShaderModule({
                    code: bufferRW,
                }),
                entryPoint: 'vertex_main',
            },
            fragment: {
                module: this.device.createShaderModule({
                    code: bufferRW,
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

        const computeBindGroupLayout =
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
        this.computePipeline = this.device.createComputePipeline({
            layout: this.device.createPipelineLayout({
                bindGroupLayouts: [computeBindGroupLayout],
            }),
            compute: {
                module: this.device.createShaderModule({
                    code: computeWGSL,
                }),
                entryPoint: 'main',
            },
        });

        this.paintPipeline = this.device.createComputePipeline({
            layout: this.device.createPipelineLayout({
                bindGroupLayouts: [computeBindGroupLayout],
            }),
            compute: {
                module: this.device.createShaderModule({
                    code: paintWGSL,
                }),
                entryPoint: 'main',
            },
        });

        const uniformBufferSize = 7 * Float32Array.BYTES_PER_ELEMENT;
        this.uniformBuffer = this.device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });


        this.device.queue.writeBuffer(
            this.uniformBuffer,
            0,
            new Float32Array([
                this.dimension.width,
                this.dimension.height,
                BUFFER_SIZE_X,
                BUFFER_SIZE_Y,
                0,
                0,
                0
            ])
        );

        console.log("Dimensions", this.dimension, BUFFER_SIZE_X, BUFFER_SIZE_Y)

        let centerX = 0.5;
        let centerY = 0.5;

        let mx = 0, mn = 999999999;
        const initialParticleData = new Float32Array(BUFFER_SIZE_X * BUFFER_SIZE_Y * 4);
        for (let i = 0; i < BUFFER_SIZE_X * BUFFER_SIZE_Y * 4; ++i) {
            let xCoord = Math.floor((i / 4) % BUFFER_SIZE_X) / BUFFER_SIZE_X;
            let yCoord = Math.floor((i / 4) / BUFFER_SIZE_X) / BUFFER_SIZE_Y;
            if (Number.isNaN(yCoord))
                yCoord = 0.0;

            let distance = 0;
            distance += yCoord;
            // distance += ((centerX - xCoord) * (centerX - xCoord));
            distance = Math.sqrt(distance);

            mx = Math.max(mx, 1.0, 1 / distance);
            mn = Math.min(mn, 1.0, 1 / distance)
            initialParticleData[4 * i + 0] = 0.5;
            // initialParticleData[4 * i + 0] = Math.random() * (1.0 - 0.0) + 0.0;
            initialParticleData[4 * i + 1] = 1.0;
            initialParticleData[4 * i + 2] = xCoord;
            initialParticleData[4 * i + 3] = yCoord;
        }
        console.log("MINMAX", mn, mx)
        // console.log(initialParticleData)
        this.particleBuffers = new Array(2);
        this.particleBindGroups = new Array(2);
        for (let i = 0; i < 2; ++i) {
            this.particleBuffers[i] = this.device.createBuffer({
                size: initialParticleData.byteLength,
                usage: GPUBufferUsage.STORAGE,
                mappedAtCreation: true,
            });
            new Float32Array(this.particleBuffers[i].getMappedRange()).set(
                initialParticleData
            );
            this.particleBuffers[i].unmap();
        }

        this.renderBindGroups = new Array(2);
        for (let i = 0; i < 2; ++i) {
            this.renderBindGroups[i] = this.device.createBindGroup({
                layout: this.pipeline.getBindGroupLayout(0),
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
                            buffer: this.particleBuffers[i],
                            offset: 0,
                            size: initialParticleData.byteLength,
                        },
                    },
                ],

            });
        }

        for (let i = 0; i < 2; ++i) {
            this.particleBindGroups[i] = this.device.createBindGroup({
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

        this.frameCount = 0;
    }

    render(frameRate: number) {
        if (this.paused)
            return;
        let computeTimes = 0;
        if (this.SPEED < 1) {
            let groupName = Math.ceil(1.0 / this.SPEED);
            if ((this.renderFrameCount % groupName == 0))
                computeTimes = 1;
        }
        else if (this.SPEED >= 1) {
            computeTimes = Math.ceil(this.SPEED);
        }

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

        this.device.queue.writeBuffer(
            this.uniformBuffer,
            0,
            new Float32Array([
                this.dimension.width,
                this.dimension.height,
                BUFFER_SIZE_X,
                BUFFER_SIZE_Y,
                this.lastMouseX,
                this.lastMouseY,
                this.frameCount
            ])
        );
        {
            if (this.lastPressed) {

                const passEncoder = commandEncoder.beginComputePass();
                passEncoder.setPipeline(this.paintPipeline);
                passEncoder.setBindGroup(0, this.particleBindGroups[this.frameCount % 2]);
                passEncoder.dispatchWorkgroups(BUFFER_SIZE_X / WORKGROUP_SIZE, BUFFER_SIZE_Y / WORKGROUP_SIZE);
                passEncoder.end();
                ++this.frameCount;

                this.lastPressed = false;
            }
        }

        {
            while (computeTimes--) {
                const passEncoder = commandEncoder.beginComputePass();
                passEncoder.setPipeline(this.computePipeline);
                passEncoder.setBindGroup(0, this.particleBindGroups[this.frameCount % 2]);
                passEncoder.dispatchWorkgroups(BUFFER_SIZE_X / WORKGROUP_SIZE, BUFFER_SIZE_Y / WORKGROUP_SIZE);
                passEncoder.end();
                ++this.frameCount;
            }
        }
        {
            const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
            passEncoder.setPipeline(this.pipeline);
            passEncoder.setBindGroup(0, this.renderBindGroups[this.frameCount % 2]);
            passEncoder.draw(6, 1, 0, 0);
            passEncoder.end();
        }
        this.device.queue.submit([commandEncoder.finish()]);
        ++this.renderFrameCount;
    }
    onClick(mouseX: number, mouseY: number) {
        // this.lastMouseX = mouseX;
        // this.lastMouseY = mouseY;
        // this.lastPressed = true;
    }
    onDragFinished(dx: number, dy: number, mouseX: number, mouseY: number) {

    }
    onDrag(mouseX: number, mouseY: number) {
        this.lastMouseX = mouseX;
        this.lastMouseY = mouseY;
        this.lastPressed = true;
    }
}