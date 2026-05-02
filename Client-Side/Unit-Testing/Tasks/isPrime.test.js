const isPrime = require("./isPrime");

test("returns true for prime numbers", () => {
  expect(isPrime(7)).toBe(true);
});

test("returns false for non-prime numbers", () => {
  expect(isPrime(8)).toBe(false);
});

test("returns false for numbers less than or equal to 1", () => {
  expect(isPrime(1)).toBe(false);
});
