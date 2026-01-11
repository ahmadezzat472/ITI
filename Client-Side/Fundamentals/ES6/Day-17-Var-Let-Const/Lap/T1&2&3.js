//** 1 --------------------------
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a);
console.log(b);

//** 2 -------------------
function getMinMax(...numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}
const result = getMinMax(10, 5, 20, 3, 50, 1);

console.log("Min value:", result.min);
console.log("Max value:", result.max);

//** 3 -------------------
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

//** 3.1 -------------------
function allElementsAreStrings(arr) {
  return arr.every((item) => typeof item === "string");
}

console.log(allElementsAreStrings(fruits));

//** 3.2 -------------------
function someStartsWithA(arr) {
  return arr.some((item) => item.startsWith("a"));
}

console.log(someStartsWithA(fruits));

//** 3.3 -------------------
function filterBOrS(arr) {
  return arr.filter((item) => item.startsWith("b") || item.startsWith("s"));
}

const filteredFruits = filterBOrS(fruits);
console.log(filteredFruits);

//** 3.4 -------------------
function likeFruits(arr) {
  return arr.map((item) => `I like ${item}`);
}

const likedFruits = likeFruits(filteredFruits);
console.log(likedFruits);

//** 3.5 -------------------
likedFruits.forEach((item) => {
  console.log(item);
});
