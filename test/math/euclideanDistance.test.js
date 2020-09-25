import euclideanDistance from '../../src/math/euclideanDistance';

const TOLERANCE = 0.00000001;

describe('euclideanDistance', () => {
  it('works for the same point', () => {
    expect(euclideanDistance([1, 1], [1, 1])).toBe(0);
  });

  it('works for a 1D point: 1 to 2 and vice versa', () => {
    expect(euclideanDistance([1], [2])).toBeCloseTo(1, TOLERANCE);
    expect(euclideanDistance([2], [1])).toBeCloseTo(1, TOLERANCE);
  });

  it('works for 2D positive values: 1,1 to 2,2 and vice versa', () => {
    expect(euclideanDistance([1, 1], [2, 2])).toBeCloseTo(Math.sqrt(2), TOLERANCE);
    expect(euclideanDistance([2, 2], [1, 1])).toBeCloseTo(Math.sqrt(2), TOLERANCE);
  });

  it('works 3D from 1,1,1 to 2,2,2 and vice versa', () => {
    expect(euclideanDistance([1, 1, 1], [2, 2, 2])).toBeCloseTo(Math.sqrt(3), TOLERANCE);
    expect(euclideanDistance([2, 2, 2], [1, 1, 1])).toBeCloseTo(Math.sqrt(3), TOLERANCE);
  });

  it('works for 2D negative values:  -1,-1 to -2,-2 and vice versa', () => {
    expect(euclideanDistance([-1, -1], [-2, -2])).toBeCloseTo(Math.sqrt(2), TOLERANCE);
    expect(euclideanDistance([-2, -2], [-1, -1])).toBeCloseTo(Math.sqrt(2), TOLERANCE);
  });

  it('throws error for null starting point', () => {
    expect(() => {
      euclideanDistance(null, [1], 0.5);
    }).toThrow('pointA must be an array, was null');
  });

  it('throws error for null ending point', () => {
    expect(() => {
      euclideanDistance([1], null, 0.5);
    }).toThrow('pointB must be an array, was null');
  });

  it('throws error for undefined starting point', () => {
    expect(() => {
      euclideanDistance(undefined, [1], 0.5);
    }).toThrow('pointA must be an array, was undefined');
  });

  it('throws error for undefined ending point', () => {
    expect(() => {
      euclideanDistance([1], undefined, 0.5);
    }).toThrow('pointB must be an array, was undefined');
  });

  it('throws error for start point and end point not same length', () => {
    expect(() => {
      euclideanDistance([1, 2], [1], 0.5);
    }).toThrow('pointA and pointB must be the same length, were 2 and 1');
  });
});
