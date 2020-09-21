/**
 * Copyright (c) Xynovation, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function isEmpty(value) {
  if (value === undefined || value === null || value.length === 0) {
    return true;
  }

  return false;
}

export default isEmpty;
