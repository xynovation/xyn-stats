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
 * @example minimum([1, 2, 3]); // is 1
 */
function minimum(x) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  var theMinimum = 0.0;
  var i = 0;

  theMinimum = x[0];

  for (i = 1; i < x.length; i = i + 1) {
    if (x[i] < theMinimum) {
      theMinimum = x[i];
    }
  }

  return theMinimum;
}

export default minimum;
