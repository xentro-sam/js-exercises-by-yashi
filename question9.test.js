const {replaceCharacterWithNext, replaceCharacterWithNextArrow} = require('./question9')

test('"codeacademy" should return "dpefbdbefnz"', () => {
    expect(replaceCharacterWithNext("codeacademy")).toBe("dpefbdbefnz")
})

test('"lazyinterns" should return "mbazjoufsot"', () => {
    expect(replaceCharacterWithNext("lazyinterns")).toBe("mbazjoufsot")
})


test('"codeacademy" should return "dpefbdbefnz"', () => {
    expect(replaceCharacterWithNextArrow("codeacademy")).toBe("dpefbdbefnz")
})

test('"lazyinterns" should return "mbazjoufsot"', () => {
    expect(replaceCharacterWithNextArrow("lazyinterns")).toBe("mbazjoufsot")
})