import interquartileRange from '../../src/statistics/interquartileRange';

const TOLERANCE = 0.00000001;

describe('interquartileRange', () => {
  it('should return 0 for 1 observation', () => {
    expect(interquartileRange([1])).toBeCloseTo(0, TOLERANCE);
    expect(interquartileRange([0])).toBeCloseTo(0, TOLERANCE);
    expect(interquartileRange([-1])).toBeCloseTo(0, TOLERANCE);
  });

  it('should work if 25th and 75th percentile is interpolated', () => {
    const values = [1, 2, 3, 4, 5, 6, -2, -1, 0];
    expect(interquartileRange(values)).toBeCloseTo(4, TOLERANCE);
  });

  it('should work if 25th and 75th percentile falls on an observation', () => {
    const values = [1, 2, 3, 4, 5, -2, -1, 0, 10, -10, 11, 12];
    expect(interquartileRange(values)).toBeCloseTo(6.5, TOLERANCE);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      interquartileRange(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      interquartileRange(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      interquartileRange([]);
    }).toThrow('x must have at least 1 observation');
  });
});
