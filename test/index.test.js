import * as XynStats from '../src/index';

describe('exports', () => {
  it('has the function', () => {
    expect(XynStats.biggerThan).toBeDefined();
    expect(XynStats.cosineSimilarity).toBeDefined();
    expect(XynStats.euclideanDistance).toBeDefined();
    expect(XynStats.goldenSectionLineSearch).toBeDefined();
    expect(XynStats.interquartileRange).toBeDefined();
    expect(XynStats.isEmpty).toBeDefined();
    expect(XynStats.lerp).toBeDefined();
    expect(XynStats.lerpPoint).toBeDefined();
    expect(XynStats.linearRegression).toBeDefined();
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
    expect(XynStats.roundTo).toBeDefined();
    expect(XynStats.shuffle).toBeDefined();
    expect(XynStats.smallerThan).toBeDefined();
    expect(XynStats.standardDeviation).toBeDefined();
    expect(XynStats.sum).toBeDefined();
    expect(XynStats.trimmedMean).toBeDefined();
    expect(XynStats.truncToFixed).toBeDefined();
    expect(XynStats.zScore).toBeDefined();
  });
});
