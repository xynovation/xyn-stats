import mean from '../../src/statistics/mean';

describe('mean', () => {
  it('works for positive values', () => {
    const values = [1, 2, 3];
    const theMean = mean(values);
    expect(theMean).toBe(2);
  });

  it('works for negative values', () => {
    expect(mean([-1, -2, -3])).toBe(-2);
  });

  it('works for a single value', () => {
    expect(mean([0])).toBe(0);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      mean(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      mean(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      mean([]);
    }).toThrow('x must have at least 1 observation');
  });
});
