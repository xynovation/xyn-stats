// This assumes the inputs are coming in as x1, x2, x3...
// The same order that they were passed in in the observation list
// coefficient is array [const, x1, x2, x3]
// since y is the last value when generating the regression equation
// you can pass in the entire array to evaluate with y as the last value
// and it is ignored in performing the calculation
// returns a function which evaluates a value on the line
// the line function returns [x,y] when called with x
function linearFunction(coefficient) {
  return function (x) {
    let answer = coefficient[0];

    for (let i = 1; i < coefficient.length; ++i) {
      answer += x[i - 1] * coefficient[i];
    }

    return answer;
  };
}

export default linearFunction;
