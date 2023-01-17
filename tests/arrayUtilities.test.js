const { tripleElementsAndFilterEven, tripleElementsAndFilterEvenUsingReduce } = require('../solutions/arrayUtilities');

describe('Array Utilities', () => {
  describe('Double Array Elements', () => {
    it('should return [6] when passed [1, 2, 3]', () => {
      expect(tripleElementsAndFilterEven([1, 2, 3])).toEqual([6]);
    });
    it('throws an error if given a non-array input', () => {
      expect(() => tripleElementsAndFilterEven('shivam')).toThrow(TypeError);
    });
    it('throws an error if given an array containing elements of type other than a number', () => {
      expect(() => tripleElementsAndFilterEven([1, 2, 'apple', 4])).toThrow(Error);
    });
    it('throws an error if the given array is empty', () => {
      expect(() => tripleElementsAndFilterEven([])).toThrow(Error);
    });
  });
});

describe('Array Utilities', () => {
  describe('Double Array Elements', () => {
    it('should return [6] when passed [1, 2, 3]', () => {
      expect(tripleElementsAndFilterEvenUsingReduce([1, 2, 3])).toEqual([6]);
    });
    it('throws an error if given a non-array input', () => {
      expect(() => tripleElementsAndFilterEvenUsingReduce('shivam')).toThrow(TypeError);
    });
    it('throws an error if given an array containing elements of type other than a number', () => {
      expect(() => tripleElementsAndFilterEvenUsingReduce([1, 2, 'apple', 4])).toThrow(Error);
    });
    it('throws an error if the given array is empty', () => {
      expect(() => tripleElementsAndFilterEvenUsingReduce([])).toThrow(Error);
    });
  });
});