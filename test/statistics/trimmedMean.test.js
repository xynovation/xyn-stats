import trimmedMean from '../../src/statistics/trimmedMean';

const TOLERANCE = 0.00000001;

describe('trimmedMean', () => {
  it('works for single value', () => {
    const values = [1];
    const theMean = trimmedMean(values, 0.4999999999999);
    expect(theMean).toBeCloseTo(1, TOLERANCE);
  });

  it('works for trim 0%', () => {
    const values = [1, 2, 3, 45, 55, 56, 57, 58, 403, 900];
    const theMean = trimmedMean(values, 0);
    expect(theMean).toBeCloseTo(158, TOLERANCE);
  });

  it('works for trim < 50%', () => {
    const values = [1, 2, 3, 45, 55, 56, 57, 58, 403, 900];
    const theMean = trimmedMean(values, 0.25);
    expect(theMean).toBeCloseTo(45.66667, TOLERANCE);
  });

  it('works for .4999999999999 trim', () => {
    let values = [1, 2, 3, 45, 55, 56, 57, 58, 403, 900, 1000];
    let theMean = trimmedMean(values, 0.4999999999999);
    expect(theMean).toBeCloseTo(56, TOLERANCE);

    values = [1, 2, 3, 45, 55, 56, 57, 58, 403, 900, 1000, 2000];
    theMean = trimmedMean(values, 0.4999999999999);
    expect(theMean).toBeCloseTo(56.5, TOLERANCE);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      trimmedMean(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      trimmedMean(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      trimmedMean([]);
    }).toThrow('x must have at least 1 observation');
  });

  it('throws error for invalid trimPercent', () => {
    expect(() => {
      trimmedMean([0], -0.1);
    }).toThrow('trimPercent must be >=0 and < .5');

    expect(() => {
      trimmedMean([0], 0.5);
    }).toThrow('trimPercent must be >=0 and < .5');

    expect(() => {
      trimmedMean([0], 0.6);
    }).toThrow('trimPercent must be >=0 and < .5');
  });
});
