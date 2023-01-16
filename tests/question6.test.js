const {hasScript, hasScriptArrow} = require('../solutions/question6')

test('"JavaScript" should return "true"', () => {
    expect(hasScript("JavaScript")).toBe(true)
})

test('"Java" should return "false"', () => {
    expect(hasScript("Java")).toBe(false)
})


test('"JavaScript" should return "true"', () => {
    expect(hasScriptArrow("JavaScript")).toBe(true)
})

test('"Java" should return "false"', () => {
    expect(hasScriptArrow("Java")).toBe(false)
})