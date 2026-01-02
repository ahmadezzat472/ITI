var images = document.querySelectorAll("img");
var currentIndex = 0;

console.log(images);

var interval = setInterval(function () {
  images[currentIndex].src = "assets/marble1.jpg";
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].src = "assets/marble2.jpg";
}, 1000);
