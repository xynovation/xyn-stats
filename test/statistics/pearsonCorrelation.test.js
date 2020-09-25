import pearsonCorrelation from '../../src/statistics/pearsonCorrelation';

const TOLERANCE = 0.00000001;

describe('pearsonCorrelation', () => {
  it('should be 1 for points on the same upward sloping line', () => {
    const x = [1, 2, 3];
    const y = [1, 2, 3];
    const r = pearsonCorrelation(x, y);
    expect(r).toBe(1);
  });

  it('should be -1 for points on the same downward sloping line', () => {
    const x = [1, 2, 3];
    const y = [-1, -2, -3];
    const r = pearsonCorrelation(x, y);
    expect(r).toBe(-1);
  });

  it('should be positive', () => {
    var x = [43, 21, 25, 42, 57, 59];
    var y = [99, 65, 79, 75, 87, 81];
    const r = pearsonCorrelation(x, y);
    expect(r).toBeCloseTo(0.529808902, TOLERANCE);
  });

  it('should be negative', () => {
    var x = [43, 21, 25, 42, 57, 59];
    var y = [-99, -65, -79, -75, -87, -81];
    const r = pearsonCorrelation(x, y);
    expect(r).toBeCloseTo(-0.529808902, TOLERANCE);
  });

  it('throws error for invalid x array', () => {
    expect(() => {
      pearsonCorrelation(undefined, undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      pearsonCorrelation(null, null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      pearsonCorrelation([], []);
    }).toThrow('x must have at least 1 observation');
  });

  it('throws error for invalid y array', () => {
    expect(() => {
      pearsonCorrelation([1], undefined);
    }).toThrow('y must have at least 1 observation');

    expect(() => {
      pearsonCorrelation([1], null);
    }).toThrow('y must have at least 1 observation');

    expect(() => {
      pearsonCorrelation([1], []);
    }).toThrow('y must have at least 1 observation');
  });

  it('throws error if x and y not same length', () => {
    expect(() => {
      pearsonCorrelation([1], [1, 2]);
    }).toThrow('x and y must have the same length');
  });

  it('throws error if x and y have only 1 value', () => {
    expect(() => {
      pearsonCorrelation([1], [1]);
    }).toThrow('x and y must have more than one value');
  });
});
