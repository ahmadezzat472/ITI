/**
 ** ---------------------------------------------------
 ** BOOK Constructor
 ** ---------------------------------------------------
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
  var msg =
    "the title#" +
    this.id +
    ": " +
    this.title +
    " || " +
    "the price: " +
    this.price +
    " || " +
    "the author: " +
    this.author +
    " || " +
    "the numOfChapters: " +
    this.numOfChapters +
    " || ";
  console.log(msg);
};

/** Static variable */
Book.count = 0;

/**
 ** ---------------------------------------------------
 ** BOX Constructor
 ** ---------------------------------------------------
 */
function Box(height, width, length) {
  /** Global Variable */
  this.height = height;
  this.width = width;
  this.length = length;

  /** Private Variable */
  var books = [];

  /** Global Methods */
  this.getBooks = function () {
    return books;
  };
}

/** Prototype */
Box.prototype.isBookExist = function (bookTitle) {
  var books = this.getBooks();
  for (var i = 0; i < books.length; i++) {
    if (books[i].title === bookTitle) {
      return i;
    }
  }
  return -1;
};

Box.prototype.addBook = function (newBook) {
  var isExist = this.isBookExist(newBook.title);
  var isFull = this.length == this.getNumOfBooks();
  if (isExist == -1 && !isFull) {
    var books = this.getBooks();
    books.push(newBook);
  } else {
    if (isExist != -1) console.log("this book is already exist");
    else console.log("the size of Box is full");
  }
};

Box.prototype.deleteBook = function (title) {
  var index = this.isBookExist(title);
  var books = this.getBooks();
  if (index != -1) {
    books.splice(index, 1);
  } else {
    console.log("this book not exist");
  }
};

Box.prototype.displayBooks = function () {
  var books = this.getBooks();
  books.forEach(function (book) {
    book.displayInfo();
  });
};

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

Box.prototype.getNumOfBooks = function () {
  return this.getBooks().length;
};

Box.prototype.toString = function () {
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
  return msg;
};

Box.prototype.valueOf = function () {
  return this.getNumOfBooks();
};

console.log("------------------------Box 1------------------------");
var box1 = new Box(100, 100, 10);

console.log("------------------\nafter add 3 books: \n------------------");
box1.addBook(new Book("book 1", 5, "ahmed", "ezzat", 15, 15, 15));
box1.addBook(new Book("book 2", 5, "ali", "nader", 15, 15, 15));
box1.addBook(new Book("book 3", 5, "ali", "nader", 15, 15, 15));
box1.displayInfo();
// console.log(box1.toString());

console.log("----------------------\nafter deleted 1 books: \n----------------------");
box1.deleteBook("book 1");
box1.displayInfo();

console.log("-------------------------------\nafter add book is already exist: \n-------------------------------");
box1.addBook(new Book("book 2", 5, "ahmed", "ezzat", 15, 15, 15));
box1.displayInfo();

console.log("------------------------\nget the number of books: \n------------------------");
console.log(box1.getNumOfBooks());

console.log("------------------------Box 2------------------------");
var box2 = new Box(50, 50, 5);

console.log("------------------\nafter add 5 books: \n------------------");
box2.addBook(new Book("book 11", 5, "ahmed", "ezzat", 15, 15, 15));
box2.addBook(new Book("book 22", 5, "ahmed", "ezzat", 15, 15, 15));
box2.addBook(new Book("book 33", 5, "ahmed", "ezzat", 15, 15, 15));
box2.addBook(new Book("book 44", 5, "ahmed", "ezzat", 15, 15, 15));
box2.addBook(new Book("book 55", 5, "ahmed", "ezzat", 15, 15, 15));
box2.displayInfo();

console.log("------------------\nafter add 1 more books: \n------------------");
box2.addBook(new Book("book 66", 5, "ahmed", "ezzat", 15, 15, 15));
box2.displayInfo();

console.log("------------------------\nget the number of books: \n------------------------");
console.log(box2.getNumOfBooks());


console.log("------------------------\nBox 1 + Box 2\n------------------------");
console.log(box1 + box2);

