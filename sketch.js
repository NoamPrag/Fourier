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
  stroke(0, 0, 200);
  strokeWeight(10);

  path.unshift(position);

  beginShape();
  noFill();
  path.forEach((value) => vertex(value.re, value.img));
  endShape();
};

const williBodyPoints = parseDrawing(williBodyDrawing);
const { waves: williBodyWaves, dt: williBodyDt } = getWaves(
  williBodyPoints,
  0.04
);

let williBodyTime = 0;
let williBodyPath = [];

const williHeadPoints = parseDrawing(williHeadDrawing);
const { waves: williHeadWaves, dt: williHeadDt } = getWaves(
  williHeadPoints,
  0.04
);
let williHeadTime = 0;
let williHeadPath = [];

function draw() {
  background(0);
  translate(0.5 * width, 0.3 * height);

  drawFourier(williHeadWaves, williHeadPath, williHeadTime);

  williHeadTime += williHeadDt;

  translate(0, 0.43 * height);

  drawFourier(williBodyWaves, williBodyPath, williBodyTime);
  williBodyTime += williBodyDt;

  if (williHeadTime >= 1) {
    williHeadPath = [];
    williHeadTime = 0;
    williBodyPath = [];
    williBodyTime = 0;
  }
}
