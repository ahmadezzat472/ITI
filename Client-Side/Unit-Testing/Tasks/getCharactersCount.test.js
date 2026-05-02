const getCharactersCount = require("./getCharactersCount");

test("counts characters in a string", () => {
  expect(getCharactersCount("hello")).toBe(5);
});
