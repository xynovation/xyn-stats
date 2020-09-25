/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from '../utils/isEmpty';

/**
 * Calculates the cosine similarity or angle between two vectors.
 * The closer to 1 the value is the more similar the vectors are.
 *
 * @param {Array<number>} x one or more observations (cannot be all zeros)
 * @param {Array<number>} y one or more observations (cannot be all zeros)
 * @returns {number} similarity measure between -1 and 1
 *                   -1 means vectors are in opposite directions
 *                   1 means vectors are in same direction
 * @throws {Error} if the the length of x is less than one
 * @example cosineSimilarity([1, 2, 3], [2, 4, 6]); // is 1
 */
function cosineSimilarity(x, y) {
  if (isEmpty(x)) {
    throw new Error(`x must have at least 1 observation, was [${x}]`);
  }

  if (isEmpty(y)) {
    throw new Error(`y must have at least 1 observation, was [${y}]`);
  }

  if (x.length !== y.length) {
    throw new Error(`x and y must have the same length, were ${x.length} and ${y.length}`);
  }

  let sumXY = 0;
  let sumXSquared = 0;
  let sumYSquared = 0;

  for (let i = 0; i < x.length; ++i) {
    sumXY = sumXY + x[i] * y[i];
    sumXSquared = sumXSquared + x[i] * x[i];
    sumYSquared = sumYSquared + y[i] * y[i];
  }

  return sumXY / (Math.sqrt(sumXSquared) * Math.sqrt(sumYSquared));
}

export default cosineSimilarity;
