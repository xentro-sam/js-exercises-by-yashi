// using normal function
function replaceCharacterWithNext(input) {
    let size = input.length
    let result = ''

    for(let i = 0; i < size; i++) {
        let code = input.charCodeAt(i) + 1;
        if(code === 91) {
            code = 65
        }
        else if(code === 123) {
            code = 97
        }
        result = result + String.fromCharCode(code)
    }

    return result
}

// using arrow function
const replaceCharacterWithNextArrow = (input) => {
    let size = input.length
    let result = ''

    for(let i = 0; i < size; i++) {
        let code = input.charCodeAt(i) + 1;
        if(code === 91) {
            code = 65
        }
        else if(code === 123) {
            code = 97
        }
        result = result + String.fromCharCode(code)
    }

    return result
}

module.exports = {replaceCharacterWithNext, replaceCharacterWithNextArrow}