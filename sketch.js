function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  noFill();
  stroke(255);
}

const parseDrawing = (coordinates, skip = 1) => {
  let result = [];

  for (let i = 0; i < coordinates.length; i += skip) {
    result.push(new Complex(coordinates[i].x, coordinates[i].y));
  }

  return result;
};

const getWaves = (points, amplitudeScalingFactor = 1) => {
  const transform = dft(points);
  let waves = dftToWaves(transform);
  waves[0].amp = 0; // moving the "average" of the drawing to zero

  const dt = 1 / waves.length;

  waves = waves.map((wave) => ({
    ...wave,
    amp: wave.amp * amplitudeScalingFactor,
  }));

  return { waves, dt };
};

const drawFourier = (waves, path, time) => {
  stroke(255);
  strokeWeight(1);
  const position = epicycles(waves, time);
  stroke(200, 0, 0);
  strokeWeight(10);

  path.unshift(position);

  beginShape();
  noFill();
  path.forEach((value) => vertex(value.re, value.img));
  endShape();
};

const heartPoints = parseDrawing(heartDrawing);
let { waves: heartWaves, dt: heartDt } = getWaves(heartPoints, 10);
let heartTime = 0;
let heartPath = [];

function draw() {
  background(0);
  translate(0.5 * width, 0.3 * height);

  drawFourier(heartWaves, heartPath, heartTime);
  heartTime += heartDt;

  if (heartTime >= 1) {
    heartPath = [];
    heartTime = 0;
  }
}
