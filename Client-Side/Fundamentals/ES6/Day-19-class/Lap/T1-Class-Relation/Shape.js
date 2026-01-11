export default class Shape {
  constructor(name) {
    if (new.target === Shape) {
      throw new Error("Cannot create instance from abstract class Shape");
    }
    this.name = name;
  }

  area() {
    throw new Error("Area method must be implemented");
  }

  perimeter() {
    throw new Error("Perimeter method must be implemented");
  }

  toString() {
    return `
Shape: ${this.name}
Area: ${this.area()}
Perimeter: ${this.perimeter()}
        `;
  }
}
