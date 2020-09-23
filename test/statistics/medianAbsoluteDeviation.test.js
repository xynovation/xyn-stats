import medianAbsoluteDeviation from '../../src/statistics/medianAbsoluteDeviation';

describe('medianAbsoluteDeviation', () => {
  it('works', () => {
    expect(medianAbsoluteDeviation([1, 1, 2, 2, 4, 6, 9])).toBe(1);

    expect(medianAbsoluteDeviation([1, 2, 3, 45, 55, 56, 57, 58, 403, 900])).toBe(31.5);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      medianAbsoluteDeviation(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      medianAbsoluteDeviation(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      medianAbsoluteDeviation([]);
    }).toThrow('x must have at least 1 observation');
  });
});
