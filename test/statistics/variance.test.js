import variance from '../../src/statistics/variance';

const TOLERANCE = 0.00000001;

describe('variance', () => {
  it('works for positive values', () => {
    const values = [600, 470, 170, 430, 300];

    const theVariance = variance(values);
    expect(theVariance).toBeCloseTo(27130, TOLERANCE);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      variance(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      variance(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      variance([]);
    }).toThrow('x must have at least 1 observation');
  });
});
