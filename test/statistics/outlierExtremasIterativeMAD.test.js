import outlierExtremasIterativeMAD from '../../src/statistics/outlierExtremasIterativeMAD';

const TOLERANCE = 0.00000001;

describe('outlierExtremas', () => {
  it('works for single value', () => {
    var values = [1];
    let { min, max } = outlierExtremasIterativeMAD(values);

    expect(min).toBeCloseTo(1, TOLERANCE);
    expect(max).toBeCloseTo(1, TOLERANCE);
  });

  it('works for default scaling factor', () => {
    var values = [1, 2, 3, 3, 4, 4, 4, 5, 5.5, 6, 6, 6.5, 7, 7, 7.5, 8, 9, 12, 52, 90];
    let { min, max } = outlierExtremasIterativeMAD(values);

    expect(min).toBeCloseTo(-0.736375, TOLERANCE);
    expect(max).toBeCloseTo(12.236375, TOLERANCE);
  });

  it('works for scaling factor of 3', () => {
    let values = [1, 3, 3, 6, 8, 10, 10, 1000];
    let { min, max } = outlierExtremasIterativeMAD(values, 1, 3);

    expect(min).toBeCloseTo(-8.57, TOLERANCE);
    expect(max).toBeCloseTo(22.57, TOLERANCE);
  });

  it('works for scaling factor of 2.25', () => {
    var values = [1, 4, 4, 4, 5, 5, 5, 5, 7, 7, 8, 10, 16, 30];
    let { min, max } = outlierExtremasIterativeMAD(values, 5, 2.25);

    expect(min).toBeCloseTo(1.66415, TOLERANCE);
    expect(max).toBeCloseTo(8.33585, TOLERANCE);
  });

  it('throws error for invalid maxIterations', () => {
    expect(() => {
      outlierExtremasIterativeMAD([1], 0);
    }).toThrow('maxIteations must be >= 1');
  });

  it('throws error for invalid array', () => {
    expect(() => {
      outlierExtremasIterativeMAD(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      outlierExtremasIterativeMAD(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      outlierExtremasIterativeMAD([]);
    }).toThrow('x must have at least 1 observation');
  });
});
