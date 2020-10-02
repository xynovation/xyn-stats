import frequencyDistribution from '../../src/statistics/frequencyDistribution';
import maximum from '../../src/statistics/maximum';
import minimum from '../../src/statistics/minimum';

const TOLERANCE = 0.00000001;

describe('frequencyDistribution', () => {
  it('works for 1 observation', () => {
    const values = [1];
    const bins = frequencyDistribution(values, 10);
    expect(bins).toHaveLength(10);
    expect(bins[0].count).toEqual(1);
    expect(bins[1].count).toEqual(0);
    expect(bins[2].count).toEqual(0);
    expect(bins[3].count).toEqual(0);
    expect(bins[4].count).toEqual(0);
    expect(bins[5].count).toEqual(0);
    expect(bins[6].count).toEqual(0);
    expect(bins[7].count).toEqual(0);
    expect(bins[8].count).toEqual(0);
    expect(bins[9].count).toEqual(0);

    let total = 0;
    let pctTotal = 0;
    for (let i = 0; i < bins.length; i += 1) {
      total = total + bins[i].count;
      pctTotal = pctTotal + bins[i].percentage;
    }

    expect(total).toEqual(values.length);
    expect(pctTotal).toBeCloseTo(1.0, TOLERANCE);
  });

  it('works for all the same values', () => {
    const values = [2, 2, 2, 2, 2];
    const bins = frequencyDistribution(values, 3);
    expect(bins).toHaveLength(3);
    expect(bins[0].count).toEqual(5);
    expect(bins[0].percentage).toEqual(1);
    expect(bins[1].count).toEqual(0);
    expect(bins[2].count).toEqual(0);

    let total = 0;
    let pctTotal = 0;
    for (let i = 0; i < bins.length; i += 1) {
      total = total + bins[i].count;
      pctTotal = pctTotal + bins[i].percentage;
    }

    expect(total).toEqual(values.length);
    expect(pctTotal).toBeCloseTo(1.0, TOLERANCE);
  });

  it('works for binCount of 1', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const bins = frequencyDistribution(values, 1);
    expect(bins).toHaveLength(1);
    expect(bins[0].count).toEqual(10);

    let total = 0;
    let pctTotal = 0;
    for (let i = 0; i < bins.length; i += 1) {
      total = total + bins[i].count;
      pctTotal = pctTotal + bins[i].percentage;
    }

    expect(total).toEqual(values.length);
    expect(pctTotal).toBeCloseTo(1.0, TOLERANCE);
    expect(bins[0].percentage).toEqual(1.0);
  });

  it('works for binCount of 2', () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const bins = frequencyDistribution(values, 2);
    expect(bins).toHaveLength(2);
    expect(bins[0].count).toEqual(5);
    expect(bins[1].count).toEqual(5);

    let total = 0;
    let pctTotal = 0;
    for (let i = 0; i < bins.length; i += 1) {
      total = total + bins[i].count;
      pctTotal = pctTotal + bins[i].percentage;
    }

    expect(total).toEqual(values.length);
    expect(pctTotal).toBeCloseTo(1.0, TOLERANCE);
    expect(bins[0].percentage).toEqual(0.5);
    expect(bins[1].percentage).toEqual(0.5);
  });

  it('works for positive values', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const bins = frequencyDistribution(values, 5);
    expect(bins).toHaveLength(5);
    expect(bins[0].count).toEqual(2);
    expect(bins[1].count).toEqual(2);
    expect(bins[2].count).toEqual(2);
    expect(bins[3].count).toEqual(2);
    expect(bins[4].count).toEqual(2);

    let total = 0;
    let pctTotal = 0;
    for (let i = 0; i < bins.length; i += 1) {
      total = total + bins[i].count;
      pctTotal = pctTotal + bins[i].percentage;
    }

    expect(total).toEqual(values.length);
    expect(pctTotal).toBeCloseTo(1.0, TOLERANCE);
  });

  it('works for negative values', () => {
    const values = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
    const bins = frequencyDistribution(values, 5);
    expect(bins).toHaveLength(5);
    expect(bins[0].count).toEqual(2);
    expect(bins[1].count).toEqual(2);
    expect(bins[2].count).toEqual(2);
    expect(bins[3].count).toEqual(2);
    expect(bins[4].count).toEqual(2);

    let total = 0;
    let pctTotal = 0;
    for (let i = 0; i < bins.length; i += 1) {
      total = total + bins[i].count;
      pctTotal = pctTotal + bins[i].percentage;
    }

    expect(total).toEqual(values.length);
    expect(pctTotal).toBeCloseTo(1.0, TOLERANCE);
  });

  it('works for old faithful data', () => {
    const values = [
      3.6,
      1.8,
      3.333,
      2.283,
      4.533,
      2.883,
      4.7,
      3.6,
      1.95,
      4.35,
      1.833,
      3.917,
      4.2,
      1.75,
      4.7,
      2.167,
      1.75,
      4.8,
      1.6,
      4.25,
      1.8,
      1.75,
      3.45,
      3.067,
      4.533,
      3.6,
      1.967,
      4.083,
      3.85,
      4.433,
      4.3,
      4.467,
      3.367,
      4.033,
      3.833,
      2.017,
      1.867,
      4.833,
      1.833,
      4.783,
      4.35,
      1.883,
      4.567,
      1.75,
      4.533,
      3.317,
      3.833,
      2.1,
      4.633,
      2.0,
      4.8,
      4.716,
      1.833,
      4.833,
      1.733,
      4.883,
      3.717,
      1.667,
      4.567,
      4.317,
      2.233,
      4.5,
      1.75,
      4.8,
      1.817,
      4.4,
      4.167,
      4.7,
      2.067,
      4.7,
      4.033,
      1.967,
      4.5,
      4.0,
      1.983,
      5.067,
      2.017,
      4.567,
      3.883,
      3.6,
      4.133,
      4.333,
      4.1,
      2.633,
      4.067,
      4.933,
      3.95,
      4.517,
      2.167,
      4.0,
      2.2,
      4.333,
      1.867,
      4.817,
      1.833,
      4.3,
      4.667,
      3.75,
      1.867,
      4.9,
      2.483,
      4.367,
      2.1,
      4.5,
      4.05,
      1.867,
      4.7,
      1.783,
      4.85,
      3.683,
      4.733,
      2.3,
      4.9,
      4.417,
      1.7,
      4.633,
      2.317,
      4.6,
      1.817,
      4.417,
      2.617,
      4.067,
      4.25,
      1.967,
      4.6,
      3.767,
      1.917,
      4.5,
      2.267,
      4.65,
      1.867,
      4.167,
      2.8,
      4.333,
      1.833,
      4.383,
      1.883,
      4.933,
      2.033,
      3.733,
      4.233,
      2.233,
      4.533,
      4.817,
      4.333,
      1.983,
      4.633,
      2.017,
      5.1,
      1.8,
      5.033,
      4.0,
      2.4,
      4.6,
      3.567,
      4.0,
      4.5,
      4.083,
      1.8,
      3.967,
      2.2,
      4.15,
      2.0,
      3.833,
      3.5,
      4.583,
      2.367,
      5.0,
      1.933,
      4.617,
      1.917,
      2.083,
      4.583,
      3.333,
      4.167,
      4.333,
      4.5,
      2.417,
      4.0,
      4.167,
      1.883,
      4.583,
      4.25,
      3.767,
      2.033,
      4.433,
      4.083,
      1.833,
      4.417,
      2.183,
      4.8,
      1.833,
      4.8,
      4.1,
      3.966,
      4.233,
      3.5,
      4.366,
      2.25,
      4.667,
      2.1,
      4.35,
      4.133,
      1.867,
      4.6,
      1.783,
      4.367,
      3.85,
      1.933,
      4.5,
      2.383,
      4.7,
      1.867,
      3.833,
      3.417,
      4.233,
      2.4,
      4.8,
      2.0,
      4.15,
      1.867,
      4.267,
      1.75,
      4.483,
      4.0,
      4.117,
      4.083,
      4.267,
      3.917,
      4.55,
      4.083,
      2.417,
      4.183,
      2.217,
      4.45,
      1.883,
      1.85,
      4.283,
      3.95,
      2.333,
      4.15,
      2.35,
      4.933,
      2.9,
      4.583,
      3.833,
      2.083,
      4.367,
      2.133,
      4.35,
      2.2,
      4.45,
      3.567,
      4.5,
      4.15,
      3.817,
      3.917,
      4.45,
      2.0,
      4.283,
      4.767,
      4.533,
      1.85,
      4.25,
      1.983,
      2.25,
      4.75,
      4.117,
      2.15,
      4.417,
      1.817,
      4.467,
    ];
    const bins = frequencyDistribution(values, 8);
    expect(minimum(values)).toEqual(1.6);
    expect(maximum(values)).toEqual(5.1);

    // { min: 1.6, max: 2.0375, count: 60 },
    expect(bins[0].min).toEqual(1.6);
    expect(bins[0].max).toEqual(2.0375);
    expect(bins[0].count).toEqual(60);

    // { min: 2.0375, max: 2.475, count: 31 },
    expect(bins[1].min).toEqual(2.0375);
    expect(bins[1].max).toEqual(2.475);
    expect(bins[1].count).toEqual(31);
    expect(bins[1].percentage).toEqual(0.11397058823529412);

    // { min: 2.475, max: 2.9125, count: 6 },
    expect(bins[2].min).toEqual(2.475);
    expect(bins[2].max).toEqual(2.9125);
    expect(bins[2].count).toEqual(6);
    expect(bins[2].percentage).toEqual(0.022058823529411766);

    // { min: 2.9125, max: 3.35, count: 4 },
    expect(bins[3].min).toEqual(2.9125);
    expect(bins[3].max).toEqual(3.35);
    expect(bins[3].count).toEqual(4);
    expect(bins[3].percentage).toEqual(0.014705882352941176);

    // { min: 3.35, max: 3.7875, count: 17 },
    expect(bins[4].min).toEqual(3.35);
    expect(bins[4].max).toEqual(3.7875);
    expect(bins[4].count).toEqual(17);
    expect(bins[4].percentage).toEqual(0.0625);

    // { min: 3.7875, max: 4.225, count: 48 },
    expect(bins[5].min).toEqual(3.7875);
    expect(bins[5].max).toEqual(4.225);
    expect(bins[5].count).toEqual(48);
    expect(bins[5].percentage).toEqual(0.17647058823529413);

    // { min: 4.225, max: 4.6625, count: 72 },
    expect(bins[6].min).toEqual(4.225);
    expect(bins[6].max).toEqual(4.6625);
    expect(bins[6].count).toEqual(72);
    expect(bins[6].percentage).toEqual(0.2647058823529412);

    // { min: 4.6625, max: 5.1, count: 34 }
    expect(bins[7].min).toEqual(4.6625);
    expect(bins[7].max).toEqual(5.1);
    expect(bins[7].count).toEqual(34);
    expect(bins[7].percentage).toEqual(0.125);

    let total = 0;
    let pctTotal = 0;
    for (let i = 0; i < bins.length; i += 1) {
      total = total + bins[i].count;
      pctTotal = pctTotal + bins[i].percentage;
    }

    expect(total).toEqual(272);
    expect(total).toEqual(values.length);
    expect(pctTotal).toBeCloseTo(1.0, TOLERANCE);
  });

  it('throws error for invalid array', () => {
    expect(() => {
      frequencyDistribution(undefined), 2;
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      frequencyDistribution(null, 2);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      frequencyDistribution([], 2);
    }).toThrow('x must have at least 1 observation');
  });

  it('throws error for invalid binCount', () => {
    expect(() => {
      frequencyDistribution([1, 2, 3], 0);
    }).toThrow('binCount must be > 0, was 0');

    expect(() => {
      frequencyDistribution([1, 2, 3], -1);
    }).toThrow('binCount must be > 0, was -1');
  });
});
