/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import linearFunction from '../math/linearFunction';
import isEmpty from '../utils/isEmpty';
import roundTo from '../math/roundTo';

/**
 * This class determines the multiple regression equation for a given
 * set of observations. It is not exposed but rather is used by the
 * exported linearRegression function.
 */
class MultipleRegression {
  constructor(x, labels, decimalPlaces) {
    this.regressionCoefficient = null;
    this.labels = labels;
    this.decimalPlaces = decimalPlaces;
  }

  // add a single observation and update the coefficient list which
  // will be solved for
  // obs is an array in the form [x1, x2, x3,... y]
  // this builds the matrix which needs to be solved
  // creates a 2D [obs.length, obs.length + 1] array
  addObservation(obs) {
    let rowObs = 0.0;
    let colObs = 0.0;

    if (this.regressionCoefficient == null) {
      this.regressionCoefficient = [];
      for (let i = 0; i < obs.length; i += 1) {
        this.regressionCoefficient[i] = [];
        for (let j = 0; j < obs.length + 1; j += 1) {
          this.regressionCoefficient[i][j] = 0;
        }
      }
    }

    for (let row = 0; row < this.regressionCoefficient.length; ++row) {
      for (let col = 0; col < this.regressionCoefficient[0].length; ++col) {
        if (row == 0) {
          rowObs = 1.0;
        } else {
          rowObs = obs[row - 1];
        }

        if (col == 0) {
          colObs = 1.0;
        } else {
          colObs = obs[col - 1];
        }

        this.regressionCoefficient[row][col] += colObs * rowObs;
      }
    }
  }

  // takes in a 2d array returns coefficients for equation
  gaussianElimination(a) {
    let nrow = a.length;
    let ncol = a[0].length;
    let pivot = 0.0;
    let il = 0;
    let coeffs = [];
    let sum = 0.0;
    let temp = 0.0;
    let isSingularMatrix = false;

    coeffs.fill(0, 0, nrow);

    for (let k = 0; k < nrow; ++k) {
      pivot = a[k][k];
      il = k;

      for (let l = k + 1; l < nrow; ++l) {
        if (a[l][k] * a[l][k] > pivot * pivot) {
          pivot = a[l][k];
          il = l;
        }
      }

      if (il != k) {
        for (let ll = 0; ll < ncol; ++ll) {
          temp = a[k][ll];

          a[k][ll] = a[il][ll];
          a[il][ll] = temp;
        }
      }
    }

    for (let j = 1; j < ncol; ++j) {
      a[0][j] /= a[0][0];
    }

    for (let l = 1; l < nrow; ++l) {
      for (let i = l; i < nrow; ++i) {
        sum = 0.0;

        for (let k = 0; k < l; ++k) {
          sum += a[i][k] * a[k][l];
        }

        a[i][l] -= sum;
      }

      for (let j = l + 1; j < ncol; ++j) {
        sum = 0.0;

        for (let k = 0; k < l; ++k) {
          sum += a[l][k] * a[k][j];
        }

        // if a[l][l] is zero or NaN you'll get NaN which leads to a SingularMatrix,
        // infinite solutions.
        // Assign an extremly small value to avoid that and you get back 1 of
        // an infinite number of solutions
        // This results because of a linear depencency betwen some of your variables
        // or bad data - try adding more observations
        if (a[l][l] === 0 || isNaN(a[l][l])) {
          a[l][l] = 1e-20;
          isSingularMatrix = true;
        }

        a[l][j] = (a[l][j] - sum) / a[l][l];
      }
    }

    coeffs[nrow - 1] = a[nrow - 1][ncol - 1];

    for (let m = 2; m <= nrow; ++m) {
      let i = nrow - m;

      sum = 0.0;

      for (let j = i + 1; j < nrow; ++j) {
        sum += a[i][j] * coeffs[j];
      }

      coeffs[i] = a[i][ncol - 1] - sum;
    }

    for (let i = 0; i < coeffs.length; ++i) {
      if (isNaN(coeffs[i])) {
        throw new Error('Singular Matrix');
      }
    }

    return { coefficients: coeffs, isSingularMatrix: isSingularMatrix };
  }

  /**
   * Creates a string representation of the regression equation.
   *
   * @param {Array<number>} coefficient - the coefficients (const, x1, x2, ...)
   * @param {Array<string>} label - the labels to use for the variables, defaults to x1, x2
   */
  toLinearEquationString(coefficient, label) {
    let str = 'y = ';
    let theLabel = null;

    if (label !== undefined && label !== null) {
      str = label[label.length - 1] + ' = ';
    }

    for (let i = 0; i < coefficient.length; ++i) {
      if (coefficient[i] > 0.0) {
        if (i == 0) {
          str = str + coefficient[i];
        } else {
          if (label !== undefined && label !== null) {
            theLabel = label[i - 1];
          } else {
            theLabel = `x${i}`;
          }

          str = str + ` + ${coefficient[i]} ${theLabel}`;
        }
      } else if (coefficient[i] < 0.0) {
        if (i == 0) {
          str = str + coefficient[i];
        } else {
          if (label !== undefined && label !== null) {
            theLabel = label[i - 1];
          } else {
            theLabel = `x${i}`;
          }

          str = str + ` - ${Math.abs(coefficient[i])} ${theLabel}`;
        }
      }
    }

    return str;
  }

