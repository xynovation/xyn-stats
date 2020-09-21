import lerpPoint from '../../src/math/lerpPoint';

const TOLERANCE = 0.00000001;

describe('lerpPoint', () => {
  it('works with 0 <= pct <= 1', () => {
    let point = lerpPoint([0, 1], [1, 4], 0.75);

    expect(point[0]).toBeCloseTo(0.75, TOLERANCE);
    expect(point[1]).toBeCloseTo(3.25, TOLERANCE);

    point = lerpPoint([1, 1], [2, 2], 0.25);

    expect(point[0]).toBeCloseTo(1.25, TOLERANCE);
    expect(point[1]).toBeCloseTo(1.25, TOLERANCE);
  });

  it('works with begin and end switched', () => {
    let point = lerpPoint([1, 1], [0, 0], 0.5);

    expect(point[0]).toBeCloseTo(0.5, TOLERANCE);
    expect(point[1]).toBeCloseTo(0.5, TOLERANCE);
  });

  it('throws error for null starting point', () => {
    expect(() => {
      lerpPoint(null, [1], 0.5);
    }).toThrow('startPoint must be an array, was null');
  });

  it('throws error for null ending point', () => {
    expect(() => {
      lerpPoint([1], null, 0.5);
    }).toThrow('endPoint must be an array, was null');
  });

  it('throws error for undefined starting point', () => {
    expect(() => {
      lerpPoint(undefined, [1], 0.5);
    }).toThrow('startPoint must be an array, was undefined');
  });

  it('throws error for undefined ending point', () => {
    expect(() => {
      lerpPoint([1], undefined, 0.5);
    }).toThrow('endPoint must be an array, was undefined');
  });

  it('throws error for start point and end point not same length', () => {
    expect(() => {
      lerpPoint([1, 2], [1], 0.5);
    }).toThrow('startPoint and endPoint must be the same length, were 2 and 1');
  });
});
