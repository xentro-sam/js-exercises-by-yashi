const {checkSameDigits, checkSameDigitsArrow} = require('./question2')

test('22 should return "true"', () => {
    expect(checkSameDigits(22)).toBe(true)
})

test('23 should return "false"', () => {
    expect(checkSameDigits(23)).toBe(false)
})

test('1 should return "true"', () => {
    expect(checkSameDigits(1)).toBe(true)
})

test('332 should return "false"', () => {
    expect(checkSameDigits(332)).toBe(false)
})


test('22 should return "true"', () => {
    expect(checkSameDigitsArrow(22)).toBe(true)
})

test('23 should return "false"', () => {
    expect(checkSameDigitsArrow(23)).toBe(false)
})

test('1 should return "true"', () => {
    expect(checkSameDigitsArrow(1)).toBe(true)
})

test('332 should return "false"', () => {
    expect(checkSameDigitsArrow(332)).toBe(false)
})