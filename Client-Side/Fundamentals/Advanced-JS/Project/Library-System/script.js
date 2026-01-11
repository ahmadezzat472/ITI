/** select elements */
var booksNumSection = document.querySelector("#books-num-section");
var fillDataSection = document.querySelector("#fill-data-section");
var tableSection = document.querySelector("#table-section");
var booksNumBtn = document.querySelector("#books-num-btn");
var fillDataBtn = document.querySelector("#fill-data-btn");

/** global variable */
var fillDataIteration;
var bookList = [];

/** get count of books */
booksNumBtn.addEventListener("click", handleBooksNum);
function handleBooksNum() {
  var bookNumber = document.querySelector('input[name="bookNumber"]').value;
  if (bookNumber) {
    if (+bookNumber > 0) {
      document.querySelector("#books-num-error").textContent = "";
      fillDataIteration = +bookNumber;
      booksNumSection.classList.add("hidden");
      fillDataSection.classList.remove("hidden");
    } else {
      document.querySelector("#books-num-error").textContent =
        "must be greater than 0";
    }
  } else {
    document.querySelector("#books-num-error").textContent = "required";
  }
}

/** get books data */
fillDataBtn.addEventListener("click", handleFillData);
function handleFillData() {
  var bookName = document.querySelector('input[name="bookName"]');
  var price = document.querySelector('input[name="price"]');
  var authorName = document.querySelector('input[name="authorName"]');
  var authorEmail = document.querySelector('input[name="authorEmail"]');

  var validateInputs =
    bookName.value && price.value && authorName.value && authorEmail.value;

  if (!validateInputs) {
    document.querySelector("#fill-data-error").textContent = "required";
    return;
  }
  if (+price.value <= 0) {
    document.querySelector("#fill-data-error").textContent =
      "must be greater than 0";
    return;
  }
  document.querySelector("#fill-data-error").textContent = "";
  bookList.push(
    new Book(
      bookName.value,
      price.value,
      new Author(authorName.value, authorEmail.value)
    )
  );
  bookName.value = "";
  price.value = "";
  authorName.value = "";
  authorEmail.value = "";
  fillDataIteration--;

  if (fillDataIteration == 0) {
    fillDataSection.classList.add("hidden");
    tableSection.classList.remove("hidden");
    document.querySelector(".main").style.maxWidth = "1100px";
    displayData();
  }
}

/** display books data in table */
function displayData() {
  var body = document.querySelector("tbody");
  body.innerHTML = "";
  bookList.forEach(function (book, idx) {
    body.innerHTML += `
      <tr data-index=${idx}>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>${book.author.name}</td>
        <td>${book.author.email}</td>
        <td>
          <button data-index="${idx}" class="action edit-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#3498db"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25Z"/>
            </svg>
          </button>
          <button data-index="${idx}" class="action delete-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#e74c3c"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18"/>
              <path d="M8 6v14h8V6"/>
              <path d="M10 10v6"/>
              <path d="M14 10v6"/>
            </svg>
          </button>
        </td>
      </tr>
    `;
  });
  attachEvents();
}

/** handle button events */
function attachEvents() {
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.textContent = "save";
      editBook(this.dataset.index);
    });
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      deleteBook(this.dataset.index);
    });
  });
}

function deleteBook(idx) {
  if (confirm("Are you sure you want to delete this book?")) {
    bookList.splice(idx, 1);
    displayData();
  }
}

function editBook(idx) {
  var tr = document.querySelector(`tr[data-index="${idx}"]`);
  tr.innerHTML = `
    <td><input type="text" value="${bookList[idx].title}" /></td>
    <td><input type="number" value="${bookList[idx].price}" /></td>
    <td><input type="text" value="${bookList[idx].author.name}" /></td>
    <td><input type="email" value="${bookList[idx].author.email}" /></td>
    <td>
      <button class="action save-btn" data-index="${idx}">
        Save
      </button>
      <button class="action cancel-btn" data-index="${idx}">
        Cancel
      </button>
    </td>
  `;
  attachEventSave();
}

function attachEventSave() {
  var saveBtn = document.querySelector(".save-btn");
  saveBtn.addEventListener("click", function () {
    var idx = +saveBtn.dataset.index;
    saveBook(idx);
  });

  var cancelBtn = document.querySelector(".cancel-btn");
  cancelBtn.addEventListener("click", function () {
    displayData();
  });
}

function saveBook(idx) {
  var tr = document.querySelector(`tr[data-index="${idx}"]`);
  var inputs = tr.querySelectorAll("input");

  bookList[idx].title = inputs[0].value;
  bookList[idx].price = inputs[1].value;
  bookList[idx].author.name = inputs[2].value;
  bookList[idx].author.email = inputs[3].value;

  displayData();
}
