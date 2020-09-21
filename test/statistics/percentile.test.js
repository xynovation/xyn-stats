import percentile from '../../src/statistics/percentile';

const TOLERANCE = 0.00000001;

describe('percentile', () => {
  it('interpolates as expected', () => {
    const values = [1, 2, 3, 4, 5, 6, -2, -1, 0];

    expect(percentile(values, 0)).toBeCloseTo(-2, TOLERANCE);
    expect(percentile(values, 0.01)).toBeCloseTo(-1.92, TOLERANCE);
    expect(percentile(values, 0.02)).toBeCloseTo(-1.84, TOLERANCE);
    expect(percentile(values, 0.03)).toBeCloseTo(-1.76, TOLERANCE);
    expect(percentile(values, 0.04)).toBeCloseTo(-1.68, TOLERANCE);
    expect(percentile(values, 0.05)).toBeCloseTo(-1.6, TOLERANCE);
    expect(percentile(values, 0.06)).toBeCloseTo(-1.52, TOLERANCE);
    expect(percentile(values, 0.07)).toBeCloseTo(-1.44, TOLERANCE);
    expect(percentile(values, 0.08)).toBeCloseTo(-1.36, TOLERANCE);
    expect(percentile(values, 0.09)).toBeCloseTo(-1.28, TOLERANCE);
    expect(percentile(values, 0.1)).toBeCloseTo(-1.2, TOLERANCE);
    expect(percentile(values, 0.11)).toBeCloseTo(-1.12, TOLERANCE);
    expect(percentile(values, 0.12)).toBeCloseTo(-1.04, TOLERANCE);
    expect(percentile(values, 0.13)).toBeCloseTo(-0.96, TOLERANCE);
    expect(percentile(values, 0.14)).toBeCloseTo(-0.88, TOLERANCE);
    expect(percentile(values, 0.15)).toBeCloseTo(-0.8, TOLERANCE);
    expect(percentile(values, 0.16)).toBeCloseTo(-0.72, TOLERANCE);
    expect(percentile(values, 0.17)).toBeCloseTo(-0.64, TOLERANCE);
    expect(percentile(values, 0.18)).toBeCloseTo(-0.56, TOLERANCE);
    expect(percentile(values, 0.19)).toBeCloseTo(-0.48, TOLERANCE);
    expect(percentile(values, 0.2)).toBeCloseTo(-0.4, TOLERANCE);
    expect(percentile(values, 0.21)).toBeCloseTo(-0.32, TOLERANCE);
    expect(percentile(values, 0.22)).toBeCloseTo(-0.24, TOLERANCE);
    expect(percentile(values, 0.23)).toBeCloseTo(-0.16, TOLERANCE);
    expect(percentile(values, 0.24)).toBeCloseTo(-0.08, TOLERANCE);
    expect(percentile(values, 0.25)).toBeCloseTo(-4.44089e-16, TOLERANCE);
    expect(percentile(values, 0.26)).toBeCloseTo(0.08, TOLERANCE);
    expect(percentile(values, 0.27)).toBeCloseTo(0.16, TOLERANCE);
    expect(percentile(values, 0.28)).toBeCloseTo(0.24, TOLERANCE);
    expect(percentile(values, 0.29)).toBeCloseTo(0.32, TOLERANCE);
    expect(percentile(values, 0.3)).toBeCloseTo(0.4, TOLERANCE);
    expect(percentile(values, 0.31)).toBeCloseTo(0.48, TOLERANCE);
    expect(percentile(values, 0.32)).toBeCloseTo(0.56, TOLERANCE);
    expect(percentile(values, 0.33)).toBeCloseTo(0.64, TOLERANCE);
    expect(percentile(values, 0.34)).toBeCloseTo(0.72, TOLERANCE);
    expect(percentile(values, 0.35)).toBeCloseTo(0.8, TOLERANCE);
    expect(percentile(values, 0.36)).toBeCloseTo(0.88, TOLERANCE);
    expect(percentile(values, 0.37)).toBeCloseTo(0.96, TOLERANCE);
    expect(percentile(values, 0.38)).toBeCloseTo(1.04, TOLERANCE);
    expect(percentile(values, 0.39)).toBeCloseTo(1.12, TOLERANCE);
    expect(percentile(values, 0.4)).toBeCloseTo(1.2, TOLERANCE);
    expect(percentile(values, 0.41)).toBeCloseTo(1.28, TOLERANCE);
    expect(percentile(values, 0.42)).toBeCloseTo(1.36, TOLERANCE);
    expect(percentile(values, 0.43)).toBeCloseTo(1.44, TOLERANCE);
    expect(percentile(values, 0.44)).toBeCloseTo(1.52, TOLERANCE);
    expect(percentile(values, 0.45)).toBeCloseTo(1.6, TOLERANCE);
    expect(percentile(values, 0.46)).toBeCloseTo(1.68, TOLERANCE);
    expect(percentile(values, 0.47)).toBeCloseTo(1.76, TOLERANCE);
    expect(percentile(values, 0.48)).toBeCloseTo(1.84, TOLERANCE);
    expect(percentile(values, 0.49)).toBeCloseTo(1.92, TOLERANCE);
    expect(percentile(values, 0.5)).toBeCloseTo(2, TOLERANCE);
    expect(percentile(values, 0.51)).toBeCloseTo(2.08, TOLERANCE);
    expect(percentile(values, 0.52)).toBeCloseTo(2.16, TOLERANCE);
    expect(percentile(values, 0.53)).toBeCloseTo(2.24, TOLERANCE);
    expect(percentile(values, 0.54)).toBeCloseTo(2.32, TOLERANCE);
    expect(percentile(values, 0.55)).toBeCloseTo(2.4, TOLERANCE);
    expect(percentile(values, 0.56)).toBeCloseTo(2.48, TOLERANCE);
    expect(percentile(values, 0.57)).toBeCloseTo(2.56, TOLERANCE);
    expect(percentile(values, 0.58)).toBeCloseTo(2.64, TOLERANCE);
    expect(percentile(values, 0.59)).toBeCloseTo(2.72, TOLERANCE);
    expect(percentile(values, 0.6)).toBeCloseTo(2.8, TOLERANCE);
    expect(percentile(values, 0.61)).toBeCloseTo(2.88, TOLERANCE);
    expect(percentile(values, 0.62)).toBeCloseTo(2.96, TOLERANCE);
    expect(percentile(values, 0.63)).toBeCloseTo(3.04, TOLERANCE);
    expect(percentile(values, 0.64)).toBeCloseTo(3.12, TOLERANCE);
    expect(percentile(values, 0.65)).toBeCloseTo(3.2, TOLERANCE);
    expect(percentile(values, 0.66)).toBeCloseTo(3.28, TOLERANCE);
    expect(percentile(values, 0.67)).toBeCloseTo(3.36, TOLERANCE);
    expect(percentile(values, 0.68)).toBeCloseTo(3.44, TOLERANCE);
    expect(percentile(values, 0.69)).toBeCloseTo(3.52, TOLERANCE);
    expect(percentile(values, 0.7)).toBeCloseTo(3.6, TOLERANCE);
    expect(percentile(values, 0.71)).toBeCloseTo(3.68, TOLERANCE);
    expect(percentile(values, 0.72)).toBeCloseTo(3.76, TOLERANCE);
    expect(percentile(values, 0.73)).toBeCloseTo(3.84, TOLERANCE);
    expect(percentile(values, 0.74)).toBeCloseTo(3.92, TOLERANCE);
    expect(percentile(values, 0.75)).toBeCloseTo(4, TOLERANCE);
    expect(percentile(values, 0.76)).toBeCloseTo(4.08, TOLERANCE);
    expect(percentile(values, 0.77)).toBeCloseTo(4.16, TOLERANCE);
    expect(percentile(values, 0.78)).toBeCloseTo(4.24, TOLERANCE);
    expect(percentile(values, 0.79)).toBeCloseTo(4.32, TOLERANCE);
    expect(percentile(values, 0.8)).toBeCloseTo(4.4, TOLERANCE);
    expect(percentile(values, 0.81)).toBeCloseTo(4.48, TOLERANCE);
    expect(percentile(values, 0.82)).toBeCloseTo(4.56, TOLERANCE);
    expect(percentile(values, 0.83)).toBeCloseTo(4.64, TOLERANCE);
    expect(percentile(values, 0.84)).toBeCloseTo(4.72, TOLERANCE);
    expect(percentile(values, 0.85)).toBeCloseTo(4.8, TOLERANCE);
    expect(percentile(values, 0.86)).toBeCloseTo(4.88, TOLERANCE);
    expect(percentile(values, 0.87)).toBeCloseTo(4.96, TOLERANCE);
    expect(percentile(values, 0.88)).toBeCloseTo(5.04, TOLERANCE);
    expect(percentile(values, 0.89)).toBeCloseTo(5.12, TOLERANCE);
    expect(percentile(values, 0.9)).toBeCloseTo(5.2, TOLERANCE);
    expect(percentile(values, 0.91)).toBeCloseTo(5.28, TOLERANCE);
    expect(percentile(values, 0.92)).toBeCloseTo(5.36, TOLERANCE);
    expect(percentile(values, 0.93)).toBeCloseTo(5.44, TOLERANCE);
    expect(percentile(values, 0.94)).toBeCloseTo(5.52, TOLERANCE);
    expect(percentile(values, 0.95)).toBeCloseTo(5.6, TOLERANCE);
    expect(percentile(values, 0.96)).toBeCloseTo(5.68, TOLERANCE);
    expect(percentile(values, 0.97)).toBeCloseTo(5.76, TOLERANCE);
    expect(percentile(values, 0.98)).toBeCloseTo(5.84, TOLERANCE);
    expect(percentile(values, 0.99)).toBeCloseTo(5.92, TOLERANCE);
    expect(percentile(values, 1)).toBeCloseTo(6, TOLERANCE);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      percentile(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      percentile(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      percentile([]);
    }).toThrow('x must have at least 1 observation');
  });

  it('throws error for invalid percentile', () => {
    expect(() => {
      percentile([1, 2, 3], -1);
    }).toThrow('thePercentile must be in the range [0 to 1]');

    expect(() => {
      percentile([1, 2, 3], 2);
    }).toThrow('thePercentile must be in the range [0 to 1]');
  });
});