  /**
   * Calculates the coefficient of determination, how well the line/plane fits
   * the data [0 - 1].
   *
   * @param {Array<nuber>} obs - the original observations
   * @param {function} regressionFunction - the regression function found
   */
  calcRSquared(obs, regressionFunction) {
    let syy = 0.0;
    let sse = 0.0;
    let answerIndex = 0;
    let sumYsquared = 0.0;
    let sumY = 0.0;
    let y = 0.0;
    let rSquared = 0.0;
    let predictedY = 0.0;

    answerIndex = obs[0].length - 1;

    for (let i = 0; i < obs.length; ++i) {
      y = obs[i][answerIndex];

      predictedY = regressionFunction(obs[i]);

      sumY += y;
      sumYsquared += y * y;
      sse += (y - predictedY) * (y - predictedY);
    }

    syy = sumYsquared - (sumY * sumY) / obs.length;

    rSquared = (syy - sse) / syy;

    return rSquared;
  }

  solveEquation(obsList) {
    let x = obsList;
    let coefficients = null;
    let isSingularMatrix = false;

    for (let i = 0; i < x.length; i += 1) {
      this.addObservation(x[i]);
    }

    try {
      ({ coefficients, isSingularMatrix } = this.gaussianElimination(this.regressionCoefficient));
    } catch (err) {
      console.error(err);
    }

    return { coefficients: coefficients, isSingularMatrix: isSingularMatrix };
  }

  /**
   * Rounds off the coefficients to the given number of decimal places.
   *
   * @param {Array<number>} coefficients - equation coefficients (conts, x1, x2, ...)
   */
  roundOffCoefficients(coefficients) {
    for (let i = 0; i < coefficients.length; i += 1) {
      coefficients[i] = roundTo(coefficients[i], this.decimalPlaces);
    }
  }

  ordinaryLeastSquares(obsList) {
    let { coefficients, isSingularMatrix } = this.solveEquation(obsList);
    this.roundOffCoefficients(coefficients);
    let equationFunc = linearFunction(coefficients);
    let r2 = roundTo(this.calcRSquared(obsList, equationFunc), this.decimalPlaces);
    let equationStr = this.toLinearEquationString(coefficients, this.labels);

    return {
      rSquared: r2, // coefficient of determination [0, 1]
      isSingularMatrix: isSingularMatrix,
      coefficients: coefficients, // constant, x1, x2, ... xn
      equationStr: equationStr,
      equationFunc: equationFunc,
    };
  }
}

/**
 * Calculates the regression line or hyperplane from multiple independent variables.
 
 * Each row of data should be in the following form:
 *
 *    x1, x2, x3, y
 *    x1, x2, x3, y
 *
 * where x1, x2, x3 are independent values and y is the dependent value.
 * 
 * The calculated coefficients are rounded off to 12 decimal places which takes care
 * of rounding issues and gives a cleaner looking equation string.
 *
 * @param {Array<number>} x 2D array of observations in the form [[x1, x2, ..., y], [x1, x2, ..., y]
 *                        where y is the predicted value and x1, x2, ... are the input values
 * @param {Array<string>} [labels = ['x1', 'x2'...'y']] the labels to use when generating the
 *                       string version of the linear function. The labels are to be ordered
 *                       ['xLabel1', 'xLabel2,... 'yLabel'].
 *                       If no labels are passed in then 'x1', x2', ... 'y' are used.
 * @param {number} [decimalPlaces = 12] - how many decimal to round coefficients and r2.
 *                       The r squared value is calcualted with the rounded coefficients.
 * @returns {Object} rSquared - coefficient of determination, how well the line/plane fits the data [0 - 1]
 *                   equationCoeff - array of coefficients for each x input value
 *                                   index 0 is the constant, 1 is the first x, and so on
 *                   equationStr - a string verison of the equation, y = 3x1 + 4x2
 *                   equationFunc{Array<number>} - a function which can be used to evalute the equation
 *                               pass in array of values for x values
 *                   isSingularMatrix - indicates there are an infinite number of solutions,
 *                                      could be some observation values are linearly related
 *                                      to one another, or there was not enough observations,
 *                                      Try using different and more observations
 * @throws {Error} if the the length of x is less than one
 * @example const {equationFunc, equationStr} = linearRegression([[1, 1, 10], [2, 4, 27], [3, 9, 54]], ['x', 'x^2', 'y']);
 *                 let y = equationFunc([1,1]);  // returns 10
 *                 console.log(equationStr);  // return y = 3 + 2 x + 5 x^2
 */
function linearRegression(x, labels, decimalPlaces = 12) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  let mr = new MultipleRegression(x, labels, decimalPlaces);
  return mr.ordinaryLeastSquares(x);
}

export default linearRegression;
