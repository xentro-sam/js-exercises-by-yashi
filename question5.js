// using normal function
function isLeapYear(year) {
    let result = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? true : false
    return result
}

// using arrow function
const isLeapYearArrow = (year) => {
    let result = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? true : false
    return result
}

module.exports = {isLeapYear, isLeapYearArrow}