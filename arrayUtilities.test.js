const { tripleElementsAndFilterEven } = require('./arrayUtilities');

describe('Array Utilities', () => {
  describe('Double Array Elements', () => {
    it('should return [6] when passed [1, 2, 3]', () => {
      expect(tripleElementsAndFilterEven([1, 2, 3])).toEqual([6]);
    });
    it('throws an error if given a non-array input', () => {
      expect(() => tripleElementsAndFilterEven('shivam')).toThrow(TypeError);
    });
  });
});