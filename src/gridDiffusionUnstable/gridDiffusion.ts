import { WebGPUProject, Dimensions } from '../core/framework'
import * as dat from 'dat.gui';

import { ImageToBuffer } from '../helpers/ImageToBuffer';

import { BufferRenderer } from '../helpers/bufferRenderer';
import { GridBuffer } from '../helpers/gridBuffer';
import { GridShader } from '../helpers/gridShader';

import diffuseWGSL from './computeDiffuse.wgsl';
import paintWGSL from './computePaint.wgsl';
import drawWGSL from './draw.wgsl';

function readFile(file:File){
    return new Promise((resolve, reject) => {
      var fr = new FileReader();  
      fr.onload = () => {
        resolve(fr.result )
      };
      fr.onerror = reject;
      fr.readAsDataURL(file);
    });
  }
  
export class GridDiffusionUnstable implements WebGPUProject {
    device: GPUDevice;
    context: GPUCanvasContext;
    screenDimension: Dimensions

    renderFrameCount: number = 0;
    frameCount: number = 0;

    paused: boolean = false;
    SPEED: number = 1;
    lastPressed: boolean = false;
    lastMouseX: number = 0;
    lastMouseY: number = 0;
    simParams: Record<string, any>;

    gridBuffer: GridBuffer;
    imageToBufferHelper: ImageToBuffer;
    bufferRenderer: BufferRenderer;
    gridDiffuseShader : GridShader;
    paintShader : GridShader;

    BUFFER_SIZE_X : number = 256
    BUFFER_SIZE_Y : number = 144
    
    constructor(device: GPUDevice, context: GPUCanvasContext, screenDimension: Dimensions) {
        this.device = device;
        this.context = context;
        this.screenDimension = screenDimension;
    }
    async initialize() {
        const hiddenFileInput : HTMLInputElement = document.createElement("input");
        hiddenFileInput.type = "file"
        hiddenFileInput.style.visibility = "hidden"

        const gui = new dat.GUI({ name: 'My GUI' });
        var gridSettings = gui.addFolder('Grid Settings');
        var  ImageInputController : any;
        var thisObj : GridDiffusionUnstable = this;
        this.simParams = {
            resolutionScaling:'256x144',
            speed: 1.0,
            // loadImage: `${"monke.png"}`,
            loadImageInput : function(){
                hiddenFileInput.click();
            },
            copyImageToBuffer : async function(){
                if(typeof hiddenFileInput?.files[0] !== 'undefined'){
                    let fileURL : string = await readFile(hiddenFileInput?.files[0]) as string
                    await thisObj.imageToBufferHelper.initialize(
                        thisObj.device, 
                        fileURL,
                        thisObj.gridBuffer.buffersArray, 
                        thisObj.gridBuffer.bufferSize,
                        {
                            height:thisObj.BUFFER_SIZE_Y,
                            width:thisObj.BUFFER_SIZE_X
                        });
                    thisObj.imageToBufferHelper.performCopy(thisObj.frameCount%2);

                }
                else{
                    await thisObj.imageToBufferHelper.initialize(
                        thisObj.device, 
                        new URL('./monke.jpg',import.meta.url).toString(),
                        thisObj.gridBuffer.buffersArray, 
                        thisObj.gridBuffer.bufferSize,
                        {
                            height:thisObj.BUFFER_SIZE_Y,
                            width:thisObj.BUFFER_SIZE_X
                        });
                    thisObj.imageToBufferHelper.performCopy(thisObj.frameCount%2);
                }
            }
        };
        const resMapping :Record<string, Array<number>> = {
            '32x24':[32, 24],
            '64x40':[64, 40],
            '128x72':[128, 72],
            '256x144':[256, 144],
            '512x288':[512, 288],
            '1024x576':[1024, 576],
        }
        let updateSimResolution = async () => {
            console.log("Changed Params", this.simParams)
            this.SPEED = this.simParams.speed;
            this.BUFFER_SIZE_X = resMapping[this.simParams.resolutionScaling][0];
            this.BUFFER_SIZE_Y = resMapping[this.simParams.resolutionScaling][1];
            await this.reRender();
        }
        let updateSimSpeed = async () => {
            console.log("Changed Params", this.simParams)
            this.SPEED = this.simParams.speed;
        }

        gridSettings.add(this.simParams, "resolutionScaling", {
            '32x24':'32x24',
            '64x40':'64x40',
            '128x72':'128x72',
            '256x144':'256x144',
            '512x288':'512x288',
            '1024x576':'1024x576',
        }).onFinishChange(updateSimResolution);
        gridSettings.add(this.simParams, "speed", 0, 5, 0.1).onFinishChange(updateSimSpeed);
        // gridSettings.add(this.simParams, 'loadImage').name('Loaded Image');
        ImageInputController = gridSettings.add(this.simParams, 'loadImageInput').name(`Texture Upload : ${"monke.png"}`);
        gridSettings.add(this.simParams, 'copyImageToBuffer').name(`Copy Texture to Buffer`);
        gridSettings.open()

        hiddenFileInput.onchange = function(event:any) {
            if(typeof hiddenFileInput?.files[0]?.name !== undefined)
                ImageInputController.name(`Texture Upload : ${hiddenFileInput?.files[0]?.name}`)
            console.log(hiddenFileInput?.files[0]?.name)
        }

        await this.reRender();
    }
    async reRender() {

        this.gridBuffer = new GridBuffer(this.device, {
            height: this.BUFFER_SIZE_Y,
            width: this.BUFFER_SIZE_X
        })

        this.gridDiffuseShader = new GridShader(
            this.device,
            this.gridBuffer,
            diffuseWGSL,
            this.screenDimension,
            {
                width:this.BUFFER_SIZE_X,
                height:this.BUFFER_SIZE_Y
            });

        this.paintShader = new GridShader(
            this.device,
            this.gridBuffer,
            paintWGSL,
            this.screenDimension,
            {
                width:this.BUFFER_SIZE_X,
                height:this.BUFFER_SIZE_Y
            });

        this.bufferRenderer = new BufferRenderer(
            this.device,
            this.context,
            drawWGSL,
            this.screenDimension,
            {
                width:this.BUFFER_SIZE_X,
                height:this.BUFFER_SIZE_Y
            },
            this.gridBuffer.buffersArray,
            this.gridBuffer.bufferSize)

        this.imageToBufferHelper = new ImageToBuffer();

        // await this.imageToBufferHelper.initialize(
        //     this.device, 
        //     new URL('./monke.jpg',import.meta.url).toString(),
        //     this.gridBuffer.buffersArray, 
        //     this.gridBuffer.bufferSize,
        //     {
        //         height:this.BUFFER_SIZE_Y,
        //         width:this.BUFFER_SIZE_X
        //     });
        // this.imageToBufferHelper.performCopy(this.frameCount%2);
        
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
                this.BUFFER_SIZE_X,
                this.BUFFER_SIZE_Y,
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