const {isLeapYear, isLeapYearArrow} = require('../solutions/question5');

test('2000 should return "true"', () => {
  expect(isLeapYear(2000)).toBe(true);
});

test('1997 should return "false"', () => {
  expect(isLeapYear(1997)).toBe(false);
});


test('2000 should return "true"', () => {
  expect(isLeapYearArrow(2000)).toBe(true);
});

test('1997 should return "false"', () => {
  expect(isLeapYearArrow(1997)).toBe(false);
});