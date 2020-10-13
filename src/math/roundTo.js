/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Rounds a number to a given number of decimal places. The default is
 * to rouunt to 12 which eliminates rounding issues we've discovered
 * in testing.
 *
 * Rounds by default to 12 places which works well with the rounding
 * errors we've discovered in testing. A "1" is tacked on to the very
 * end which fixes rounding bugs with "toFixed".
 *
 * @param {number} value the value to round
 * @return {number} the rounded value
 * @example roundTo(123.13999999999999957); // is 123.14
 *          roundTo(8.555, 2);  // is 8.56  toFixed(2) gives 8.55
 */

function roundTo(value, decimalPlaces = 12) {
  return parseFloat(parseFloat(value.toFixed(decimalPlaces + 1) + '1').toFixed(decimalPlaces));
}

export default roundTo;
