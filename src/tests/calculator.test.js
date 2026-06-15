const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

describe('Calculator - extended operations (from image examples)', () => {
  test('5 % 2 = 1 (modulo)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('2 ^ 3 = 8 (power)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('sqrt(16) = 4 (square root)', () => {
    expect(squareRoot(16)).toBe(4);
  });
});

describe('Calculator - edge cases', () => {
  test('division by zero throws Error', () => {
    expect(() => divide(1, 0)).toThrow('Division by zero');
  });

  test('modulo by zero throws Error', () => {
    expect(() => modulo(1, 0)).toThrow('Division by zero');
  });

  test('square root of negative number throws Error', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of negative number');
  });

  test('invalid numeric inputs throw TypeError', () => {
    expect(() => add('foo', 2)).toThrow(TypeError);
    expect(() => subtract(1, 'bar')).toThrow(TypeError);
    expect(() => multiply('x', 'y')).toThrow(TypeError);
    expect(() => divide('baz', 1)).toThrow(TypeError);
    expect(() => modulo('a', 1)).toThrow(TypeError);
    expect(() => power(2, 'b')).toThrow(TypeError);
    expect(() => squareRoot('c')).toThrow(TypeError);
  });

  test('string numeric inputs are accepted and coerced', () => {
    expect(add('2', '3')).toBe(5);
    expect(divide('20', '5')).toBe(4);
    expect(modulo('5', '2')).toBe(1);
    expect(power('2', '3')).toBe(8);
    expect(squareRoot('16')).toBe(4);
  });

  test('floating point division result', () => {
    expect(divide(1, 2)).toBeCloseTo(0.5);
  });

  test('power with negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });
});
