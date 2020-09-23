/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import maximum from './maximum';
import minimum from './minimum';

/**
 * Finds the difference between the largest and smallest values in the array.
 *
 * @param {Array<number>} x
 *            values to find the range for
 * @returns {number} the range
 * @throws {Error} if the the length of x is less than one
 */
function range(x) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  return maximum(x) - minimum(x);
}

export default range;
