/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import percentile from './percentile';

/**
 * Fins the interquartile range which is the range of the middle 50% of the
 * observations when they are in sorted order from smallest to largest.
 * The IQR is a robust way of describing the dispersion of the data. The
 * interquartile range (IQR) is the distance between the 75th percentile and
 * the 25th percentile or the third quartile and the first quartile.
 *
 * @param {Array<number>} x one or more observations
 * @returns {number} the interquartile range, range of middle 50% of observations
 * @throws {Error} if the the length of x is less than one
 * @example interquartileRange([1, 2, 3, 4, 5, 6, -2, -1, 0]); // is 4
 */
function interquartileRange(x) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  return percentile(x, 0.75) - percentile(x, 0.25);
}

export default interquartileRange;
