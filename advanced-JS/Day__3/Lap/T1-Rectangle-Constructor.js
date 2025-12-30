function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  Rectangle.count++;
}

/** static variable */
Rectangle.count = 0;

/** static methods */
Rectangle.getNumOfObjects = function () {
  return Rectangle.count;
};

/** class prototype */
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function () {
  return this.width * this.height * 2;
};

Rectangle.prototype.toString = function () {
  var msg =
    "Rectangle Information: \n" +
    "Width: " +
    this.width +
    " || " +
    "the Height: " +
    this.height +
    " || " +
    "the Area: " +
    this.getArea() +
    " || " +
    "the Perimeter: " +
    this.getPerimeter() +
    " || ";
  return msg;
};

var rectangle1 = new Rectangle(10, 10);
console.log(rectangle1.toString());
var rectangle2 = new Rectangle(100, 100);
console.log(rectangle2.toString());
console.log(Rectangle.getNumOfObjects());
