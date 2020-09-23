import zScore from '../../src/statistics/zScore';

describe('zScore', () => {
  it('works for standard deviation > 0', () => {
    expect(zScore(3, 2, 2.5)).toBe(0.4);
  });

  it('throws error for invalid values', () => {
    expect(() => {
      zScore(3, 2, 0);
    }).toThrow('standardDeviation must be > 0, was');

    expect(() => {
      zScore(3, 2, -1);
    }).toThrow('standardDeviation must be > 0, was');
  });
});
