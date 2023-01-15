const {getLargestEvenNumber, getLargestEvenArrow} = require('./question1')

test('[1, 2, 3, 4, 5] should give "4"', () => {
    expect(getLargestEvenNumber([1, 2, 3, 4, 5])).toBe(4)
})

test('[1, 3, 5, 7] should give "-1"', () => {
    expect(getLargestEvenNumber([1, 3, 5, 7])).toBe(-1)
})

test('[1, 2, 3, 4, 5] should give "4"', () => {
    expect(getLargestEvenArrow([1, 2, 3, 4, 5])).toBe(4)
})

test('[1, 3, 5, 7] should give "-1"', () => {
    expect(getLargestEvenArrow([1, 3, 5, 7])).toBe(-1)
})