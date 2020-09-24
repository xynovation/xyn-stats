/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import median from './median';

/**
 * Calculates the median absolute deviation of a subset of numbers; that is,
 * starting with the residuals (deviations) from the data's median, the MAD
 * is the median of their absolute values.
 *
 * This is a robust estimate resistant to 50% contamination by outliers. The
 * MAD value can approximate the normal standard deviation by multiplying by
 * 1.4826. (Standard Deviation = 1.4826 * MAD). This is the scaled version.
 * For large samples the MAD provides a good estimate of the standard deviation.
 *
 * @param {Array<number>} x
 *            values to calculate the median absolute deviation of
 * @param {number} [scalingFactor = 1.4826]
 *            adjusts MAD to match a distribution, the default is
 *            1.4826 which adjusts to the normal distribution
 * @returns{number} the median absolute deviation of the values
 * @example medianAbsoluteDeviation([1, 1, 2, 2, 4, 6, 9])  // is 1
 */
function medianAbsoluteDeviation(x, scalingFactor = 1.4826) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  let absoluteDeviation = [];
  let theMedian = median(x);

  for (let i = 0; i < x.length; i += 1) {
    absoluteDeviation.push(Math.abs(x[i] - theMedian));
  }

  return median(absoluteDeviation) * scalingFactor;
}

export default medianAbsoluteDeviation;
