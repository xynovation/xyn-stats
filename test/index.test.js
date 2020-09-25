import * as XynStats from '../src/index';

describe('exports', () => {
  it('has the function', () => {
    expect(XynStats.cosineSimilarity).toBeDefined();
    expect(XynStats.goldenSectionLineSearch).toBeDefined();
    expect(XynStats.interquartileRange).toBeDefined();
    expect(XynStats.lerp).toBeDefined();
    expect(XynStats.lerpPoint).toBeDefined();
    expect(XynStats.maximum).toBeDefined();
    expect(XynStats.mean).toBeDefined();
    expect(XynStats.median).toBeDefined();
    expect(XynStats.medianAbsoluteDeviation).toBeDefined();
    expect(XynStats.minimum).toBeDefined();
    expect(XynStats.neumaierSum).toBeDefined();
    expect(XynStats.outlierExtremasIterativeMAD).toBeDefined();
    expect(XynStats.pearsonCorrelation).toBeDefined();
    expect(XynStats.percentile).toBeDefined();
    expect(XynStats.range).toBeDefined();
    expect(XynStats.shuffle).toBeDefined();
    expect(XynStats.standardDeviation).toBeDefined();
    expect(XynStats.sum).toBeDefined();
    expect(XynStats.trimmedMean).toBeDefined();
    expect(XynStats.zScore).toBeDefined();
  });
});
