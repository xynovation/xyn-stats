import median from '../../src/statistics/median';

const TOLERANCE = 0.00000001;

describe('median', () => {
  it('should return exact value for 1 obs', () => {
    const values = [1];
    expect(median(values)).toBeCloseTo(1, TOLERANCE);
  });

  it('should return exact value for an odd number of obs', () => {
    const values = [1, 2, 3, 4, 5, 6, -2, -1, 0];
    expect(median(values)).toBeCloseTo(2, TOLERANCE);
  });

  it('should return interpolated value for an even number of obs', () => {
    const values = [1, 2, 3, 4, 5, -2, -1, 0];
    expect(median(values)).toBeCloseTo(1.5, TOLERANCE);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      median(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      median(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      median([]);
    }).toThrow('x must have at least 1 observation');
  });
});
