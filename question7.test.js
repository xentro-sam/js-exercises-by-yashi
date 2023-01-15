const {joinExceptFirst, joinExceptFirstArrow} = require('./question7')

test('["code", "academy"] should return "odecademy"', () => {
    expect(joinExceptFirst(["code", "academy"])).toBe("odecademy")
})

test('["shivam", "agarwal"] should return "hivamgarwal"', () => {
    expect(joinExceptFirst(["shivam", "agarwal"])).toBe("hivamgarwal")
})


test('["code", "academy"] should return "odecademy"', () => {
    expect(joinExceptFirstArrow(["code", "academy"])).toBe("odecademy")
})

test('["shivam", "agarwal"] should return "hivamgarwal"', () => {
    expect(joinExceptFirstArrow(["shivam", "agarwal"])).toBe("hivamgarwal")
})