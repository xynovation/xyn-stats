import maximum from '../../src/statistics/maximum';

describe('maximum', () => {
  it('works for positive values', () => {
    const values = [1, 2, 3];
    const themaximum = maximum(values);
    expect(themaximum).toBe(3);
  });

  it('works for negative values', () => {
    expect(maximum([-1, -2, -3])).toBe(-1);
  });

  it('works for positive and negative values', () => {
    expect(maximum([-1, -2, -3, 3, 2, 1])).toBe(3);
  });

  it('works for a single value', () => {
    expect(maximum([3])).toBe(3);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      maximum(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      maximum(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      maximum([]);
    }).toThrow('x must have at least 1 observation');
  });
});
