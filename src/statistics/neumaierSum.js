/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';

/**
 * Calculates the total value of all elements in the array.
 * This algorithm reduces the error when summing floating point values.
 * https://en.wikipedia.org/wiki/Kahan_summation_algorithm
 *
 * @param {Array<number>} input input array
 * @returns {number} total value
 * @throws {Error} if the the length of x is less than one
 */
function neumaierSum(x, beginIndex = 0, endIndex) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  let theSum = 0.0;
  let c = 0.0;
  let t = 0;
  let i = 0;

  if (endIndex === undefined) {
    endIndex = x.length;
  }

  theSum = x[beginIndex];

  for (i = beginIndex + 1; i < endIndex; i += 1) {
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
