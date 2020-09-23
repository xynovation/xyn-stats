/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';

/**
 * Finds the minimum or smallest value in a list of values.
 *
 * @param {Array<number>} x
 *            values to search for the maximum in
 * @returns {number} the minimum value
 * @throws {Error} if the the length of x is less than one
 * @example minimum([1, 2, 3]); // is 1
 */
function minimum(x) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  let theMinimum = x[0];

  for (let i = 1; i < x.length; i = i + 1) {
    if (x[i] < theMinimum) {
      theMinimum = x[i];
    }
  }

  return theMinimum;
}

export default minimum;
