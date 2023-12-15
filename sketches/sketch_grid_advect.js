SCREEN_X = 32 * 28;
SCREEN_Y = 24 * 28;

BUFFER_SIZE_X = 32;
BUFFER_SIZE_Y = 24;

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

      if (dists < 0.0001) {
        gridBuffer[i][j][2] = 0;
        gridBuffer[i][j][3] = -1;
      }
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
let NUM_ITERS = 5;

function clampX(xCoord, deltaX) {
  return Math.min(Math.max(Math.floor(xCoord + deltaX), 0), BUFFER_SIZE_X - 1);
}
function clampY(yCoord, deltaY) {
  return Math.min(Math.max(Math.floor(yCoord + deltaY), 0), BUFFER_SIZE_Y - 1);
}

function divergence() {
  iterloop: for (let iter = 0; iter < NUM_ITERS; iter++) {
    iloop: for (let i = 0; i < BUFFER_SIZE_X; i++) {
      jloop: for (let j = 0; j < BUFFER_SIZE_Y; j++) {
        if (gridBuffer[i][j][1] == 0) continue jloop;
        let currentCell = gridBuffer[i][j];
        let leftCell = gridBuffer[clampX(i, -1)][clampY(j, 0)];
        let rightCell = gridBuffer[clampX(i, 1)][clampY(j, 0)];
        let upCell = gridBuffer[clampX(i, 0)][clampY(j, 1)];
        let downCell = gridBuffer[clampX(i, 0)][clampY(j, -1)];

        let s = leftCell[1] + rightCell[1] + upCell[1] + downCell[1];

        if (s != 0) {
          let outflow =
            rightCell[2] - currentCell[2] + upCell[3] - currentCell[3];
          let p = outflow / s;

          currentCell[2] += leftCell[1] * p;
          currentCell[3] += downCell[1] * p;

          rightCell[2] -= rightCell[1] * p;
          upCell[3] -= upCell[1] * p;
        }
      }
    }
  }
}

function sampleVelX(x, y) {
  let dx = 0.0;
  let dy = 0.5;

  let x0 = clampX(x, dx);
  let x1 = clampX(x0, 1);

  let y1 = clampY(y, dy);
  let y0 = clampY(y1, -1);

  let g = x - x0;
  let h = y - y0 - dy;

  let w00 = 1.0 - g;
  let w01 = g;

  let w10 = 1.0 - h;
  let w11 = h;

  // console.log(x0,x1,y0,y1,x,y,y+dy);
  var sampledVelX = w00 * w10 * gridBuffer[x0][y0][2];
  sampledVelX += w00 * w11 * gridBuffer[x0][y1][2];
  sampledVelX += w10 * w01 * gridBuffer[x1][y0][2];
  sampledVelX += w01 * w11 * gridBuffer[x1][y1][2];
  return sampledVelX;
}

function sampleVelY(x, y) {
  let dx = 0.5;
  let dy = 0.0;

  let x0 = clampX(x, dx);
  let x1 = clampX(x0, 1);

  let y1 = clampY(y, dy);
  let y0 = clampY(y1, -1);

  let g = x - x0 - dx;
  let h = y - y0;

  let w00 = 1.0 - g;
  let w01 = g;

  let w10 = 1.0 - h;
  let w11 = h;

  var sampledVelY = w00 * w10 * gridBuffer[x0][y0][3];
  sampledVelY += w00 * w11 * gridBuffer[x0][y1][3];
  sampledVelY += w10 * w01 * gridBuffer[x1][y0][3];
  sampledVelY += w01 * w11 * gridBuffer[x1][y1][3];

  return sampledVelY;
}

function extrapolate() {
  for (var i = 0; i < BUFFER_SIZE_X; i++) {
    gridBuffer[i][0][2] = gridBuffer[i][1][2];
    gridBuffer[i][BUFFER_SIZE_Y - 1][2] = gridBuffer[i][BUFFER_SIZE_Y - 2][2];
  }
  for (var j = 0; j < BUFFER_SIZE_Y; j++) {
    gridBuffer[0][j][3] = gridBuffer[1][j][3];
    gridBuffer[BUFFER_SIZE_X - 1][j][3] = gridBuffer[BUFFER_SIZE_X - 2][j][3];
  }
}

DELTA_T = 1.0;
function advection() {
  iloop: for (let i = 0; i < BUFFER_SIZE_X; i++) {
    jloop: for (let j = 0; j < BUFFER_SIZE_Y; j++) {
      if (gridBuffer[i][j][1] != 0) {
        let currentCell = gridBuffer[i][j];

        let leftCell = gridBuffer[clampX(i, -1)][clampY(j, 0)];
        let rightCell = gridBuffer[clampX(i, 1)][clampY(j, 0)];
        let upCell = gridBuffer[clampX(i, 0)][clampY(j, 1)];
        let downCell = gridBuffer[clampX(i, 0)][clampY(j, -1)];
        let leftUpDiagCell = gridBuffer[clampX(i, -1)][clampY(j, 1)];
        let leftDownDiagCell = gridBuffer[clampX(i, -1)][clampY(j, -1)];
        let rightUpDiagCell = gridBuffer[clampX(i, 1)][clampY(j, 1)];
        let rightDownDiagCell = gridBuffer[clampX(i, 1)][clampY(j, -1)];

        if (leftCell[1].obstacle != 0.0) {
          let u = currentCell[2];
          let v =
            (leftUpDiagCell[3] + upCell[3] + currentCell[3] + leftCell[3]) *
            0.25;
          let lastX = i - DELTA_T * u;
          let lastY = j - DELTA_T * v;
          let sampledVelXs = sampleVelX(lastX, lastY);
          currentCell[2] = sampledVelXs;
        }

        if (upCell[1].obstacle != 0.0) {
          let v = currentCell[3];
          let u =
            (downCell[2] +
              currentCell[2] +
              rightDownDiagCell[2] +
              rightCell[2]) *
            0.25;
          let lastX = i - DELTA_T * u;
          let lastY = j - DELTA_T * v;
          let sampledVelYs = sampleVelY(lastX, lastY);
          currentCell[3] = sampledVelYs;
        }
        
        if(currentCell[2]>1  || currentCell[3]>1)
            console.log("result",currentCell)
        
      }
    }
  }
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
      let velx = gridBuffer[i][j][2];
      let velxNeg = -gridBuffer[i][j][2];
      let vely = gridBuffer[i][j][3];
      let velyNeg = -gridBuffer[i][j][3];

      let SATURATION = 1;
      let LIMIT = 255 * SATURATION;

      let velocityLength = velx * velx + vely * vely;
      let col1 = color(velx * LIMIT, vely * LIMIT, vely * LIMIT);
      // let col1 = color(velocityLength * LIMIT, velocityLength * LIMIT, velocityLength * LIMIT);

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
