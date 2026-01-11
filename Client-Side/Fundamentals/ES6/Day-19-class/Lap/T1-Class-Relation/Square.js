import Shape from "./Shape.js";

export default class Square extends Shape {
  constructor(side) {
    super("Square");
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return 4 * this.side;
  }

  toString() {
    return `
Shape: ${this.name}
Side: ${this.side}
Area: ${this.area()}
Perimeter: ${this.perimeter()}
        `;
  }
}
