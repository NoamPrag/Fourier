const epicycles = (inputWaves, t) => {
  let sum = new Complex(0, 0);
  let prev = new Complex(0, 0);

  for (const wave of inputWaves) {
    prev = sum;

    const scaledAmp = wave.amp * amplitudeScalingFactor;

    sum = sum.add(
      Complex.polar(scaledAmp, -(t * TWO_PI + wave.phase) * wave.freq)
    );

    line(prev.re, prev.img, sum.re, sum.img);
    circle(prev.re, prev.img, 2 * scaledAmp);
  }

  return sum;
};

const dft = (values) => {
  const w = (-2 * Math.PI) / values.length;

  return values.map((_, k) =>
    range(values.length).reduce((sum, n) => {
      return sum.add(Complex.unit(w * n * k).mult(values[n]));
    }, new Complex(0, 0))
  );
};

const dftToWaves = (data) =>
  data
    .map((x, index) => ({
      freq: index,
      amp: x.mag,
      phase: x.angle,
    }))
    .sort((a, b) => b.amp - a.amp);
