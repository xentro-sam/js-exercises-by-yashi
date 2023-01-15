// using normal function
function joinExceptFirst(input1, input2) {
    let result = input1.substring(1) + input2.substring(1)
    return result
}

// using arrow function
const joinExceptFirstArrow = (input1, input2) => {
    let result = input1.substring(1) + input2.substring(1)
    return result
}