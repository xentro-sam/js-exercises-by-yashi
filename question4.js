// using normal function
function getLongestString(input) {
    let longestString = ''
    let size = input.length

    for(let i = 0; i < size; i++) {
        if(input[i].length > longestString.length) {
            longestString = input[i]
        }
        else if(input[i].length === longestString.length) {
            longestString = input[i] < longestString ? input[i] : longestString;
        }
    }

    return longestString
}

// using arrow function
const getLongestStringArrow = (input) => {
    let longestString = ''
    let size = input.length

    for(let i = 0; i < size; i++) {
        if(input[i].length > longestString.length) {
            longestString = input[i]
        }
        else if(input[i].length === longestString.length) {
            longestString = input[i] < longestString ? input[i] : longestString;
        }
    }

    return longestString
}

module.exports = {getLongestString, getLongestStringArrow}