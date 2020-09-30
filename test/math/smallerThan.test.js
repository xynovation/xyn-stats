import smallerThan from '../../src/math/smallerThan';

describe('smallerThan', () => {
  it('works with positive decimal numbers >= 1', () => {
    expect(smallerThan(1.9, 2)).toBe(1.89);
    expect(smallerThan(1.99999999, 2)).toBe(1.98);
    expect(smallerThan(1.99999999, 3)).toBe(1.998);
    expect(smallerThan(1.9, 0)).toBe(0);
    expect(smallerThan(1.2535, 2)).toBe(1.24);
    expect(smallerThan(10.23456, 4)).toBe(10.2344);
    expect(smallerThan(4.26789, 2)).toBe(4.25);
    expect(smallerThan(4.25789, 2)).toBe(4.24);
    expect(smallerThan(4.27001, 2)).toBe(4.26);
    expect(smallerThan(1.33333, 2)).toBe(1.32);
    expect(smallerThan(1.38, 2)).toBe(1.37);
    expect(smallerThan(4.561, 2)).toBe(4.55);
    expect(smallerThan(1.89, 2)).toBe(1.88);
    expect(smallerThan(1.89, 3)).toBe(1.889);
    expect(smallerThan(4.56, 2)).toBe(4.55);
    expect(smallerThan(4.1, 2)).toBe(4.09);
    expect(smallerThan(4.1, 1)).toBe(4);
    expect(smallerThan(4.1, 0)).toBe(3);
    expect(smallerThan(4.1111, 3)).toBe(4.11);
    expect(smallerThan(1234567.89, 2)).toBe(1234567.88);
    expect(smallerThan(4492903605.9, 1)).toBe(4492903605.8);
    expect(smallerThan(4.28, 2)).toBe(4.27);
    expect(smallerThan(4.27, 1)).toBe(4.1);
    expect(smallerThan(4.26, 2)).toBe(4.25);
    expect(smallerThan(9.28, 2)).toBe(9.27);
  });

  it('works numbers > 0 and < 1', () => {
    expect(smallerThan(0.567, 2)).toBe(0.55);
    expect(smallerThan(0.0000012, 3)).toBe(-0.001);
    expect(smallerThan(0.1, 1)).toBe(0);
    expect(smallerThan(0.1, 2)).toBe(0.09);
    expect(smallerThan(0.1, 3)).toBe(0.099);
    //    expect(smallerThan(0.0000000000000012, 3)).toBe(0.001);
  });

  it('works with whole numbers >= 1', () => {
    expect(smallerThan(11, 0)).toBe(10);
    expect(smallerThan(10, 2)).toBe(9.99);
    expect(smallerThan(11, 3)).toBe(10.999);
  });

  it('works with negative numbers <= 1', () => {
    expect(smallerThan(-10, 2)).toBe(-10.01);
    expect(smallerThan(-100, 2)).toBe(-100.01);
    expect(smallerThan(-1.33333, 2)).toBe(-1.34);
    expect(smallerThan(-1234567.89, 2)).toBe(-1234567.9);
  });
});
