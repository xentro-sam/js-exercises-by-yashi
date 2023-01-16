const {countVowels, countVowelsArrow} = require('../solutions/question8')

test('"codeacademy" should return "5"', () => {
    expect(countVowels("codeacademy")).toBe(5)
})

test('"shivam" should return "2"', () => {
    expect(countVowels("shivam")).toBe(2)
})


test('"codeacademy" should return "5"', () => {
    expect(countVowelsArrow("codeacademy")).toBe(5)
})

test('"shivam" should return "2"', () => {
    expect(countVowelsArrow("shivam")).toBe(2)
})