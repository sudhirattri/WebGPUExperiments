import { WebGPUProject, Dimensions } from '../core/framework'
import * as dat from 'dat.gui';

import { ImageToBuffer } from '../helpers/ImageToBuffer';

import { BufferRenderer } from '../helpers/bufferRenderer';
import { GridBuffer } from '../helpers/gridBuffer';
import { GridShader } from '../helpers/gridShader';

import diffuseWGSL from './computeDiffuse.wgsl';
import paintWGSL from './computePaint.wgsl';
import drawWGSL from './draw.wgsl';

const BUFFER_SIZE_X = 512
const BUFFER_SIZE_Y = 512 - 64

export class GridFlow implements WebGPUProject {
    device: GPUDevice;
    context: GPUCanvasContext;
    screenDimension: Dimensions

    renderFrameCount: number = 0;
    frameCount: number = 0;

    paused: boolean = false;
    SPEED: number = 0.5;
    lastPressed: boolean = false;
    lastMouseX: number = 0;
    lastMouseY: number = 0;
    simParams: Record<string, any>;

    gridBuffer: GridBuffer;
    imageToBufferHelper: ImageToBuffer;
    bufferRenderer: BufferRenderer;
    gridDiffuseShader : GridShader;
    paintShader : GridShader;

    constructor(device: GPUDevice, context: GPUCanvasContext, screenDimension: Dimensions) {
        this.device = device;
        this.context = context;
        this.screenDimension = screenDimension;
    }
    async initialize() {
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

        this.gridBuffer = new GridBuffer(this.device, {
            height: BUFFER_SIZE_Y,
            width: BUFFER_SIZE_X
        })

        this.gridDiffuseShader = new GridShader(
            this.device,
            this.gridBuffer,
            diffuseWGSL,
            this.screenDimension,
            {
                width:BUFFER_SIZE_X,
                height:BUFFER_SIZE_Y
            });

        this.paintShader = new GridShader(
            this.device,
            this.gridBuffer,
            paintWGSL,
            this.screenDimension,
            {
                width:BUFFER_SIZE_X,
                height:BUFFER_SIZE_Y
            });

        this.bufferRenderer = new BufferRenderer(
            this.device,
            this.context,
            drawWGSL,
            this.screenDimension,
            {
                width:BUFFER_SIZE_X,
                height:BUFFER_SIZE_Y
            },
            this.gridBuffer.buffersArray,
            this.gridBuffer.bufferSize)

        this.imageToBufferHelper = new ImageToBuffer();

        await this.imageToBufferHelper.initialize(
            this.device, 
            new URL('./../gridFlow/paint.png',import.meta.url).toString(),
            this.gridBuffer.buffersArray, 
            this.gridBuffer.bufferSize,
            {
                height:BUFFER_SIZE_Y,
                width:BUFFER_SIZE_X
            });

            this.imageToBufferHelper.performCopy(this.frameCount%2+1);

        this.frameCount = 0;
    }

    render(frameRate: number) {
        if (this.paused)
            return;
        let computeTimes = 0;
        if (this.SPEED < 1) {
            let groupName = Math.round(1.0 / this.SPEED);
            if ((this.renderFrameCount % groupName == 0))
                computeTimes = 1;
        }
        else if (this.SPEED >= 1) {
            computeTimes = Math.round(this.SPEED);
        }

        const commandEncoder = this.device.createCommandEncoder();

        this.device.queue.writeBuffer(
            this.paintShader.uniformBuffer,
            0,
            new Float32Array([
                this.screenDimension.width,
                this.screenDimension.height,
                BUFFER_SIZE_X,
                BUFFER_SIZE_Y,
                this.lastMouseX,
                this.lastMouseY,
                this.frameCount
            ])
        );
        {
            if (this.lastPressed) {
                this.paintShader.render(commandEncoder,this.frameCount % 2);
                ++this.frameCount;
                this.lastPressed = false;
            }
        }
        {
            while (computeTimes--) {
                this.gridDiffuseShader.render(commandEncoder,this.frameCount % 2)
                ++this.frameCount;
            }
        }
        {
            this.bufferRenderer.render(commandEncoder,this.frameCount % 2)
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