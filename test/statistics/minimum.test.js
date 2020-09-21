import minimum from '../../src/statistics/minimum';

describe('minimum', () => {
  it('works for positive values', () => {
    const values = [1, 2, 3];
    const theminimum = minimum(values);
    expect(theminimum).toBe(1);
  });

  it('works for negative values', () => {
    expect(minimum([-1, -2, -3])).toBe(-3);
  });

  it('works for positive and negative values', () => {
    expect(minimum([-1, -2, -3, 3, 2, 1, 0])).toBe(-3);
  });

  it('works for a single value', () => {
    expect(minimum([3])).toBe(3);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      minimum(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      minimum(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      minimum([]);
    }).toThrow('x must have at least 1 observation');
  });
});
