import isEmpty from '../../src/utils/isEmpty';

describe('isEmpty', () => {
  it('is true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('is true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('is true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('is false for array with value', () => {
    expect(isEmpty([0])).toBe(false);
  });
});
