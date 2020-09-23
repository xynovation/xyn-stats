/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import variance from './variance';

/**
 * Calculates the standard deviation of a sample of the population.
 * This is always a positive number.
 *
 * @param {Array<number>} x input array of population sample
 * @returns {number} the sample standard deviation
 * @throws {Error} if the the length of x is less than one
 * @example standardDeviation([1, 2, 4]); // is 1.5275252316519465
 */
function standardDeviation(x) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  let theStandardDeviation = 0.0;
  let theVariance = 0.0;

  theVariance = variance(x);
  theStandardDeviation = Math.sqrt(theVariance);

  return theStandardDeviation;
}

export default standardDeviation;
