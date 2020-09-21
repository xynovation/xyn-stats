/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import lerpPoint from '../math/lerpPoint';

/**
 * The golden-section search is a robust technique for finding an extremum (minimum or maximum)
 * of a unimodal function inside a specified interval. For a strictly unimodal function with an
 * extremum inside the interval, it will find that extremum, while for an interval
 * containing multiple extrema (possibly including the interval boundaries), it will
 * converge to one of them
 *
 * @param {Function} evaluationFunction takes a value and evaluates it and returns
                                        the value of the function at that point
 * @param {number} rangeMin minimum value of the search segment
 * @param {number} rangeMax maximum value of the search segment
 * @param {number} tolerance - once the distance between the beginning and ending of
 * the search interval is less than this value, then stop searching
 * @return {number} value at which the function evalution is a minimum
 *                  
 * @example <caption>Finding minimum of a Parabola</caption>
    function parabola(x) {
      return x * x;
    }

    let { x } = goldenSectionLineSearch(parabola, -1, 1, .000001);
 */
function goldenSectionSearch(evaluationFunction, rangeMin, rangeMax, tolerance) {
  const GOLDEN_RATIO = 2 / (Math.sqrt(5) + 1);
  let xOfMinimum = 0;
  let fOfX1 = 0;
  let fOfX2 = 0;
  let x1 = 0;
  let x2 = 0;
  let xHigh = rangeMax;
  let xLow = rangeMin;

  x1 = xHigh - GOLDEN_RATIO * (xHigh - xLow);
  x2 = xLow + GOLDEN_RATIO * (xHigh - xLow);

  fOfX1 = evaluationFunction(x1);
  fOfX2 = evaluationFunction(x2);

  while (Math.abs(xHigh - xLow) > tolerance) {
    if (fOfX1 >= fOfX2) {
      xLow = x1;
      x1 = x2;
      x2 = xLow + GOLDEN_RATIO * (xHigh - xLow);
      fOfX1 = fOfX2;
      fOfX2 = evaluationFunction(x2);
    } else {
      xHigh = x2;
      x2 = x1;
      x1 = xHigh - GOLDEN_RATIO * (xHigh - xLow);
      fOfX2 = fOfX1;
      fOfX1 = evaluationFunction(x1);
    }
  }

  xOfMinimum = (xLow + xHigh) / 2.0;

  return xOfMinimum;
}

/**
 * The golden-section search is a robust technique for finding an extremum (minimum or maximum)
 * of a unimodal function inside a specified interval. For a strictly unimodal function with an
 * extremum inside the interval, it will find that extremum, while for an interval
 * containing multiple extrema (possibly including the interval boundaries), it will
 * converge to one of them
 *
 * @param {Function} evaluationFunction takes an array of floats, the current point, and evaluates it,
 *                                      returns the value of the function at that point
 * @param {Array<number>} startPoint starting point of the search segment
 * @param {Array<number>} endPoint ending point of the search segment
 * @param {boolean} [shouldMaximize = false] - true to maximize,  false to minimize, default is false minimize
 * @param {number} [stoppingDistance = .000001] - once the distance between the beginning and ending of
 * the search interval is less than this value, then stop searching, defaults to .000001
 * @return {Object} point - an array with the location of the minimum or maximum
 *                  value - the value at the point
 *                  evaluationCount - how many times the evaluation function was called
 *                  
 * @example <caption>Finding minimum of a Paraboloid</caption>
    function paraboloid(point) {
      let total = 0;

      for (let i = 0; i < point.length; ++i) {
        total = total + point[i] * point[i];
      }

      return total;
    }

    let { point, value, evaluationCount } = goldenSectionLineSearch(paraboloid, [-10, -10], [1, 1]);
 */
function goldenSectionLineSearch(
  evaluationFunction,
  startPoint,
  endPoint,
  shouldMaximize = false,
  stoppingDistance = 0.000001
) {
  let extremaPoint = null;
  let evaluationCount = 0;
  let theValue = 0;

  if (evaluationFunction === undefined || evaluationFunction === null) {
    throw new Error(`an evaluationFunction is needed, was ${evaluationFunction}`);
  }

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

  if (stoppingDistance <= 0.0) {
    throw new Error('stoppingDistance must be > 0.0');
  }

  /*
    Does a Golden Section search from 0 to 1 then uses that value to interpolate
    the a point on the line between startPoint and endPoint. That point is used
    to determine the evalution value.
    */
  const percentFromStartPoint = goldenSectionSearch(
    (pctDistanceFromStartPoint) => {
      let actualPoint = lerpPoint(startPoint, endPoint, pctDistanceFromStartPoint);
      let testValue = evaluationFunction(actualPoint);

      if (shouldMaximize) {
        testValue = -testValue;
      }

      evaluationCount += 1;

      return testValue;
    },
    0.0,
    1.0,
    stoppingDistance
  );

  extremaPoint = lerpPoint(startPoint, endPoint, percentFromStartPoint);
  theValue = evaluationFunction(extremaPoint);
  evaluationCount += 1;

  return { point: extremaPoint, value: theValue, evaluationCount: evaluationCount };
}

export default goldenSectionLineSearch;
