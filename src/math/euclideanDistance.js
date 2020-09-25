/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Calculates the Euclidean or stright line distance between two points.
 *
 * @param {Array<number>} pointA the first point
 * @param {Array<number>} pointB the second point
 * @return {number} distance between points
 * @example euclideanDistance([1, 1], [2, 2]); // is 1.414
 */
function euclideanDistance(pointA, pointB) {
  let sum = 0;

  if (!(pointA instanceof Array)) {
    throw new Error(`pointA must be an array, was ${pointA}`);
  }

  if (!(pointB instanceof Array)) {
    throw new Error(`pointB must be an array, was ${pointB}`);
  }

  if (pointA.length !== pointB.length) {
    throw new Error(`pointA and pointB must be the same length, were ${pointA.length} and ${pointB.length}`);
  }

  for (let i = 0; i < pointA.length; i += 1) {
    sum = sum + (pointA[i] - pointB[i]) * (pointA[i] - pointB[i]);
  }

  return Math.sqrt(sum);
}

export default euclideanDistance;
