/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';

/**
 * Finds the maximum or largest value in a list of values.
 *
 * @param {Array<number>} x
 *            values to search for the maximum in
 * @returns {number} the maximum value
 * @example maximum([1, 2, 3]); // is 3
 */
function maximum(x) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  var theMaximum = 0.0;
  var i = 0;

  theMaximum = x[0];

  for (i = 1; i < x.length; i = i + 1) {
    if (x[i] > theMaximum) {
      theMaximum = x[i];
    }
  }

  return theMaximum;
}

export default maximum;
