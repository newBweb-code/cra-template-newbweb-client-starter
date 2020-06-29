/**
 * Pipe functions from left to right
 * i.e. (f1, f2, f3) => 1 => f3(f2(f1(1)));
 *
 * @param {object} funcs - Functions to pipe.
 *
 * @returns {function} Piped function
 */
export function pipe(...funcs) {
  switch (funcs.length) {
    case 0:
      // Return a function that returns 1st param
      return (param) => param;
    case 1:
      // Return passed function
      return funcs[0];
    default:
      // Return composed function
      return funcs.reduce(
        (acc, cur) => (...params) => cur(acc(...params)),
      );
  }
}

/**
 * Compose function from right to left.
 * i.e. (f1, f2, f3) => 1 => f1(f2(f3(1)));
 *
 * @param {object} funcs - Functions to compose.
 *
 * @returns {function} Composed function
 */
export function compose(...funcs) {
  return pipe(...funcs.reverse());
}
