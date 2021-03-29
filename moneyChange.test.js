const moneyChange = require('./moneyChange');

test('array of "1"', () => {
  expect(moneyChange(1)).toEqual([
    [0.2, 0.2, 0.2, 0.2, 0.2],
    [0.5, 0.5],
    [1]
  ]);
});

test('array of "1.5"', () => {
  expect(moneyChange(1.5)).toEqual([
    [0.2, 0.2, 0.2, 0.2, 0.2, 0.5],
    [0.5, 0.5, 0.5],
    [0.5, 1]
  ]);
});

test('array of "0.4"', () => {
  expect(moneyChange(0.4)).toEqual([
    [0.2,0.2]
  ]);
});

test('array of "0.2"', () => {
  expect(moneyChange(0.2)).toEqual([
    [0.2]
  ]);
});