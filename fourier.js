const epicycles = (inputWaves, t) => {
  let sum = new Complex(0, 0);
  let prev = new Complex(0, 0);

  for (const wave of inputWaves) {
    prev = sum;

    sum = sum.add(
      Complex.polar(wave.amp, t * Math.PI * 2 * wave.freq + wave.phase)
    );

    line(prev.re, prev.img, sum.re, sum.img);
    circle(prev.re, prev.img, 2 * wave.amp);
  }

  return sum;
};

const dft = (values) => {
  const w = (-2 * Math.PI) / values.length;

  return values.map((_, k) =>
    range(values.length).reduce((sum, n) => {
      return sum.add(
        Complex.unit(w * n * k)
          .mult(values[n])
          .scale(1 / values.length)
      );
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
