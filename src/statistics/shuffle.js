/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Shuffles, in place, an array of values.
 *
 * This algorithm is the Fisher–Yates shuffle algorithm. This is the correct
 * way to shuffle array items because it generates all possible permutations
 * with equal probability.
 *
 * @param {Array<number>} x array to shuffle
 * @return {Array<number>} the passed in array in a shuffled state
 * @example let x = shuffle([1, 2, 3]);
 */
function shuffle(x) {
  if (x === undefined || x === null || x.length === 0 || x.length === 1) {
    return x;
  }

  let rndIndex = 0;

  for (let i = x.length - 1; i > 0; i -= 1) {
    rndIndex = Math.trunc(Math.random() * (i + 1));
    [x[i], x[rndIndex]] = [x[rndIndex], x[i]];
  }

  return x;
}

export default shuffle;
