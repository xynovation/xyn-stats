/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Truncates a number to a given number of decimal places.
 *
 * @param {number} x the number to truncate
 * @param {number} decimalPlaces the number of decimal places to keep
 * @return {string} the number truncated to the given number of decimal places
 */
function truncToFixed(x, decimalPlaces) {
  if (decimalPlaces < 0) {
    throw new Error(`decimalPlaces must be >= 0, was: ${decimalPlaces}`);
  }

  var digits = x.toString().split('.');

  if (decimalPlaces === 0) {
    return digits[0];
  }

  if (digits[0] === '0') {
    digits[0] = '';
  } else if (digits[0] === '-0') {
    digits[0] = '-';
  }

  if (digits[1] !== undefined) {
    digits[1] = digits[1].substring(0, decimalPlaces);
    digits[1] = digits[1].padEnd(decimalPlaces, '0');
  } else {
    digits[1] = ''.padStart(decimalPlaces, '0');
  }

  return digits.join('.');
}

export default truncToFixed;
