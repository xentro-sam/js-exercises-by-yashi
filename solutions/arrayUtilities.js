const tripleElementsAndFilterEven = (numbers) => {
  if(!Array.isArray(numbers)) {
    throw new TypeError("The input is not an array");
  }

  numbers.forEach((item) => {
    if(typeof(item) !== 'number') {
      throw new Error("Not all the elements in the array are numbers");
    }
  });

  if(numbers.length === 0) {
    throw new Error("The given array is empty");
  }

  let result = numbers.map(item => item * 3);
  result = result.filter((item) => {
    if(item % 2 === 0) {
      return item;
    }
  });

  return result;
};

module.exports = { tripleElementsAndFilterEven };