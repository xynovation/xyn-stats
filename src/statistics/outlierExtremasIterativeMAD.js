/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';
import median from './median';
import medianAbsoluteDeviation from './medianAbsoluteDeviation';

/**
 * Uses the Median Absolute Deviation to perform a robust iterative
 * outlier detection procedure and returns the min and max values
 * which are the bounds for outliers. Any values outside of the
 * bounds are considered outliers and can be removed before calculations
 * are made so values will not be skewed.
 *
 * The Median Absolute Deviation is a very robust dispersion measure
 * in presence of outliers and this routine uses the median plus or minus 2.5
 * times the MAD for outlier detection.
 *
 * If you choose to use the iterative version it will iterate a maximum
 * number of times or until the min and max outlier values do not change,
 * whichever occurs first.
 *
 * @param {Array<number>}
 *            x - The observations to calculate the outlier range from
 * @param {number} [maxIterations = 3] max number of times to remove
 *                                     outliers and determine new outlier range
 * @param {number} [maxDeviation = 2.5] outlier is any value more than this many
 *                                      deviations from the median
 * @return {number, number} min and max outlier values. Any values < min or > max
 *                          are considered outliers
 * @throws {Error} if the the length of x is less than one
 * @example let { min, max } = outlierExtremas([1, 2, 3, 9], 3);  // is -1.7, 5.7
 */
function outlierExtremasIterativeMAD(x, maxIterations = 3, maxDeviation = 2.5) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  if (maxIterations <= 0) {
    throw new Error(`maxIteations must be >= 1, was ${maxIterations}`);
  }

  let iterationCount = 0;
  let mad = 0;
  let minOutlier = Number.MIN_SAFE_INTEGER;
  let maxOutlier = Number.MAX_SAFE_INTEGER;
  let prevMinOutlier = Number.MIN_SAFE_INTEGER;
  let prevMaxOutlier = Number.MAX_SAFE_INTEGER;
  let shouldContinue = true;
  let theMedian = 0;
  let values = x;

  while (shouldContinue) {
    iterationCount += 1;

    // keep values in the valid range
    values = values.filter((v) => v >= minOutlier && v <= maxOutlier);

    mad = medianAbsoluteDeviation(values);
    theMedian = median(values);

    minOutlier = theMedian - maxDeviation * mad;
    maxOutlier = theMedian + maxDeviation * mad;

    if ((minOutlier === prevMinOutlier && maxOutlier === prevMaxOutlier) || iterationCount >= maxIterations) {
      shouldContinue = false;
    }

    prevMinOutlier = minOutlier;
    prevMaxOutlier = maxOutlier;
  }

  return {
    min: minOutlier,
    max: maxOutlier,
  };
}

export default outlierExtremasIterativeMAD;
