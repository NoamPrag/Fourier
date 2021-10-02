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
  stroke(150);
  strokeWeight(1);
  const position = epicycles(waves, time);
  stroke(255, 255, 0);
  strokeWeight(10);

  path.unshift(position);

  beginShape();
  noFill();
  path.forEach((value) => vertex(value.re, value.img));
  endShape();
};

const points = parseDrawing(rubberDuckDrawing);
let { waves, dt } = getWaves(points, 0.5);
let time = 0;
let path = [];

function draw() {
  background(0);
  translate(0.5 * width, 0.5 * height);

  drawFourier(waves, path, time);
  time += dt;

  if (time >= 1) {
    path = [];
    time = 0;
  }
}
