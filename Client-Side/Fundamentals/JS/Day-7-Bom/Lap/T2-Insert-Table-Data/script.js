var form = document.querySelector("form");
var alertBox = document.querySelector(".alert");
var nameInput = document.querySelector('input[name="name"]');
var nameError = document.querySelector("#error-name");
var emailInput = document.querySelector('input[name="email"]');
var emailError = document.querySelector("#error-email");
var ageInput = document.querySelector('input[name="age"]');
var ageError = document.querySelector("#error-age");

nameInput.addEventListener("input", function () {
  nameError.innerHTML = "";
});

emailInput.addEventListener("input", function () {
  emailError.innerHTML = "";
});

ageInput.addEventListener("input", function () {
  ageError.innerHTML = "";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  nameError.innerHTML = "";
  emailError.innerHTML = "";
  ageError.innerHTML = "";
  alertBox.innerHTML = "";
  alertBox.style.display = "none";

  if (nameInput.value === "") {
    nameError.innerHTML = "Name is required.";
    return;
  }

  if (emailInput.value === "") {
    emailError.innerHTML = "Email is required.";
    return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.innerHTML = "Please enter a valid email address.";
    return;
  }

  if (ageInput.value === "") {
    ageError.innerHTML = "Age is required.";
    return;
  }

  var age = parseInt(ageInput.value);
  if (isNaN(age) || age < 1 || age > 100) {
    ageError.innerHTML = "Please enter a valid age (1-100).";
    return;
  }

  // Form is valid - add data to table and show success message
  createTableRow(nameInput.value, emailInput.value, ageInput.value);
  alertBox.innerHTML = "Form submitted successfully!";
  alertBox.style.display = "block";

  // Reset form
  form.reset();
});

function isFormValid() {
  return (
    nameError.innerHTML === "" &&
    emailError.innerHTML === "" &&
    ageError.innerHTML === ""
  );
}

// ------------------ table creation ---------------
var table = document.createElement("table");
var tbody = document.createElement("tbody");
var thead = document.createElement("thead");

var headerRow = document.createElement("tr");
var nameHeader = document.createElement("th");
var emailHeader = document.createElement("th");
var ageHeader = document.createElement("th");
nameHeader.innerHTML = "Name";
emailHeader.innerHTML = "Email";
ageHeader.innerHTML = "Age";
headerRow.appendChild(nameHeader);
headerRow.appendChild(emailHeader);
headerRow.appendChild(ageHeader);
table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(headerRow);
document.body.appendChild(table);

// ---------------------- add data to table ---------------
function createTableRow(name, email, age) {
  var row = document.createElement("tr");
  var nameCell = document.createElement("td");
  var emailCell = document.createElement("td");
  var ageCell = document.createElement("td");
  nameCell.innerHTML = name;
  emailCell.innerHTML = email;
  ageCell.innerHTML = age;

  row.appendChild(nameCell);
  row.appendChild(emailCell);
  row.appendChild(ageCell);
  console.log(row);
  tbody.appendChild(row);
}

// alertBox.innerHTML = "Form submitted successfully!";
// alertBox.style.display = "block";
