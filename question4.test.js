const {getLongestString, getLongestStringArrow} = require('./question4')

test('["we", "love", "code", "academy"] should return "academy"', () => {
    expect(getLongestString(["we", "love", "code", "academy"])).toBe("academy")
})

test('["onion", "chili", "tomato", "okra"] should return "tomato"', () => {
    expect(getLongestString(["onion", "chili", "tomato", "okra"])).toBe("tomato")
})


test('["we", "love", "code", "academy"] should return "academy"', () => {
    expect(getLongestStringArrow(["we", "love", "code", "academy"])).toBe("academy")
})

test('["onion", "chili", "tomato", "okra"] should return "tomato"', () => {
    expect(getLongestStringArrow(["onion", "chili", "tomato", "okra"])).toBe("tomato")
})