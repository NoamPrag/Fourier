class Complex {
  constructor(re, img) {
    this.re = re;
    this.img = img;
  }

  static unit = (angle) => new Complex(Math.cos(angle), Math.sin(angle));

  static polar = (radius, angle) => Complex.unit(angle).scale(radius);

  get mag() {
    return Math.hypot(this.re, this.img);
  }

  get angle() {
    return Math.atan2(this.img, this.re);
  }

  get con() {
    return new Complex(this.re, -this.img);
  }

  add = (other) => new Complex(this.re + other.re, this.img + other.img);
  sub = (other) => new Complex(this.re - other.re, this.img - other.img);

  mult = (other) =>
    new Complex(
      this.re * other.re - this.img * other.img,
      this.re * other.img + this.img * other.re
    );

  scale = (scalar) => new Complex(this.re * scalar, this.img * scalar);
}
