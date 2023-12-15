import './style.css';
import { Boids } from './boids/boids'
import { ToyShader } from './ToyShader/ToyShader'
import { Dimensions, WebGPUProject, createWebGPUProject } from './core/framework';
import { GridDiffusionUnstable } from './gridDiffusionUnstable/gridDiffusion';
import { EulerianFluidStable } from './eularianFluidStable/eularianFluidStable';

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
    currentProject = new Boids(device, context);
    // currentProject = new ToyShader(device, context, dimension);
    // currentProject = new GridDiffusionUnstable(device, context, dimension);
    // currentProject = new EulerianFluidStable(device, context, dimension);

    createWebGPUProject(currentProject, canvas);
}

init()

