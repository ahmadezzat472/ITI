var image = document.getElementById("header");
var list = document.getElementById("navigation");
image.style.textAlign = "end";
list.style.listStylePosition = "inside";
var imageclone = image.cloneNode(true);
document.getElementById("footer").appendChild(imageclone);
imageclone.style.textAlign = "start";
