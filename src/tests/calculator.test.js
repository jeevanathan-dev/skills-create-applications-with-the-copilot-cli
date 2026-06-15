const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator - basic operations (from image examples)', () => {
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Calculator - edge cases', () => {
  test('division by zero throws Error', () => {
    expect(() => divide(1, 0)).toThrow('Division by zero');
  });

  test('invalid numeric inputs throw TypeError', () => {
    expect(() => add('foo', 2)).toThrow(TypeError);
    expect(() => subtract(1, 'bar')).toThrow(TypeError);
    expect(() => multiply('x', 'y')).toThrow(TypeError);
    expect(() => divide('baz', 1)).toThrow(TypeError);
  });

  test('string numeric inputs are accepted and coerced', () => {
    expect(add('2', '3')).toBe(5);
    expect(divide('20', '5')).toBe(4);
  });

  test('floating point division result', () => {
    expect(divide(1, 2)).toBeCloseTo(0.5);
  });
});
