import * as XynDataScience from '../src/index';

describe('exports', () => {
  it('has the function', () => {
    expect(XynDataScience.mean).toBeDefined();
    expect(XynDataScience.maximum).toBeDefined();
    expect(XynDataScience.minimum).toBeDefined();
    expect(XynDataScience.neumaierSum).toBeDefined();
    expect(XynDataScience.percentile).toBeDefined();
    expect(XynDataScience.range).toBeDefined();
    expect(XynDataScience.sum).toBeDefined();
    expect(XynDataScience.goldenSectionLineSearch).toBeDefined();
    expect(XynDataScience.lerp).toBeDefined();
    expect(XynDataScience.lerpPoint).toBeDefined();
  });
});
