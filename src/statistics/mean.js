/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import sum from './sum';

/**
 * Calculates the mean of a list of numbers.
 *
 * @param {Array<number>} x one or more observations
 * @returns {number} mean
 * @throws {Error} if the the length of x is less than one
 * @example mean([1, 2, 3]); // is 2
 */
function mean(x) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  return sum(x) / x.length;
}

export default mean;
