import biggerThan from '../../src/math/biggerThan';

const TOLERANCE = 0.00000001;

describe('biggerThan', () => {
  it('works with positive decimal numbers >= 1', () => {
    expect(biggerThan(1.9, 2)).toBe(1.91);
    expect(biggerThan(1.99999999, 2)).toBe(2);
    expect(biggerThan(1.99999999, 3)).toBe(2);
    expect(biggerThan(1.9, 0)).toBe(2);
    expect(biggerThan(1.2535, 2)).toBe(1.26);
    expect(biggerThan(10.23456, 4)).toBe(10.2346);
    expect(biggerThan(4.26789, 2)).toBe(4.27);
    expect(biggerThan(4.25789, 2)).toBe(4.26);
    expect(biggerThan(4.27001, 2)).toBe(4.28);
    expect(biggerThan(1.33333, 2)).toBe(1.34);
    expect(biggerThan(1.38, 2)).toBe(1.39);
    expect(biggerThan(4.561, 2)).toBe(4.57);
    expect(biggerThan(1.89, 2)).toBe(1.9);
    expect(biggerThan(1.89, 3)).toBe(1.891);
    expect(biggerThan(4.56, 2)).toBe(4.57);
    expect(biggerThan(4.1, 2)).toBe(4.11);
    expect(biggerThan(4.1, 1)).toBe(4.2);
    expect(biggerThan(4.1, 0)).toBe(5);
    expect(biggerThan(4.1111, 3)).toBe(4.112);
    expect(biggerThan(1234567.89, 2)).toBe(1234567.9);
    expect(biggerThan(4492903605.9, 1)).toBe(4492903606.0);
    expect(biggerThan(4.27, 2)).toBe(4.28);
    expect(biggerThan(4.27, 1)).toBe(4.3);
    expect(biggerThan(4.26, 2)).toBe(4.27);
    expect(biggerThan(9.28, 2)).toBe(9.29);
  });

  it('works numbers > 0 and < 1', () => {
    expect(biggerThan(0.567, 2)).toBe(0.57);
    expect(biggerThan(0.0000012, 3)).toBe(0.001);
    expect(biggerThan(0.1, 1)).toBe(0.2);
    expect(biggerThan(0.1, 2)).toBe(0.11);
    expect(biggerThan(0.1, 3)).toBe(0.101);
//    expect(biggerThan(0.0000000000000012, 3)).toBe(0.001);
  });

  it('works with whole numbers >= 1', () => {
    expect(biggerThan(11, 0)).toBe(12);
    expect(biggerThan(10, 2)).toBe(10.01);
    expect(biggerThan(11, 3)).toBe(11.001);
  });

  it('works with negative numbers <= 1', () => {
    expect(biggerThan(-10, 2)).toBe(-9.99);
    expect(biggerThan(-100, 2)).toBe(-99.99);
    expect(biggerThan(-1.33333, 2)).toBe(-1.32);
    expect(biggerThan(-1234567.89, 2)).toBe(-1234567.88);
  });
});
