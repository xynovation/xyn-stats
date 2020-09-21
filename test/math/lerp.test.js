import lerp from '../../src/math/lerp';

const TOLERANCE = 0.00000001;

describe('lerp', () => {
  it('works with 0 <= pct <= 1', () => {
    expect(lerp(0, 1, 0.5)).toBeCloseTo(0.5, TOLERANCE);
    expect(lerp(0, 100, 0.5)).toBeCloseTo(50, TOLERANCE);
    expect(lerp(20, 80, 0)).toBeCloseTo(20, TOLERANCE);
    expect(lerp(1, 11, 0.3)).toBeCloseTo(4, TOLERANCE);
    expect(lerp(-1, 1, 0.5)).toBeCloseTo(0, TOLERANCE);
    expect(lerp(0.5, 1, 0.5)).toBeCloseTo(0.75, TOLERANCE);
    expect(lerp(-25, 50, 1)).toBeCloseTo(50, TOLERANCE);
    expect(lerp(-25, 50, 0)).toBeCloseTo(-25, TOLERANCE);
  });

  it('works with begin and end switched', () => {
    expect(lerp(1, 0, 0.5)).toBeCloseTo(0.5, TOLERANCE);
    expect(lerp(1, 0, 0.5)).toBeCloseTo(0.5, TOLERANCE);
  });

  it('works with pct > 1', () => {
    expect(lerp(0, 1, 1.1)).toBeCloseTo(1.1, TOLERANCE);
    expect(lerp(1, 10, 1.1)).toBeCloseTo(10.9, TOLERANCE);
  });

  it('works with pct < 0', () => {
    expect(lerp(0, 1, -0.1)).toBeCloseTo(-0.1, TOLERANCE);
    expect(lerp(1, 10, -0.1)).toBeCloseTo(0.1, TOLERANCE);
  });

  it('works with extreme values', () => {
    expect(lerp(1.7, 1.7, 0.4)).toBeCloseTo(1.7, TOLERANCE);
    expect(lerp(127, 127, 5.0586262771736122e-15)).toBeCloseTo(127, TOLERANCE);
    expect(lerp(0.000001430511474609375, 1.1805916083717324e21, 1)).toBeCloseTo(1.1805916083717324e21, TOLERANCE);

    expect(lerp(0.23456789553165435791015625, 7.345678806304931640625, 0.300000011920928955078125)).toBeCloseTo(
      2.3679010868072509765625,
      TOLERANCE
    );
  });
});
