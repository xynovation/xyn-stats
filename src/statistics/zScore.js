/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Calculates the z score which indicates how many standard deviations the
 * value is from the mean. Z scores tend to range between -3.0 and 3.0 for
 * normally distributed data.
 *
 * @param {number} x the test value
 * @param {number} mean the mean of the observations the value came from
 * @param {number} standardDeviation the standard deviation of the observations
 *                                   the value came from, must be > 0
 * @returns {number} the number of standard deviations x is from the mean
 * @example zScore(3, 2, 2.5); // is .4
 */
function zScore(x, mean, standardDeviation) {
  if (standardDeviation <= 0) {
    throw new Error(`standardDeviation must be > 0, was ${standardDeviation}`);
  }
  return (x - mean) / standardDeviation;
}

export default zScore;
