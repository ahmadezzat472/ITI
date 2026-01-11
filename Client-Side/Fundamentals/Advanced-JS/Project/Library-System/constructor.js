/**
 ** ---------------------------------------------------
 ** Author Constructor
 ** ---------------------------------------------------
 */
function Author(name, email) {
  this.name = name;
  this.email = email;
}

/** Prototype */
Author.prototype.displayInfo = function () {
  var msg = "the name: " + this.name + "the email: " + this.email;
  console.log(msg);
};

/**
 ** ---------------------------------------------------
 ** BOOK Constructor
 ** ---------------------------------------------------
 */
function Book(title, price, author) {
  Book.count++;

  this.id = Book.count;
  this.title = title;
  this.price = price;
  this.author = author;
}

/** Prototype */
Book.prototype.displayInfo = function () {
  var msg = "the title: " + this.title + " || " + "the price: " + this.price;
  console.log(msg);
  console.log("the author: ");
  this.author.displayInfo();
};

/** Static variable */
Book.count = 0;
