/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import median from './median';
import sum from './sum';

/**
 * Calculates the mean or average after removing a small percentage of the
 * smallest and largest values. This helps to reduce the effect of outliers
 * on the mean.
 *
 * The mean is calculated by excluding a percentage of data points from the
 * left and right ends of the data set after it has been sorted from
 * smallest to largest. The amount excluded on each end is given by
 * trimPercent.
 *
 * The number of excluded data points from each end is rounded down to the
 * nearest integer after multiplying the numbver of values by the percentage.
 *
 * If the trimPercent is 50% then the median is returned.
 *
 * For example, if percent = .25 and there are 10 values in the
 * list then 2 (.25 * 10 = 2.5 rounded down to 2) values are removed from the
 * left side and 2 values are removed from the right side.
 *
 * Results are the same as R
 *
 * @param {Array<number>} x
 *            values to calculate the trimmed mean of
 * @param{number} trimPercent
 *            the percentage of data points to exclude from the left and right sides
 *            of the sorted array, rounds down to nearest integer
 * @returns {number} the mean value of the trimmed values
 * @throws {Error} if the the length of x is less than one
 * @example trimmedMean([1, 2, 3, 45, 55, 56, 57, 58, 403, 900], 0.25);  // is 45.66667
 */
function trimmedMean(x, trimPercent) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  var observationCount = 0;
  var sortedObs = null;
  var total = 0;
  let beginIndex = 0;
  let endIndex = 0;

  if (trimPercent >= 0.5) {
    return median(x);
  }

  sortedObs = x.slice();
  sortedObs.sort((a, b) => a - b);

  beginIndex = Math.trunc(x.length * trimPercent);
  endIndex = x.length - beginIndex;
  observationCount = endIndex - beginIndex;

  total = sum(sortedObs, beginIndex, endIndex);

  return total / observationCount;
}

export default trimmedMean;
