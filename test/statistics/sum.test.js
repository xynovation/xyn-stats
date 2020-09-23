import sum from '../../src/statistics/sum';

describe('sum', () => {
  it('works for a single values', () => {
    const values = [1];
    const theSum = sum(values);
    expect(theSum).toBe(1);
  });

  it('works for simple values', () => {
    const values = [1, 2, 3];
    const theSum = sum(values);
    expect(theSum).toBe(6);
  });

  it('works for extreme values', () => {
    let theSum = 0;
    let values = null;

    values = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1];
    theSum = sum(values);
    expect(theSum).toBe(1.0);

    values = [1, 1e100, 1, -1e100];
    theSum = sum(values);
    expect(theSum).toBe(2.0);
  });

  it('throws error for beginIndex < 0', () => {
    expect(() => {
      sum([1], -1);
    }).toThrow('beginIndex must be >= 0 and <= (x length - 1)');
  });

  it('throws error for beginIndex > endIndex', () => {
    expect(() => {
      sum([1], 5);
    }).toThrow('beginIndex must be >= 0 and <= (x length - 1)');
});

  it('throws error for invalid array', () => {
    expect(() => {
      sum(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      sum(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      sum([]);
    }).toThrow('x must have at least 1 observation');
  });
});
