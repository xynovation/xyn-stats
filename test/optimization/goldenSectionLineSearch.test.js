import goldenSectionLineSearch from '../../src/optimization/goldenSectionLineSearch';

const TOLERANCE = 0.00000001;

describe('goldenSectionLineSearch', () => {
  it('finds optimum for test parabola 2', () => {
    function evalCosine(x) {
      return 4 * Math.sin(x[0]) * (1.0 + Math.cos(x[0]));
    }

    let { point, value } = goldenSectionLineSearch(evalCosine, [0], [Math.PI / 2.0], true);

    expect(point[0]).toBeCloseTo(1.0471974974483713, TOLERANCE);
    expect(value).toBeCloseTo(5.196152422706617, TOLERANCE);
  });

  it('finds minimum for parabola', () => {
    function parabola(x) {
      return x[0] * x[0];
    }

    let startPoint = [-1];
    let endPoint = [1];

    const { point, value } = goldenSectionLineSearch(parabola, startPoint, endPoint);

    expect(point[0]).toBeCloseTo(0, TOLERANCE);
    expect(value).toBeCloseTo(0, TOLERANCE);
  });

  it('finds minimum for 1D parabola with values switched', () => {
    function parabola(x) {
      let total = 0;

      for (let i = 0; i < x.length; ++i) {
        total = total + x[i] * x[i];
      }

      return total;
    }

    let startPoint = [1];
    let endPoint = [-1];

    const { point, value } = goldenSectionLineSearch(parabola, startPoint, endPoint);

    expect(point[0]).toBeCloseTo(0, TOLERANCE);
    expect(value).toBeCloseTo(0, TOLERANCE);
  });

  it('finds optimum for 4D parabola', () => {
    function parabola(x) {
      let total = 0;

      for (let i = 0; i < x.length; ++i) {
        total = total + x[i] * x[i];
      }

      return total;
    }

    let startPoint = [-2.5, -2.5, -2.5, -2.5];
    let endPoint = [1, 1, 1, 1];

    const { point, value } = goldenSectionLineSearch(parabola, startPoint, endPoint, false, 0.000001);

    expect(point[0]).toBeCloseTo(0, TOLERANCE);
    expect(point[1]).toBeCloseTo(0, TOLERANCE);
    expect(point[2]).toBeCloseTo(0, TOLERANCE);
    expect(point[3]).toBeCloseTo(0, TOLERANCE);
    expect(value).toBeCloseTo(0, TOLERANCE);
  });

  it('finds optimum for 2D parabola with min and max switched', () => {
    function parabola(x) {
      let total = 0;

      for (let i = 0; i < x.length; ++i) {
        total = total + x[i] * x[i];
      }

      return total;
    }

    let startPoint = [1, 1];
    let endPoint = [-1.75, -1.75];

    const { point, value } = goldenSectionLineSearch(parabola, startPoint, endPoint, false, 0.000001);

    expect(point[0]).toBeCloseTo(0, TOLERANCE);
    expect(point[1]).toBeCloseTo(0, TOLERANCE);
    expect(value).toBeCloseTo(0, TOLERANCE);
  });

  it('finds optimum for 2D parabola with min and max switched 2', () => {
    function parabola(x) {
      let total = 0;

      for (let i = 0; i < x.length; ++i) {
        total = total + x[i] * x[i];
      }

      return total;
    }

    let startPoint = [0, -1];
    let endPoint = [0, 1];

    const { point, value } = goldenSectionLineSearch(parabola, startPoint, endPoint, false, 0.000001);

    expect(point[0]).toBeCloseTo(0, TOLERANCE);
    expect(point[1]).toBeCloseTo(0, TOLERANCE);
    expect(value).toBeCloseTo(0, TOLERANCE);
  });

  it('finds maximum for 2D paraboloid', () => {
    function paraboloid(point) {
      let total = 0;

      for (let i = 0; i < point.length; ++i) {
        total = total + point[i] * point[i];
      }

      return total;
    }

    let startPoint = [-10, -10];
    let endPoint = [5, 5];

    let { point, value } = goldenSectionLineSearch(paraboloid, startPoint, endPoint, true);

    expect(point[0]).toBeCloseTo(-10, TOLERANCE);
    expect(point[1]).toBeCloseTo(-10, TOLERANCE);
    expect(value).toBeCloseTo(200, TOLERANCE);
  });

  it('throws error for no evaluation function', () => {
    expect(() => {
      goldenSectionLineSearch(undefined, [0], [1], false, 0.000001);
    }).toThrow('an evaluationFunction is needed');

    expect(() => {
      goldenSectionLineSearch(null, [0], [1], false, 0.000001);
    }).toThrow('an evaluationFunction is needed');
  });

  it('throws error for null starting point', () => {
    expect(() => {
      goldenSectionLineSearch(() => {}, null, [1], false, 0.000001);
    }).toThrow('startPoint must be an array, was null');
  });

  it('throws error for null ending point', () => {
    expect(() => {
      goldenSectionLineSearch(() => {}, [0], null, false, 0.000001);
    }).toThrow('endPoint must be an array, was null');
  });

  it('throws error for undefined starting point', () => {
    expect(() => {
      goldenSectionLineSearch(() => {}, undefined, [1], false, 0.000001);
    }).toThrow('startPoint must be an array, was undefined');
  });

  it('throws error for undefined ending point', () => {
    expect(() => {
      goldenSectionLineSearch(() => {}, [0], undefined, false, 0.000001);
    }).toThrow('endPoint must be an array, was undefined');
  });

  it('throws error for start point and end point not same length', () => {
    expect(() => {
      goldenSectionLineSearch(() => {}, [1, 2], [1], false, 0.000001);
    }).toThrow('startPoint and endPoint must be the same length, were 2 and 1');
  });
});
