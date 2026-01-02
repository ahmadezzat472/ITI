/* =====================================================
   JAVASCRIPT FUNDAMENTALS – DETAILED & EXPLAINED
   =====================================================

   🧠 Key ideas to remember while reading this file:
   - JavaScript is dynamically typed
   - Types are determined at runtime
   - JS performs implicit type conversion (coercion)
   - Almost everything is an object
*/


/* =====================================================
   1️⃣ VARIABLES & PRIMITIVE DATA TYPES
   ===================================================== */

// String → sequence of characters
var myString = "ahmed";
console.log(myString);           
console.log(typeof myString);    // "string"

// Number → JS has only ONE number type (no int / float)
var myNumber = 10;
console.log(myNumber);
console.log(typeof myNumber);    // "number"

// Boolean → logical true / false
var isLoggedIn = true;
console.log(isLoggedIn);
console.log(typeof isLoggedIn);  // "boolean"

// Undefined → variable declared but NOT assigned
var notAssigned;
console.log(notAssigned);        // undefined
console.log(typeof notAssigned); // "undefined"

// Null → intentional absence of value
var emptyValue = null;
console.log(emptyValue);         // null
console.log(typeof emptyValue);  // "object" ❌ (historical JS bug)

/*
  ⚠️ Important difference:
  - undefined → JS does not know the value yet
  - null      → developer explicitly says "no value"
*/


/* =====================================================
   2️⃣ NON-PRIMITIVE (REFERENCE) TYPES
   ===================================================== */

// Array → ordered list of values
var numbers = [1, 2, 3];
console.log(numbers);
console.log(typeof numbers);     // "object"

/*
  Why array is "object"?
  Because arrays are special objects with:
  - numeric keys
  - length property
*/

// Object → key-value pairs
var user = {
  name: "Ahmed",
  age: 25
};
console.log(user);
console.log(typeof user);        // "object"

/*
  🔑 Difference between primitive & reference:
  - Primitive → stored by value
  - Object    → stored by reference
*/


/* =====================================================
   3️⃣ ARITHMETIC OPERATORS
   ===================================================== */

var a = 10;
var b = 20;

console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(a / b); // 0.5

/*
  ✔ All arithmetic operations result in NUMBER
  ✔ Even division does not return float type (JS has no float)
*/


/* =====================================================
   4️⃣ STRING CONCATENATION & TYPE COERCION
   ===================================================== */

var firstName = "Ahmed";
var age = 25;

// String + String → String
console.log(firstName + " Ali");

// Number + String → String
console.log(age + firstName);     // "25Ahmed"
console.log(typeof (age + firstName)); // "string"

/*
  🧠 Rule:
  + operator prefers STRING concatenation
*/

// Number - String → Number OR NaN
console.log(age - "5");           // 20
console.log(age - "Ahmed");       // NaN

/*
  -, *, / always try to convert operands to numbers
*/


/* =====================================================
   5️⃣ NaN (Not a Number)
   ===================================================== */

console.log(10 - "Ahmed"); // NaN
console.log(typeof NaN);   // "number" ❗

/*
  ⚠️ NaN is still a NUMBER type
*/

console.log(isNaN("Ahmed"));   // true
console.log(isNaN("10"));      // false
console.log(isNaN(true));      // false
console.log(isNaN(undefined)); // true

/*
  isNaN() first converts value to number, then checks
*/


/* =====================================================
   6️⃣ isFinite()
   ===================================================== */

console.log(isFinite(100));       // true
console.log(isFinite("100"));     // true
console.log(isFinite("Ahmed"));   // false

/*
  Checks if value can be converted to a real finite number
*/


/* =====================================================
   7️⃣ FUNCTIONS – SPECIAL OBJECTS
   ===================================================== */

var greet = function () {
  console.log("Hello");
};

console.log(typeof greet); // "function"

/*
  Functions are:
  ✔ Objects
  ✔ Callable
  ✔ Can have properties
*/

greet.customProperty = "test";
console.log(greet.customProperty);

/*
  typeof returns "function" as a special case
*/


/* =====================================================
   8️⃣ COMPARISON OPERATORS
   ===================================================== */

var x = 10;
var y = "10";

// Loose comparison (performs type coercion)
console.log(x == y);  // true

// Strict comparison (NO type coercion)
console.log(x === y); // false

/*
  ✔ ALWAYS prefer === and !==
*/


/* =====================================================
   9️⃣ LOGICAL OPERATORS
   ===================================================== */

console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

/*
  Logical operators return values, not always booleans
*/

console.log(3 < 2 < 1); // true ❌

/*
  Explanation:
  3 < 2 → false
  false < 1 → 0 < 1 → true
*/


/* =====================================================
   🔟 CONDITIONS
   ===================================================== */

var value = "Ahmed";

if (typeof value === "string") {
  console.log("It's a string");
} else {
  console.log("Not a string");
}


/* =====================================================
   1️⃣1️⃣ THROWING ERRORS
   ===================================================== */

if (typeof value !== "string") {
  throw new Error("Invalid type!");
}

/*
  throw stops execution immediately
*/


/* =====================================================
   1️⃣2️⃣ SWITCH STATEMENT
   ===================================================== */

var role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("Guest");
}


/* =====================================================
   1️⃣3️⃣ LOOPS
   ===================================================== */

// for loop
for (var i = 0; i < 3; i++) {
  console.log(i);
}

/*
  ⚠️ var is function-scoped, leaks outside loop
*/

// while loop
var count = 0;
while (count < 3) {
  console.log("while loop");
  count++;
}

// do...while → runs at least once
do {
  console.log("do while");
} while (false);


/* =====================================================
   1️⃣4️⃣ GLOBAL this
   ===================================================== */

console.log(this);

/*
  Browser  → window
  Strict   → undefined
*/


/* =====================================================
   1️⃣5️⃣ BROWSER INTERACTION
   ===================================================== */

// alert("Stop execution");

// var answer = confirm("Continue?");
// console.log(answer);

// var input = prompt("Enter a number");
// console.log(input);
// console.log(typeof input); // always string


/* =====================================================
   1️⃣6️⃣ INPUT VALIDATION
   ===================================================== */

var result;
do {
  result = prompt("Enter a valid number");
} while (isNaN(result) || result === "");


/* =====================================================
   1️⃣7️⃣ document.write (NOT RECOMMENDED)
   ===================================================== */

/*
  ❌ Overwrites the document
  ❌ Blocks rendering
  ❌ Not used in modern apps
*/

document.write("<h1>Hello</h1>");
