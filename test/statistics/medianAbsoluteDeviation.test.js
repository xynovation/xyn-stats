import medianAbsoluteDeviation from '../../src/statistics/medianAbsoluteDeviation';

const TOLERANCE = 0.00000001;

describe('medianAbsoluteDeviation', () => {
  it('works for a single value', () => {
    let values = [3];
    expect(medianAbsoluteDeviation(values)).toBeCloseTo(0, TOLERANCE);

    values = [1, 2, 3, 45, 55, 56, 57, 58, 403, 900];
    expect(medianAbsoluteDeviation(values)).toBeCloseTo(46.7019, TOLERANCE);
  });

  it('works for default scale factor', () => {
    let values = [1, 1, 2, 2, 4, 6, 9];
    expect(medianAbsoluteDeviation(values)).toBeCloseTo(1.4826, TOLERANCE);

    values = [1, 2, 3, 45, 55, 56, 57, 58, 403, 900];
    expect(medianAbsoluteDeviation(values)).toBeCloseTo(46.7019, TOLERANCE);
  });

  it('works for scale factor of 1', () => {
    let values = [1, 1, 2, 2, 4, 6, 9];
    expect(medianAbsoluteDeviation(values, 1)).toBe(1);

    values = [1, 2, 3, 45, 55, 56, 57, 58, 403, 900];
    expect(medianAbsoluteDeviation(values, 1)).toBe(31.5);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      medianAbsoluteDeviation(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      medianAbsoluteDeviation(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      medianAbsoluteDeviation([]);
    }).toThrow('x must have at least 1 observation');
  });
});
