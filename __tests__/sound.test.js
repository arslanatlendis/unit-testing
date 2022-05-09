const { dog, cat } = require("../src/animals");

test("dog should return woof!", () => {
  expect(dog()).toBe("woof!");
});

test("cat should return meow!", () => {
  expect(cat()).toBe("meow!");
});
