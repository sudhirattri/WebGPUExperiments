import Stats from 'stats.js';
const MOVE_EPSILON = 60;
export type Dimensions = {
    width: number
    height: number
};

export interface WebGPUProject {
    device: GPUDevice
    context: GPUCanvasContext
    initialize: () => void
    render: (frameRate: number) => void
    onClick: (mouseX: number, mouseY: number) => void
    onDragFinished: (dx: number, dy: number, mouseX: number, mouseY: number) => void
    onDrag: (mouseX: number, mouseY: number) => void
}

export async function createWebGPUProject(currentProject: WebGPUProject, canvas: HTMLCanvasElement): Promise < void > {

    let lastFrame: number = undefined;
    let numFrames = 0;
    let sumDelta = 0;


    currentProject.initialize();

    var stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);

    let updateFrame = () => {
        stats.begin();
        let currentFrame = performance.now();
        if (typeof lastFrame !== "undefined")
            sumDelta += 1000.0 / (currentFrame - lastFrame);
        numFrames += 1;
        lastFrame = currentFrame;
        currentProject.render(sumDelta / numFrames)

        stats.end();
        requestAnimationFrame(updateFrame);
    }
    requestAnimationFrame(updateFrame);

    let mouseX: number = 0,
        mouseY: number = 0;
    let isDragging = false;
    canvas.addEventListener('mousedown', (event) => {
        mouseX = event.pageX;
        mouseY = event.pageY;
        isDragging = true;
    })
    canvas.addEventListener('mousemove', (event) => {
        if (isDragging) {
            let mx = event.pageX;
            let my = event.pageY;
            currentProject.onDrag(mx, my)
        }
    })
    canvas.addEventListener('mouseup', (event) => {
        const dx = Math.abs(event.pageX - mouseX);
        const dy = Math.abs(event.pageY - mouseY);
        const isDrag = dx >= MOVE_EPSILON || dy >= MOVE_EPSILON;
        if (!isDrag) {
            currentProject.onClick(mouseX, mouseY);
        } else {
            currentProject.onDragFinished(dx, dy, mouseX, mouseY);
        }
        isDragging = false;
    })

}