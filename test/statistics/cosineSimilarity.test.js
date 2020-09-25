import cosineSimilarity from '../../src/statistics/cosineSimilarity';

describe('cosineSimilarity', () => {
  it('works for same direction', () => {
    const x = [1, 2, 3];
    const y = [2, 4, 6];
    const v = cosineSimilarity(x, y);
    expect(v).toBe(1);
  });

  it('works for opposite direction', () => {
    const x = [1, 2, 3];
    const y = [-1, -2, -3];
    const v = cosineSimilarity(x, y);
    expect(v).toBe(-1);
  });

  it('works for positive values 2', () => {
    const x = [5, 0, 3, 0, 2, 0, 0, 2, 0, 0];
    const y = [3, 0, 2, 0, 1, 1, 0, 1, 0, 1];
    const v = cosineSimilarity(x, y);
    expect(v).toBe(0.9356014857063997);
  });

  it('throws error for invalid x array', () => {
    expect(() => {
      cosineSimilarity(undefined, undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      cosineSimilarity(null, null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      cosineSimilarity([], []);
    }).toThrow('x must have at least 1 observation');
  });

  it('throws error for invalid y array', () => {
    expect(() => {
      cosineSimilarity([1], undefined);
    }).toThrow('y must have at least 1 observation');

    expect(() => {
      cosineSimilarity([1], null);
    }).toThrow('y must have at least 1 observation');

    expect(() => {
      cosineSimilarity([1], []);
    }).toThrow('y must have at least 1 observation');
  });

  it('throws error if x and y not same length', () => {
    expect(() => {
      cosineSimilarity([1], [1, 2]);
    }).toThrow('x and y must have the same length');
  });
});
