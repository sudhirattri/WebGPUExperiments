import './style.css';
import { Boids } from './boids/boids'
import { ToyShader } from './ToyShader/ToyShader'
import { BufferRW } from './BufferRW/bufferRW'
import { Dimensions, WebGPUProject, createWebGPUProject } from './core/framework';
import { GridFlow } from './gridFlow/gridFlow';

async function init(): Promise<void> {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("webgpu-canvas");
    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter.requestDevice();
    const context = canvas.getContext('webgpu') as unknown as GPUCanvasContext;

    const dimension: Dimensions = { width: window.innerWidth, height: window.innerHeight }

    const devicePixelRatio = window.devicePixelRatio || 1;
    const canvasScale = 1.0;
    canvas.width = dimension.width * canvasScale;
    canvas.height = dimension.height * canvasScale;

    
    let currentProject: WebGPUProject;
    currentProject = new GridFlow(device, context, dimension);

    createWebGPUProject(currentProject, canvas);
}

init()

