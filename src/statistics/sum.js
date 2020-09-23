/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import neumaierSum from './neumaierSum';

/**
 * Calculates the total value of all elements in the array from
 * beginIndex to (endIndex - 1).
 * This is a wrapper around the specific summation algorithm
 * you want to use.
 *
 * @param {Array<number>} x input array to sum
 * @param {number} [beginIndex = 0] starting index in the array, defautls to 0
 * @param {number} [endIndex] ending index in the array, defaults to array length
 * @returns {number} total value
 * @throws {Error} if the the length of x is less than one
 * @example sum([1, 2, 3, 4, 5], 1, 3);  // is 5
 */
function sum(x, beginIndex = 0, endIndex) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  if (endIndex === undefined) {
    endIndex = x.length;
  }

  if (beginIndex < 0 || beginIndex > endIndex) {
    throw new Error(`beginIndex must be >= 0 and <= (x length - 1), was ${beginIndex}`);
  }

  return neumaierSum(x, beginIndex, endIndex);
}

export default sum;
