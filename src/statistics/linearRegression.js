/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import MultipleRegression from './MultipleRegression';
import isEmpty from '../utils/isEmpty';

/**
 * Calculates the regression line or hyperplane through multiple independent variables.
 
 * Each row of data should be in the following form:
 *
 *    x1, x2, x3, y
 *    x1, x2, x3, y
 *    ...
 *
 * where x1, x2, x3 are independent values and y is the dependent value. 
 * 
 * The number of observations should be a minimum of the number of independent variables
 * plus the constant and one more. If you have 3 independent variables you should 
 * have at least 5 observations. A general rule of thumb is to have 10 observations
 * or more for each variable. If you do not have enough observation this function
 * will sill try to give a result back but you can have an infinite number of
 * possible solutions. In this case just 1 is returned.
 * 
 * The calculated coefficients are rounded off to 12 decimal places which helps
 * with rounding issues and usually gives a cleaner looking equation string but 
 * you can specify how many decimal places to round to.
 *
 * @param {Array<number>} x 2D array of observations in the form [[x1, x2, ..., y], [x1, x2, ..., y]
 *                        where y is the predicted value and x1, x2, ... are the input values
 * @param {Array<string>} [labels = ['x1', 'x2'...'y']] the labels to use when generating the
 *                       string version of the linear function. The labels are to be ordered
 *                       ['xLabel1', 'xLabel2,... 'yLabel'].
 *                       If no labels are passed in then 'x1', x2', ... 'y' are used.
 * @param {number} [decimalPlaces = 12] - number of decimal places to round coefficients and r squared.
 *                       R squared  is calcualted using the rounded coefficients.
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
