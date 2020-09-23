/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import mean from './mean';

/**
 * Calculates the variance of a sample of the population.
 * Divides sum of squared differences by N-1 instead of N
 *
 * @param {Array<number>} x input array of population sample
 * @throws {Error} if the the length of x is less than one
 * @returns {number} the sample variance
 * @example variance([1, 2, 4]); // is 2.3333333333
 */
function variance(x) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  let delta = 0.0;
  let sumSquaredDifferences = 0.0;
  let theMean = 0.0;

  theMean = mean(x);

  for (let i = 0; i < x.length; i += 1) {
    delta = x[i] - theMean;
    sumSquaredDifferences = sumSquaredDifferences + delta * delta;
  }

  return sumSquaredDifferences / (x.length - 1.0);
}

export default variance;
