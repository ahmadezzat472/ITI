/**
 ** ---------------------------------------------------
 ** shape constructor parent
 ** ---------------------------------------------------
 */
function Shape() {
  if (this.constructor === Shape) throw "error this is an abstract class";
}
/** class prototype */
Shape.prototype.getArea = function () {
  if (this.constructor === Square) return this.width * this.width;
  return this.width * this.height;
};

Shape.prototype.getPerimeter = function () {
  if (this.constructor === Square) return this.width * 4;
  return this.width * this.height * 2;
};

/**
 ** ---------------------------------------------------
 ** rectangle constructor child
 ** ---------------------------------------------------
 */
function Rectangle(width, height, isFromSquare) {
  /** call Shape constructor parent */
  Shape.call(this);

  if (!isFromSquare) {
    if (Rectangle.count >= 1) throw "can only create one rectangle";
    Rectangle.count++;
  }

  this.width = width;
  this.height = height;
}

/** static variable */
Rectangle.count = 0;

/** class prototype */
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};
Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

var r = new Rectangle(3, 2);
//console.log(r);
// console.log(r.getArea());
// console.log(r.getPerimeter());

/**
 ** ---------------------------------------------------
 ** square constructor child
 ** ---------------------------------------------------
 */
function Square(side) {
  /** call Rectangle constructor parent */
  Rectangle.call(this, side, side, true);

  if (Square.count >= 1) throw "can only create one square";
  Square.count++;
}

/** static variable */
Square.count = 0;

/** class prototype */
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

var s = new Square(3);
//console.log(s);
// console.log(s.getArea());
// console.log(s.getPerimeter());
