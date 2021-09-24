function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  noFill();
  stroke(255);
}

const numberOfCircles = 10;

const createSeries = (getWave) => range(numberOfCircles).map(getWave);

const squareWaves = createSeries((n) => ({
  freq: 2 * n + 1,
  amp: 1 / (2 * n + 1),
  phase: 0,
}));

const sawtoothWaves = createSeries((n) => ({
  freq: n + 1,
  amp: 1 / (n + 1),
  phase: 0,
}));

const triangleWaves = createSeries((n) => {
  return {
    freq: 2 * n + 1,
    amp: (n % 2 === 0 ? -1 : 1) / (2 * n + 1) ** 2,
    phase: 0,
  };
});

let waves = sawtoothWaves;
const amplitudeScalingFactor = 100;
const dt = 0.005;

let time = 0;
let output = [];

function draw() {
  background(0);
  translate(0.2 * width, 0.5 * height);

  const position = epicycles(waves, time);

  output.unshift(position.img);

  translate(600, 0);
  line(position.re - 600, position.img, 0, position.img);

  beginShape();
  noFill();
  output.forEach((value, index) => vertex(index, value));
  endShape();

  time += dt;

  if (output.length >= 600) output.pop();
}
