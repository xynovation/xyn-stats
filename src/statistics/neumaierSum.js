/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';

/**
 * Calculates the total value of all elements in the array from
 * beginIndex to (endIndex - 1).
 * This algorithm reduces the error when summing floating point values.
 * https://en.wikipedia.org/wiki/Kahan_summation_algorithm
 * The summed values include x[beginIndex] to x[endIndex - 1].
 *
 * @param {Array<number>} x input array to sum
 * @param {number} [beginIndex = 0] starting index in the array, defautls to 0
 * @param {number} [endIndex] ending index in the array, defaults to array length
 * @returns {number} total value
 * @throws {Error} if the the length of x is less than one
 * @example neumaierSum([1, 2, 3, 4, 5], 1, 3);  // is 5
 */
function neumaierSum(x, beginIndex = 0, endIndex) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  if (endIndex === undefined) {
    endIndex = x.length;
  }

  if (beginIndex < 0 || beginIndex > endIndex) {
    throw new Error(`beginIndex must be >= 0 and <= (x length - 1), was ${beginIndex}`);
  }

  let theSum = 0.0;
  let c = 0.0;
  let t = 0;

  theSum = x[beginIndex];

  for (let i = beginIndex + 1; i < endIndex; i += 1) {
    t = theSum + x[i];
    if (Math.abs(theSum) >= Math.abs(x[i])) {
      c += theSum - t + x[i];
    } else {
      c += x[i] - t + theSum;
    }

    theSum = t;
  }

  return theSum + c;
}

export default neumaierSum;
