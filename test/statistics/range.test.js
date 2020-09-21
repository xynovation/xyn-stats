import range from '../../src/statistics/range';

describe('range', () => {
  it('works for positive values', () => {
    const values = [1, 2, 3];
    const therange = range(values);
    expect(therange).toBe(2);
  });

  it('works for negative values', () => {
    expect(range([-1, -2, -3])).toBe(2);
  });

  it('works for positive and negative values', () => {
    expect(range([-1, -2, -3, 3, 2, 1])).toBe(6);
  });

  it('works for a single value', () => {
    expect(range([3])).toBe(0);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      range(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      range(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      range([]);
    }).toThrow('x must have at least 1 observation');
  });
});
