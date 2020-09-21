/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Performs a linear interpolation or extrapolation from a starting value to
 * and ending value by a percentage amount.
 *
 * @param {number} startValue Start value, returned when pct = 0.
 * @param {number} endValue End value, returned when pct = 1.
 * @param {number} pct Percentage amount to move by from startValue to endValue.
 *                     Value used to interpolate between a and b,
 *                     ranges from [0 to 1] to interpolate between values,
 *                     < 0 to extrapolate before startValue, > 1 to extrapolate
 *                     after endValue
 * @example lerp(1, 2, .5); // is 1.5
 */
function lerp(startValue, endValue, pct) {
  // https://en.wikipedia.org/wiki/Linear_interpolation
  //   return (1.0 - pct) * startValue + pct * endValue;

  // Code from http://tulrich.com/geekstuff/lerp.html
  if (pct < 0.5) {
    return startValue + (endValue - startValue) * pct;
  } else {
    return endValue - (endValue - startValue) * (1 - pct);
  }
}

export default lerp;
