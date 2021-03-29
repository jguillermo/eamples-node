const replace = require('./replace');

test('convert "zZ" to "aA"', () => {
  expect(replace("zZ")).toBe("aA");
});

test('convert "123 abcd*3" to "123 bcde*3"', () => {
  expect(replace("123 abcd*3")).toBe("123 bcde*3");
});

test('convert "**Casa 52" to "**Dbtb 52”"', () => {
  expect(replace("**Casa 52")).toBe("**Dbtb 52");
});