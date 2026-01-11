var table = document.createElement("table");
var screen = document.querySelector(".screen");
var allButtons = document.querySelectorAll("table td");

allButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    var itemValue = item.getAttribute("value");
    if (itemValue === "=") {
      screen.textContent = eval(screen.textContent);
    } else if (itemValue === "clear") {
      screen.textContent = "";
    } else {
      screen.textContent += itemValue;
    }
  });
});
