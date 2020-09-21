/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import lerp from '../math/lerp';

/**
 * Creates a point between two points. The point is some percentage away from the starting
 * point in a segment defined by a startPoint and an endPoint.
 *
 * @param {Array<number>} startPoint starting point of the segment
 * @param {Array<number>} endPoint ending point of the segment
 * @param {number} percentFromStartPoint percent distance from startPoint to endPoint, [0, 1] range
 * @return {Array<number>} return point located percentFromStartPoint in range
 * @example lerpPoint([1, 1], [2, 2], .25);  // returns [1.25, 1.25]
 */
function lerpPoint(startPoint, endPoint, percentFromStartPoint) {
  if (!(startPoint instanceof Array)) {
    throw new Error(`startPoint must be an array, was ${startPoint}`);
  }

  if (!(endPoint instanceof Array)) {
    throw new Error(`endPoint must be an array, was ${endPoint}`);
  }

  if (startPoint.length !== endPoint.length) {
    throw new Error(
      `startPoint and endPoint must be the same length, were ${startPoint.length} and ${endPoint.length}`
    );
  }

  let point = [];
  let coordinate = 0;

  for (let i = 0; i < startPoint.length; i += 1) {
    coordinate = lerp(startPoint[i], endPoint[i], percentFromStartPoint);
    point.push(coordinate);
  }

  return point;
}

export default lerpPoint;
