/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import neumaierSum from './neumaierSum';

/**
 * Calculates the total value of all elements in the array.
 * This is a wrapper around the specific summation algorithm
 * you want to use.
 *
 * @param {Array<number>} x observations to sum
 * @returns {number} total value
 * @throws {Error} if the the length of x is less than one
 */
function sum(x, beginIndex, endIndex) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  return neumaierSum(x, beginIndex, endIndex);
}

export default sum;
