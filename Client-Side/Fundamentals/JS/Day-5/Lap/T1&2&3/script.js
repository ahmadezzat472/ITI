// 1 -------------------
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDayName(dateStr) {
  const date = new Date(dateStr);
  const dayIndex = date.getDay();
  return days[dayIndex];
}

console.log(getDayName("2025-12-14"));

// 2 -------------------
function twoParam(a, b) {
  if (arguments.length != 2) {
    throw new Error("Function requires exactly two parameters");
  } else return a + b;
}

// 3 --------------
function onlyNumbers() {
  for (let i = arguments.length - 1; i >= 0; i--) {
    if (typeof arguments[i] !== "number") {
      throw new Error("All arguments must be numbers");
    } else {
      console.log(arguments[i]);
    }
  }
}

onlyNumbers(1, 2, 3, 4, 5);
