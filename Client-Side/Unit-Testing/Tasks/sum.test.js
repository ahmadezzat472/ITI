const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});


test("adds 1 + 2 to equal 3", () => {
  expect(sum(0.2, 0.1)).toBeCloseTo(0.3);
});
