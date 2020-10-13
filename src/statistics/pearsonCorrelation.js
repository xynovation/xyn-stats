/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import roundTo from '../math/roundTo';
import isEmpty from '../utils/isEmpty';

/**
 * Determines the strength and direction of a linear relationship between
 * two variables.
 *
 *  1 indicates a strong positive relationship - one goes up, the other goes up
 * -1 indicates a strong negative relationship - one goes down, the other goes down
 *  0 indicates no relationship
 *
 * @param {Array<number>} x one or more observations
 * @param {Array<number>} y one or more observations
 * @returns {number} correlation coefficient
 * @throws {Error} if x or y do not have values or are not the same length
 * @example pearsonCorrelation([1, 2, 3], [4, 5, 6]);  // is 1
 */
function pearsonCorrelation(x, y) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  if (isEmpty(y)) {
    throw new Error(`y must have at least 1 observation, was [${y}]`);
  }

  if (x.length !== y.length) {
    throw new Error(`x and y must have the same length, were ${x.length} and ${y.length}`);
  }

  if (x.length === 1 && y.length === 1) {
    throw new Error(`x and y must have more than one value`);
  }

  let correlationCoefficient = 0;
  let denominator = 0;
  let n = x.length;
  let numerator = 0;
  let sumX = 0;
  let sumXSquared = 0;
  let sumXY = 0;
  let sumY = 0;
  let sumYSquared = 0;

  for (let i = 0; i < n; i += 1) {
    sumXY = sumXY + x[i] * y[i];
    sumX = sumX + x[i];
    sumY = sumY + y[i];
    sumXSquared = sumXSquared + x[i] * x[i];
    sumYSquared = sumYSquared + y[i] * y[i];
  }

  numerator = n * sumXY - sumX * sumY;
  denominator = Math.sqrt((n * sumXSquared - sumX * sumX) * (n * sumYSquared - sumY * sumY));

  correlationCoefficient = numerator / denominator;

  return roundTo(correlationCoefficient);
}

export default pearsonCorrelation;
