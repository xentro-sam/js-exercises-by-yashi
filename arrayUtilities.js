const tripleElementsAndFilterEven = (numbers) => {
  if(!Array.isArray(numbers)) {
    throw new TypeError();
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