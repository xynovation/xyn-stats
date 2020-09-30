/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import truncToFixed from './truncToFixed';

/**
 * Returns a number that is smaller than the value by 1 / 10^places
 *
 * The algorithm used is as follows:
 *     Truncate the number to the required number of decimal places
 *     Subtract 1 / 10^decimalPlaces from the truncated value
 *     Convert value to a fixed decimal rounded up to handle floating point issues
 *     Return parsed number
 *
 * @param {number} x - the value to truncate and decrease
 * @param {number} decimalPlaces - number of decimal places to truncate the number to, >= 0
 * @return {number} the smaller number truncated to the given decimal points
 * @example smallerThan(1.2345, 2); // is 1.22
 */
function smallerThan(x, decimalPlaces = 2) {
  if (decimalPlaces < 0) {
    throw new Error(`decimalPlaces must be >= 0, was: ${decimalPlaces}`);
  }

  let truncatedNumberStr = truncToFixed(x, decimalPlaces);
  let smallerValue = parseFloat(truncatedNumberStr) - 1 / Math.pow(10, decimalPlaces);
  // found that numbers that can't be represented exactly or have
  // rounding issues typically end up like ...0000000001 or ...9999999999
  // use toFixed to round up or down to appropriate number
  smallerValue = parseFloat(smallerValue.toFixed(decimalPlaces));

  return smallerValue;
}

export default smallerThan;
