/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';

/**
 * Calculates the percentile in a subset of a list of values.
 *
 * This is the value such that it is greater than X percent, the percentile,
 * of the values in the list.
 *
 * Percentile interpolates to determine the value at percentile if it is
 * not an exact value in the list. This function returns the same result
 * as Excel's percentile.inc function and R's quantile function.
 *
 * @param {Array<number>}
 *            x - observations overwhich to calculate the percentile
 * @param {number} thePercentile
 *            the percentile wanted .25 = 25th percentile, .75 = 75th
 *            percentile
 * @return {number} the percentile value, the value which is greater than thePercentile %
 *                  of the values in the list
 * @throws {Error} if the the length of x is less than one or
 *                 percentile < 0 or percentile > 1
 * @example percentile([1, 2, 3, 4, 5], 0.25) // is 2
 */
function percentile(x, thePercentile) {
  let sortedObs = null;

  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  if (thePercentile < 0.0 || thePercentile > 1.0) {
    throw new Error(`thePercentile must be in the range [0 to 1], was ${thePercentile}`);
  }

  sortedObs = [...x]; // copy the array so original values aren't rearranged
  sortedObs.sort((a, b) => a - b);

  return percentileFromSortedObs(sortedObs, thePercentile);
}

function percentileFromSortedObs(sortedObs, thePercentile) {
  let percentileScore = 0.0;
  let rank = 0.0;
  let rankFraction = 0.0;
  let rankIndex = 0;

  rank = thePercentile * (sortedObs.length - 1);
  rankIndex = Math.trunc(rank);

  if (rankIndex + 1 === sortedObs.length) {
    percentileScore = sortedObs[rankIndex];
  } else {
    rankFraction = rank - rankIndex;
    percentileScore = sortedObs[rankIndex] + rankFraction * (sortedObs[rankIndex + 1] - sortedObs[rankIndex]);
  }

  return percentileScore;
}

export default percentile;
