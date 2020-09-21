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
 */
function neumaierSum(x) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  let theSum = 0.0;
  let c = 0.0;
  let t = 0;
  let i = 0;

  theSum = x[0];

  for (i = 1; i < x.length; i += 1) {
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
