var img = document.querySelector("img");
var btns = document.querySelectorAll(".button");
var imgBtn = document.getElementsByClassName("img-btn");

var imgSrcs = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg"];
var currentIndex = 0;

var interval = window.setInterval(function () {
  img.src = imgSrcs[currentIndex];
  currentIndex = (currentIndex + 1) % imgSrcs.length;
}, 1000);

btns[0].addEventListener("click", function () {
  if (imgBtn[0].src.includes("play.png")) {
    window.clearInterval(interval);
    imgBtn[0].src = "assets/pause.png";
  } else {
    interval = window.setInterval(function () {
      img.src = imgSrcs[currentIndex];
      currentIndex = (currentIndex + 1) % imgSrcs.length;
    }, 1000);
    imgBtn[0].src = "assets/play.png";
  }
});

btns[1].addEventListener("click", function () {
  window.clearInterval(interval);
  currentIndex = (currentIndex - 1 + imgSrcs.length) % imgSrcs.length;
  img.src = imgSrcs[currentIndex];
  imgBtn[0].src = "assets/pause.png";
});

btns[2].addEventListener("click", function () {
  window.clearInterval(interval);
  currentIndex = (currentIndex + 1 + imgSrcs.length) % imgSrcs.length;
  img.src = imgSrcs[currentIndex];
  imgBtn[0].src = "assets/pause.png";
});
