var rectangle = {
  width: 10,
  height: 5,

  getArea: function () {
    return this.width * this.height;
  },

  getPerimeter: function () {
    return this.width * this.height * 2;
  },

  displayInfo: function () {
    console.log("Rectangle Information:");
    console.log("Width:", this.width);
    console.log("Height:", this.height);
    console.log("Area:", this.getArea());
    console.log("Perimeter:", this.getPerimeter());
  },
};

rectangle.displayInfo();
