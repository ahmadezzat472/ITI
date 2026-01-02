var container = document.querySelector(".container");
var clickDiv = document.querySelector(".click-div");

var colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "cyan",
  "magenta",
];

clickDiv.addEventListener("click", function () {
  var newDiv = clickDiv.cloneNode(true);
  newDiv.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  container.appendChild(newDiv);
  clickDiv.style.backgroundColor = "blue";
});
