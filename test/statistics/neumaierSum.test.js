import neumaierSum from '../../src/statistics/neumaierSum';

describe('neumaierSum', () => {
  it('works for a single values', () => {
    const values = [1];
    const theSum = neumaierSum(values);
    expect(theSum).toBe(1);
  });

  it('works for simple values', () => {
    const values = [1, 2, 3];
    const theSum = neumaierSum(values);
    expect(theSum).toBe(6);
  });

  it('works for extreme values', () => {
    let theSum = 0;
    let values = null;

    values = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1];
    theSum = neumaierSum(values);
    expect(theSum).toBe(1.0);

    values = [1, 1e100, 1, -1e100];
    theSum = neumaierSum(values);
    expect(theSum).toBe(2.0);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      neumaierSum(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      neumaierSum(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      neumaierSum([]);
    }).toThrow('x must have at least 1 observation');
  });
});
