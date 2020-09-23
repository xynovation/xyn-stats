/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import percentile from './percentile';

/**
 * Calculates the median of a list of numbers.
 *
 * @param {Array<number>}
 *            x - The observations to calculate the median of
 * @return {number} The mean or average
 * @throws {Error} if the the length of x is less than one
 * @example median([1, 2, 3, 4]); // is 2.5
 */
function median(x) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  return percentile(x, 0.5);
}

export default median;
