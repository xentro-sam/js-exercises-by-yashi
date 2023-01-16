const {getLongestString, getLongestStringArrow} = require('../solutions/question4')

test('["we", "love", "code", "academy"] should return "academy"', () => {
    expect(getLongestString(["we", "love", "code", "academy"])).toBe("academy")
})

test('["onion", "chili", "tomato", "okra"] should return "tomato"', () => {
    expect(getLongestString(["onion", "chili", "tomato", "okra"])).toBe("tomato")
})

test('["onion", "tomato", "potato", "okra"] should return "tomato"', () => {
    expect(getLongestString(["onion", "tomato", "potato", "okra"])).toBe("potato")
})


test('["we", "love", "code", "academy"] should return "academy"', () => {
    expect(getLongestStringArrow(["we", "love", "code", "academy"])).toBe("academy")
})

test('["onion", "chili", "tomato", "okra"] should return "tomato"', () => {
    expect(getLongestStringArrow(["onion", "chili", "tomato", "okra"])).toBe("tomato")
})

test('["onion", "tomato", "potato", "okra"] should return "tomato"', () => {
    expect(getLongestStringArrow(["onion", "tomato", "potato", "okra"])).toBe("potato")
})