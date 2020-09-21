import standardDeviation from '../../src/statistics/standardDeviation';

const TOLERANCE = 0.00000001;

describe('standardDeviation', () => {
  it('works for positive values', () => {
    const values = [600, 470, 170, 430, 300];

    const theStdDev = standardDeviation(values);
    expect(theStdDev).toBeCloseTo(164.7118696390761026, TOLERANCE);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      standardDeviation(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      standardDeviation(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      standardDeviation([]);
    }).toThrow('x must have at least 1 observation');
  });
});
