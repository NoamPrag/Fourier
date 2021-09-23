function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  noFill();
  stroke(255);
}

// const samples = [new Complex(10, 20), new Complex(20, 40), new Complex(30, 60)];
const samples = range(10).map((index) =>
  Complex.unit((index * 2 * Math.PI) / 9).scale(10)
);

const numberOfCircles = 10;

const createSeries = (getWave) => range(numberOfCircles).map(getWave);

const squareWaves = createSeries((n) => ({
  freq: 2 * n + 1,
  amp: 1 / (2 * n + 1),
  phase: 0.5 * Math.PI,
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

const customWaves = createSeries((n) => ({
  freq: n + 1,
  amp: 1 / (n + 2),
  phase: n % 50 === 0 ? Math.PI : 0,
}));

// let drawingSample = [];
// const skip = 15;

// for (let i = 0; i < drawing.length; i += skip) {
//   drawingSample[i / skip] = drawing[i];
// }

const transformed = dft(samples);
const waves = dftToWaves(transformed);
const amplitudeScalingFactor = 1;

let time = 0;
let output = [];

function draw() {
  background(0);
  translate(0.5 * width, 0.5 * height);

  const position = epicycles(waves, time);

  // output.unshift(position.img);
  output.unshift(position);

  // translate(600, 0);
  // line(position.re - 600, position.img, 0, position.img);

  beginShape();
  noFill();
  // output.forEach((value, index) => vertex(index, value));
  output.forEach((value) => vertex(value.re, value.img));
  endShape();

  time += 0.005;

  if (time >= 1) {
    output = [];
    time = 0;
  }
}
