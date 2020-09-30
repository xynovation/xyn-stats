import truncToFixed from '../../src/math/truncToFixed';

describe('truncToFixed', () => {
  it('works with positive numbers', () => {
    expect(truncToFixed(1.23, 0)).toBe('1');
    expect(truncToFixed(1.9, 2)).toBe('1.90');
    expect(truncToFixed(1.234, 2)).toBe('1.23');
    expect(truncToFixed(0.2, 5)).toBe('.20000');
  });

  it('works with negative numbers', () => {
    expect(truncToFixed(-1.23, 0)).toBe('-1');
    expect(truncToFixed(-1.9, 2)).toBe('-1.90');
    expect(truncToFixed(-1.234, 2)).toBe('-1.23');
    expect(truncToFixed(-12.345, 2)).toBe('-12.34');
    expect(truncToFixed(-0.2, 5)).toBe('-.20000');
  });

  it('throws error for negative decimal places', () => {
    expect(() => {
      truncToFixed(1.23, -1);
    }).toThrow('decimalPlaces must be >= 0');
  });
});
