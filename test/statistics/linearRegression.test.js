import linearFunction from '../../src/math/linearFunction';
import linearRegression from '../../src/statistics/linearRegression';

const TOLERANCE = 0.00000001;

describe('linearRegression', () => {
  it('works for y =  1 + 2x + 3x (Singular Matrix)', () => {
    // x1, x2, x3, y
    // y = 1 + 2x + 3x
    const values = [
      [1, 1, 6],
      [1, 2, 9],
      [1, 3, 12],
    ];

    const { rSquared, isSingularMatrix, equationStr, equationFunc } = linearRegression(values);

    expect(equationStr).toBe('y = 3 + 3 x2');
    expect(rSquared).toBe(1);
    expect(isSingularMatrix).toBe(true);
    expect(equationFunc).not.toBeNull();
  });

  it('works for y = 0.5148601832204671 + 0.000542062896714306 x1 - 0.00035345568455623155 x2 + 0.0019881926209266154 x3', () => {
    // x1, x2, x3, y
    const values = [
      [280, 266, 228, 0.98],
      [142, 230, 201, 0.93],
      [10, 114, 2, 0.25],
      [391, 313, 227, 0.99],
      [86, 329, 82, 0.79],
      [17, 42, 11, 0.72],
      [21, 49, 16, 0.32],
      [314, 1695, 472, 0.99],
      [333, 430, 185, 0.99],
      [91, 182, 89, 0.82],
    ];

    const { rSquared, isSingularMatrix, equationStr, equationFunc } = linearRegression(values);

    expect(equationStr).toBe('y = 0.514860183221 + 0.000542062897 x1 - 0.000353455685 x2 + 0.001988192621 x3');
    expect(rSquared).toBe(0.698808003212);
    expect(isSingularMatrix).toBe(false);
    expect(equationFunc).not.toBeNull();
  });

  it('works for y = 1.5 + 2.2 x1', () => {
    // x1, x2, x3, y
    const values = [
      [1, 3.7],
      [2, 5.9],
      [3, 8.1],
    ];

    const { rSquared, coefficients, isSingularMatrix, equationStr, equationFunc } = linearRegression(values);

    expect(equationStr).toBe('y = 1.5 + 2.2 x1');
    expect(coefficients[0]).toBe(1.5);
    expect(coefficients[1]).toBe(2.2);
    expect(rSquared).toBe(1);
    expect(equationFunc).not.toBeNull();
    expect(isSingularMatrix).toBe(false);
    expect(equationFunc([1])).toBeCloseTo(3.7, TOLERANCE);
    expect(equationFunc([2])).toBeCloseTo(5.9, TOLERANCE);
    expect(equationFunc([3])).toBeCloseTo(8.1, TOLERANCE);
  });

  it('works for y = -6.328693048501 - 0.596506714491 x1 + 0.5219790068 x2', () => {
    // x1, x2, x3, y
    const values = [
      [1.794638, 15.15426, 5.10998918e-1],
      [13.220726, 229.6516, 105.6583692],
      [55.78004, 3.480201e3, 1.77699e3],
    ];

    const { rSquared, isSingularMatrix, equationStr, equationFunc } = linearRegression(values);

    expect(equationStr).toBe('y = -6.328693048501 - 0.596506714491 x1 + 0.5219790068 x2');
    expect(rSquared).toBe(1);
    expect(isSingularMatrix).toBe(false);
    expect(equationFunc).not.toBeNull();
    expect(equationFunc([13.220726, 229.6516])).toBeCloseTo(105.6583692, TOLERANCE);
  });

  it('works with labels', () => {
    // x1, x2, x3, y
    // disp, hp, wt, mpg
    const values = [
      [160, 110, 2.62, 21.0],
      [160, 110, 2.875, 21.0],
      [108, 93, 2.32, 22.8],
      [258, 110, 3.215, 21.4],
      [360, 175, 3.44, 18.7],
      [225, 105, 3.46, 18.1],
    ];

    let labels = ['displacement', 'horsePower', 'weight', 'mpg'];
    const { rSquared, isSingularMatrix, equationStr, equationFunc } = linearRegression(values, labels);

    expect(equationStr).toBe(
      'mpg = 39.414417850275 + 0.029988368102 displacement - 0.058501070838 horsePower - 6.161487460109 weight'
    );
    expect(rSquared).toBeCloseTo(0.8779, TOLERANCE);
    expect(equationFunc).not.toBeNull();
    expect(isSingularMatrix).toBe(false);
    expect(equationFunc([221, 102, 2.91])).toBeCloseTo(22.14, TOLERANCE);
  });

  // can work for polynomial, you need to square the input variable
  // and treat it as another independent variable
  it('works for y = 3 + 2x + 5x^2', () => {
    // x1, x2, x3, y
    // inputs are x and x^2
    const values = [
      [1, 1, 10],
      [2, 4, 27],
      [3, 9, 54],
    ];

    const { rSquared, isSingularMatrix, equationStr, equationFunc } = linearRegression(values, ['x', 'x^2', 'y']);

    expect(equationStr).toBe('y = 3 + 2 x + 5 x^2');
    expect(rSquared).toBe(1);
    expect(isSingularMatrix).toBe(false);
    expect(equationFunc).not.toBeNull();
    expect(equationFunc([1, 1])).toBe(10);
    expect(equationFunc([2, 4])).toBe(27);
    expect(equationFunc([3, 9])).toBe(54);
  });

  it('works for random lines', () => {
    // x1, x2, x3, y
    // inputs are x and x^2

    for (let trials = 0; trials < 1000; trials += 1) {
      let coeffCount = Math.round(Math.random() * 10) + 2; // the constant + x's, 2 to 12
      let coeff = [];
      let obs = [];

      // generate random coefficients which will form a line
      // half between -500 and 500 and half between -.5 and .5
      // const, x1, x2..., x(coeffCount - 1)
      for (let i = 0; i < coeffCount; i += 1) {
        if (Math.random() < 0.5) {
          coeff[i] = Math.random() * 1000 - 500;
        } else {
          coeff[i] = Math.random() - 0.5;
        }
      }

      // generate random points on the line
      let func = linearFunction(coeff);
      let obsCount = coeffCount + 10;
      for (let i = 0; i < obsCount; i += 1) {
        obs[i] = [];
        for (let j = 0; j < coeff.length - 1; j += 1) {
          obs[i].push(Math.random() * 2000 - 1000);
        }

        obs[i].push(func(obs[i]));
      }

      const { rSquared, isSingularMatrix, coefficients, equationStr, equationFunc } = linearRegression(obs);

      if (isNaN(rSquared) || rSquared < 0) {
        console.log(`******** Got ${rSquared} for the following obs`);
        console.log(obs);
        console.log(equationStr);
      }

      expect(rSquared).toBe(1);
      expect(isSingularMatrix).toBe(false);

      // plug observation into func (it ignores the last value which is y)
      // since line is a perfect fit they should match
      for (let zz = 0; zz < obs.length; zz += 1) {
        expect(equationFunc(obs[zz])).toBeCloseTo(obs[zz][coeffCount - 1], TOLERANCE);
      }

      for (let i = 0; i < coeff.length; i += 1) {
        expect(coefficients[i]).toBeCloseTo(coeff[i], TOLERANCE);
      }
    }
  });

  it('works for horizontal line', () => {
    // x1, x2, x3, y
    // inputs are x and x^2
    const values = [
      [1, 3],
      [2, 3],
      [3, 3],
    ];

    const { rSquared, isSingularMatrix, equationStr, equationFunc } = linearRegression(values);

    expect(equationStr).toBe('y = 3');
    expect(rSquared).toBeNaN();
    expect(isSingularMatrix).toBe(false);
    expect(equationFunc).not.toBeNull();
    expect(equationFunc([2])).toBeCloseTo(3, TOLERANCE);
    expect(equationFunc([3])).toBeCloseTo(3, TOLERANCE);
  });

  it('works for  y = -.8x', () => {
    const values = [
      [1, -0.8],
      [2, -1.6],
      [3, -2.4],
    ];

    const { rSquared, isSingularMatrix, equationStr, equationFunc } = linearRegression(values, ['x', 'y']);

    expect(equationStr).toBe('y =  - 0.8 x');
    expect(rSquared).toBe(1);
    expect(isSingularMatrix).toBe(false);
    expect(equationFunc).not.toBeNull();
    expect(equationFunc([2])).toBeCloseTo(-1.6, TOLERANCE);
    expect(equationFunc([3])).toBeCloseTo(-2.4, TOLERANCE);
  });

  it('throws error for invalid x array', () => {
    expect(() => {
      linearRegression(undefined);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      linearRegression(null);
    }).toThrow('x must have at least 1 observation');

    expect(() => {
      linearRegression([]);
    }).toThrow('x must have at least 1 observation');
  });
});
