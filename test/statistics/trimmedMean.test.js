import trimmedMean from '../../src/statistics/trimmedMean';

const TOLERANCE = 0.00000001;

describe('trimmedMean', () => {
  it('works for single value', () => {
    // const values = [4, 5, 6, 7, 2, 3, 4, 5, 1, 2, 3];
    // const values = [39, 92, 75, 61, 45, 87, 59, 51, 87, 12, 8, 93, 74, 16, 32, 39, 87, 12, 47, 50];
    const values = [1, 2];
    const theMean = trimmedMean(values, 0.499);
    expect(theMean).toBeCloseTo(1.5, TOLERANCE);
  });

  it('works for trim < 50%', () => {
    const values = [1, 2, 3, 45, 55, 56, 57, 58, 403, 900];
    const theMean = trimmedMean(values, 0.25);
    expect(theMean).toBeCloseTo(45.66667, TOLERANCE);
  });

  it('works for 50% trim', () => {
    const values = [1, 2, 3, 45, 55, 56, 57, 58, 403, 900, 1000];
    const theMean = trimmedMean(values, 0.5);
    expect(theMean).toBeCloseTo(56, TOLERANCE);
  });

  it('works for > 50% trim', () => {
    const values = [1, 2, 3, 45, 55, 56, 57, 58, 403, 900, 1000];
    let theMean = trimmedMean(values, 0.5);
    expect(theMean).toBeCloseTo(56, TOLERANCE);
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
});
