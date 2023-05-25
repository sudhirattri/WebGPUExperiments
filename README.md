# WebGPU Experiments
- Made this repo to test new WebGPU implementation in chrome
- On linux chrome 113 doesn't work - use chrome dev with `#enable-vulkan` and `#enable-unsafe-webgpu`.
- All experiments are based on new compute shaders written in WGSL which was not possible in any web browsers before.

## Demo
- Unstable grid diffuse shader [Link](https://sudhirattri.com/diffusion/)- primitive fluid simulation diffusion step using averages of surrounding which is a numerically unstable method; The decay of local densities is faster to hide this fact. 

## Configure

- Uncomment any of these lines to run a specific experiment
```
    // currentProject = new Boids(device, context);
    // currentProject = new ToyShader(device, context, dimension);
    // currentProject = new GridDiffusionUnstable(device, context, dimension);
```

## Serve locally
- Start server `pnpm run start`

## Build
- Build static - `pnpm run build`
- Will generate bundle.js that requires canvas with `id="webgpu-canvas"`. 
- Use `dist/index.html` for a sample html


