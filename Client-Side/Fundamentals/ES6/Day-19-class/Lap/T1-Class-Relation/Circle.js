// Circle.js
import Shape from "./Shape.js";

export default class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `
Shape: ${this.name}
Radius: ${this.radius}
Area: ${this.area().toFixed(2)}
Perimeter: ${this.perimeter().toFixed(2)}
        `;
  }
}
