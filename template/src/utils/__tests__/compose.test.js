import { pipe, compose } from '../compose';

describe('pipe()', () => {
  it('should run function with first param if non is specified.', () => {
    // When
    const pipedFunc = pipe();
    // Then
    expect(pipedFunc(3, 6)).toEqual(3);
  });

  it('should run function if only one is provided.', () => {
    // When
    const pipedFunc = pipe(
      (v1, v2) => v1 + v2,
    );
    // Then
    expect(pipedFunc(3, 6)).toEqual(9);
  });

  it('should pipe functions from left to right.', () => {
    // When
    const pipedFunc = pipe(
      (v1, v2) => v1 + v2,
      (v) => v * 3,
    );
    // Then
    expect(pipedFunc(3, 6)).toEqual(27);
  });
});

describe('compose()', () => {
  it('should run function with first param if non is specified.', () => {
    // When
    const composedFunc = compose();
    // Then
    expect(composedFunc(3, 6)).toEqual(3);
  });

  it('should run function if only one is provided.', () => {
    // When
    const composedFunc = compose(
      (v1, v2) => v1 + v2,
    );
    // Then
    expect(composedFunc(3, 6)).toEqual(9);
  });

  it('should compose functions from left to right.', () => {
    // When
    const composedFunc = compose(
      (v) => v + 3,
      (v1, v2) => v1 * v2,
    );
    // Then
    expect(composedFunc(3, 6)).toEqual(21);
  });
});
