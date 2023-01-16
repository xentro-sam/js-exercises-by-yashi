// using normal function
function getLargestEvenNumber(numbers) {
  let largestEven = Number.MIN_VALUE;

  numbers.forEach(function(element) {
    if(element % 2 === 0 && element > largestEven) {
      largestEven = element;
    }
  });

  if(largestEven === Number.MIN_VALUE) {
    largestEven = -1;
  }

  return largestEven;
}

// using arrow function
const getLargestEvenArrow = (numbers) => {
  let largestEven = Number.MIN_VALUE;

  numbers.forEach(function(element) {
    if(element % 2 === 0 && element > largestEven) {
      largestEven = element;
    }
  });

  if(largestEven === Number.MIN_VALUE) {
    largestEven = -1;
  }

  return largestEven;
};

module.exports = {getLargestEvenNumber, getLargestEvenArrow};