const reverseString = require("./reverseString");

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("returns empty string when input is empty", () => {
  expect(reverseString("")).toBe("");
});
