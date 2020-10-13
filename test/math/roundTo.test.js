import roundTo from '../../src/math/roundTo';

describe('isEmpty', () => {
  it('is works for values that toFixed fails with', () => {
    expect(roundTo(8.555, 2)).toBe(8.56);
    expect(roundTo(8.565, 2)).toBe(8.57);
    expect(roundTo(8.575, 2)).toBe(8.58);
    expect(roundTo(8.585, 2)).toBe(8.59);
    expect(roundTo(8.635, 2)).toBe(8.64);
    expect(roundTo(8.645, 2)).toBe(8.65);
    expect(roundTo(8.655, 2)).toBe(8.66);
  });

  it('throws error for invalid decimalPlaces', () => {
    expect(() => {
      roundTo(1.23, -1);
    }).toThrow('decimalPlaces must be >= 0 and < 100, was -1');

    expect(() => {
      roundTo(1.23, 100);
    }).toThrow('decimalPlaces must be >= 0 and < 100, was 100');
  });

  it('can round to 0 places', () => {
    let value = 1.23456;

    let roundedValue = roundTo(value, 0);

    expect(roundedValue).toBe(1);
  });

  it('is true for 1.5000000000000089', () => {
    let value = 1.5000000000000089;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(1.5);
  });

  it('is true for 1.5500000000000089', () => {
    let value = 1.5500000000000089;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(1.55);
  });

  it('is true for -1.5000000000000089', () => {
    let value = -1.5000000000000089;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(-1.5);
  });

  it('is true for 2.1999999999999957', () => {
    let value = 2.1999999999999957;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(2.2);
  });

  it('is true for 123.13999999999999957', () => {
    let value = 123.13999999999999957;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(123.14);
  });

  it('is true for 99999993.1239999999957', () => {
    let value = 99999993.1239999999957;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(99999993.124);
  });

  it('is true for 9999999993.1239999999957', () => {
    let value = 9999999993.1239999999957;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(9999999993.124);
  });

  it('is true for -123.1999999999999957', () => {
    let value = -123.13999999999999957;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(-123.14);
  });

  it('is true for .1 + .1 + .1', () => {
    let value = 0.1 + 0.1 + 0.1;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(0.3);
  });

  it('is true for 1 + .1 + .1', () => {
    let value = 1 + 0.1 + 0.1;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(1.2);
  });

  it('is true 2.9259784825371965e-15', () => {
    let value = 2.9259784825371965e-15;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(0);
  });

  it('is true for 123 + .1 + .1', () => {
    let value = 123 + 0.1 + 0.1;

    let roundedValue = roundTo(value);

    expect(roundedValue).toBe(123.2);

    expect(roundTo(0.0000010000000000000002)).toBe(0.000001);
    expect(roundTo(0.57 * 100)).toBe(57);
    expect(roundTo(8.575 * 100, 1)).toBe(857.5);
  });
});
