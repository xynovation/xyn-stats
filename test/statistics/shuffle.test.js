import shuffle from '../../src/statistics/shuffle';

describe('shuffle', () => {
  it('gives approximately equal counts for all possible permutations', () => {
    let x = null;

    let count = {
      123: 0,
      132: 0,
      213: 0,
      231: 0,
      321: 0,
      312: 0,
    };

    for (let i = 0; i < 1000000; i++) {
      x = shuffle([1, 2, 3]);
      count[x.join('')] += 1;
    }

    // should each be approximately 166,666
    for (let key in count) {
      expect(Math.trunc(count[key] / 10000)).toBe(16);
    }
  });

  it('works with single value', () => {
    let x = shuffle([1]);
    expect(x).toHaveLength(1);
  });

  it('returns undefined if passed undefined', () => {
    expect(shuffle(undefined)).toBeUndefined();
  });

  it('returns null if passed null', () => {
    expect(shuffle(null)).toBeNull();
  });

  it('returns empty array if passed empty array', () => {
    let x = shuffle([]);
    expect(x).toHaveLength(0);
  });
});
