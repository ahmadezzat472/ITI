/**
 *
 * @param  title
 * @param {*} price
 * @param {*} author
 * @param {*} publisher
 * @param {*} numOfPages
 * @param {*} numOfCopies
 * @param {*} numOfChapters
 */

function Book(
  title,
  price,
  author,
  publisher,
  numOfPages,
  numOfCopies,
  numOfChapters
) {
  Book.count++;
  this.id = Book.count;
  this.title = title;
  this.price = price;
  this.author = author;
  this.publisher = publisher;
  this.numOfPages = numOfPages;
  this.numOfCopies = numOfCopies;
  this.numOfChapters = numOfChapters;
}

/** Prototype */
Book.prototype.displayInfo = function () {
  console.log(this.title);
  console.log(this.price);
  console.log(this.author);
  console.log(this.numOfChapters);
};

/** Static variable */
Book.count = 0;

/** Static methods */

// var b1 = new Book("book 1", 5, "ahmed", "ezzat", 15, 15, 15);
// console.log(b1.id);

//----------------------------------------------------------------------------------
function Box(height, width, length) {
  /** Global Variable */
  this.height = height;
  this.width = width;
  this.length = length;

  /** Private Variable */
  var books = [];

  /** Global Methods */
  this.isBookExist = function (bookTitle) {
    for (var i = 0; i < books.length; i++) {
      if (books[i].title === bookTitle) {
        return i;
      }
    }
    return -1;
  };

  this.addBook = function (
    title,
    price,
    author,
    publisher,
    numOfPages,
    numOfCopies,
    numOfChapters
  ) {
    console.log(this.isBookExist(title));

    if (this.isBookExist(title) == -1) {
      var newBook = new Book(
        title,
        price,
        author,
        publisher,
        numOfPages,
        numOfCopies,
        numOfChapters
      );
      books.push(newBook);
    } else {
      console.log("this book is already exist");
    }
  };

  this.deleteBook = function (title) {
    var index = this.isBookExist(title);
    if (index != -1) {
      books.splice(index, 1);
    } else {
      console.log("this book not exist");
    }
  };

  this.displayBooks = function () {
    books.forEach(function (book) {
      console.log("book#" + book.id + " | " + "title: " + book.title);
    });
  };
}

/** Prototype */
Box.prototype.displayInfo = function () {
  var msg =
    "the box details: " +
    "the height: " +
    this.height +
    " || " +
    "the width: " +
    this.width +
    " || " +
    "the length: " +
    this.length;
  console.log(msg);
  this.displayBooks();
};

var box = new Box(50, 50, 10, "material");
box.addBook("book 1", 5, "ahmed", "ezzat", 15, 15, 15);
box.addBook("book 2", 5, "ahmed", "ezzat", 15, 15, 15);
box.displayBooks();
box.deleteBook("book 1");
console.log("---------------");
box.addBook("book 1", 5, "ahmed", "ezzat", 15, 15, 15);
box.displayBooks();

/**
 * questions:
 * var books = []; is correct or should be global
 */
