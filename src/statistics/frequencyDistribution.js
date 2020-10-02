/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import maximum from './maximum';
import minimum from './minimum';

/**
 * @typedef {Object} Bin
 * @property {number} min - minimum value of the bin or group
 * @property {number} max - maximum value of the bin or group
 * @property {number} count - number of obervations in bin or group
 * @property {number} percentage - percentage of the observations in the bin or group
 */

/**
 * Counts the number of observations in each bin where [binMin <= value < binMax).
 *
 * @param {Array<number>} x one or more observations
 * @param {number} binCount - the number of bins or groups to divide the data into
 * @returns {Array<Bin>} the frequency data
 * @throws {Error} if the the length of x is less than one or binCount <= 0
 * @example frequencyDistribution([1, 2, 3, 4, 5, 6], 3);
 */
function frequencyDistribution(x, binCount) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  if (binCount <= 0) {
    throw new Error(`binCount must be > 0, was ${binCount}`);
  }

  let binList = [];
  let binIndex = 0;
  let binMax = 0;
  let binMin = 0;
  let binWidth = 0;
  let max = 0;
  let min = 0;

  min = minimum(x);
  max = maximum(x);
  binWidth = (max - min) / binCount;

  binMin = min;

  for (let j = 0; j < binCount; j += 1) {
    binMax = binMin + binWidth;

    binList.push({
      min: binMin,
      max: binMax,
      count: 0,
      percentage: 0,
    });

    binMin = binMax;
  }

  for (let i = 0; i < x.length; i += 1) {
    binIndex = Math.trunc((x[i] - min) / binWidth);

    if (binIndex >= binCount) {
      binIndex = binCount - 1;
    }

    binList[binIndex].count += 1;
  }

  for (let i = 0; i < binList.length; i += 1) {
    binList[i].percentage = binList[i].count / x.length;
  }

  return binList;
}

export default frequencyDistribution;
