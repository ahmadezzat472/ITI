// 1 -------------------
var input = prompt("Please enter a string:");
var count = input.split("e");
var numberOfE = count.length - 1;
console.log(numberOfE);

// 2 -------------------
var inputRadius = prompt("Please enter the radius of a circle:");
var radius = parseFloat(inputRadius);
var area = Math.PI * Math.pow(radius, 2);
console.log("The area of the circle is: " + area);

// 3 -------------------
var inputValue = prompt("Please enter a number to calculate its square root:");
var num = parseFloat(inputValue);
if (!isNaN(num)) {
  if (num < 0) {
    alert("Cannot calculate square root of a negative number.");
  } else {
    var sqrt = Math.sqrt(num);
    alert("The square root of " + num + " is " + sqrt);
  }
} else {
  alert("Invalid number entered.");
}

// 4 -------------------
var array = [10, 20, 30];
var sum = 0;
var multiply = 1;
var divide = 1;

for (var i = 0; i < array.length; i++) {
  sum += array[i];
  multiply *= array[i];
  divide /= array[i];
}

console.log("Sum: " + sum);
console.log("Multiplication: " + multiply);
console.log("Division: " + divide);

var array = [10, 20, 30];
array.sort(function (a, b) {
  return a - b;
});
array.forEach(function (value) {
  console.log(value);
});
