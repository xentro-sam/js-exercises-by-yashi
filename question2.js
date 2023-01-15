// using normal function
function checkSameDigits(num) {
    let isSame = true
    let toCheck = num % 10;

    while(num > 0 && isSame === true) {
        let digit = num % 10
        if(digit !== toCheck) {
            isSame = false
        }
        num /= 10;
        num = Math.trunc(num)
    }

    return isSame
}

// using arrow function
const checkSameDigitsArrow = (num) => {
    let isSame = true
    let toCheck = num % 10;

    while(num > 0 && isSame === true) {
        let digit = num % 10
        if(digit !== toCheck) {
            isSame = false
        }
        num /= 10;
        num = Math.trunc(num)
    }

    return isSame
}

module.exports = {checkSameDigits, checkSameDigitsArrow}