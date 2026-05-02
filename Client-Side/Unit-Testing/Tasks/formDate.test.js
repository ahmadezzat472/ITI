const getDate = require("./formDate");

test("creates a Date object from a date string", () => {
  expect(getDate("2023-01-01")).toMatchObject(new Date("2023-01-01"));
});
