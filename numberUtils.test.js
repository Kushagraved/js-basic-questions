const { divideNumbers } = require('./numberUtils');

describe('Number Utilities', () => {

  describe('Divide Numbers', () => {
    it('should return error when second number is 0', () => {
      expect(() => divideNumbers(2, 0)).toThrow(Error);
    });
    it('should return error when inputs are a not a number', () => {
      expect(() => divideNumbers(2, 'k')).toThrow(Error);
    });
    it('should return 1 when 2 is divided by 2', () => {
      expect(divideNumbers(2, 2)).toEqual(1);
    });

  });
});