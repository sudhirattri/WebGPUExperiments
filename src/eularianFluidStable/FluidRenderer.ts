import { Dimensions } from "../core/framework";

export class FluidRenderer {
    device: GPUDevice;
    context: GPUCanvasContext;
    screenDimension: Dimensions
    bufferDimension: Dimensions

    imageToBufferBindGroupLayout: GPUBindGroupLayout
    imageToBufferPipeline: GPUComputePipeline;

    renderBindGroups: GPUBindGroup[]
    pipeline: GPURenderPipeline;
    uniformBuffer: GPUBuffer
    bufferDimensions: Dimensions

    numBuffers: number;
    constructor(
        device: GPUDevice,
        context: GPUCanvasContext, 
        shader: string,
        screenDimension: Dimensions, 
        bufferDimension: Dimensions,
        bufferArray: GPUBuffer[],
        bufferSize: number,
        auxiliaryBufferArray: GPUBuffer,
        auxiliaryBufferSize: number,
        )
    {

        this.device = device;
        this.context = context;
        this.screenDimension = screenDimension;
        this.bufferDimension = bufferDimension;

        this.numBuffers = bufferArray.length;

        const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
        this.context.configure({
            device: this.device,
            format: presentationFormat,
            alphaMode: 'premultiplied',
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
                },
                {
                    binding: 2,
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
                    code: shader,
                }),
                entryPoint: 'vertex_main',
            },
            fragment: {
                module: this.device.createShaderModule({
                    code: shader,
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

        this.renderBindGroups = new Array(2);
        for (let i = 0; i < this.numBuffers; ++i) {
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
                            buffer: bufferArray[i],
                            offset: 0,
                            size: bufferSize,
                        },
                    },
                    {
                        binding: 2,
                        resource: {
                            buffer: auxiliaryBufferArray,
                            offset: 0,
                            size: auxiliaryBufferSize,
                        },
                    },
                ],

            });
        }
    }

    render(commandEncoder: GPUCommandEncoder,index: number){
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

        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setBindGroup(0, this.renderBindGroups[index]);
        passEncoder.draw(6, 1, 0, 0);
        passEncoder.end();
    }
}