SCREEN_X = 32 * 28;
SCREEN_Y = 24 * 28;

BUFFER_SIZE_X = 72;
BUFFER_SIZE_Y = 64;

let cw = SCREEN_X / BUFFER_SIZE_X;
let ch = SCREEN_Y / BUFFER_SIZE_Y;

let gridBuffer = [];
let red_col;
let green_col;
let blue_col;
let frames = 0;
let computes = 0;

function setup() {
  red_col = color(255, 0, 0);
  green_col = color(255, 255, 0);
  blue_col = color(255, 255, 0);
  for (let i = 0; i < BUFFER_SIZE_X; i++) {
    gridBuffer[i] = [];
    for (let j = 0; j < BUFFER_SIZE_Y; j++) {
      let x = i / BUFFER_SIZE_X - 0.5;
      let y = 1 - j / BUFFER_SIZE_Y - 0.5;

      let dists = x * x + y * y;
      gridBuffer[i].push([0.0, 1.0, 0.0, 0.0]);

      if (
        i == 0 ||
        j == 0 ||
        i == BUFFER_SIZE_X - 1 ||
        j == BUFFER_SIZE_Y - 1
      ) {
        gridBuffer[i][j][1] = 0.0;
      }
      else{
        gridBuffer[i][j][2]=1.0;
        gridBuffer[i][j][3]=1.0;
      }

      if(j==4){
        gridBuffer[i][j][2]=0.0;
      }
    //   if (dists < 0.01) {
    //     gridBuffer[i][j][2] = 0;
    //     gridBuffer[i][j][3] = -1;
    //   }
    }
  }
  createCanvas(SCREEN_X, SCREEN_Y);
  frames = 0;
  computes = 0;
}

function multColor(inputColor, mult) {
  let v1 = inputColor._getRed() * mult;
  let v2 = inputColor._getGreen() * mult;
  let v3 = inputColor._getBlue() * mult;
  return color(v1, v2, v3);
}

function clampX(xCoord, deltaX) {
  return Math.min(Math.max(Math.floor(xCoord + deltaX), 0), BUFFER_SIZE_X - 1);
}
function clampY(yCoord, deltaY) {
  return Math.min(Math.max(Math.floor(yCoord + deltaY), 0), BUFFER_SIZE_Y - 1);
}

function draw() {
  textSize(16);

  scale(1, -1);
  translate(0, -SCREEN_Y);
  
  if (frames % 10 == 0 ) {
    // divergence();
    // extrapolate();
    // advection();
    // advectTest();
    // console.log("RUN COMPUTE")
    computes++;
  }

  background(0);
  for (let i = 0; i < BUFFER_SIZE_X; i++) {
    for (let j = 0; j < BUFFER_SIZE_Y; j++) {
      let grid_x = gridBuffer[i][j][0];
      let grid_y = gridBuffer[i][j][1];
      let grid_z = gridBuffer[i][j][2];
      let grid_a = gridBuffer[i][j][3];

      let SATURATION = 1;
      let LIMIT = 255 * SATURATION;

      let col1 = color(grid_x * LIMIT, grid_y * LIMIT, grid_z * LIMIT);
      fill(col1);
      rect(i * cw, j * ch, cw, ch);
    }
  }

  scale(1, -1);
  textSize(16);
  fill(255, 0, 0);
  line(0, 62, width, 62);
  textAlign(LEFT, BOTTOM);
  text(`frames : ${frames}, computes: ${computes}`, 20, -20);

  frames++;
}
