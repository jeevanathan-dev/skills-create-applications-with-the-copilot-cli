/**
 * Simple Calculator
 * Supported operations:
 *  - addition (+)      -> add(a, b)
 *  - subtraction (-)   -> subtract(a, b)
 *  - multiplication (*)-> multiply(a, b)
 *  - division (/)      -> divide(a, b)
 *
 * This module exports four functions that perform the basic arithmetic operations.
 * Each function validates numeric input and throws a TypeError for invalid values.
 * The divide function throws an Error on division by zero.
 */

function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) throw new TypeError(`Invalid number: ${value}`);
  return n;
}

function add(a, b) {
  const x = toNumber(a);
  const y = toNumber(b);
  return x + y;
}

function subtract(a, b) {
  const x = toNumber(a);
  const y = toNumber(b);
  return x - y;
}

function multiply(a, b) {
  const x = toNumber(a);
  const y = toNumber(b);
  return x * y;
}

function divide(a, b) {
  const x = toNumber(a);
  const y = toNumber(b);
  if (y === 0) throw new Error('Division by zero');
  return x / y;
}

function modulo(a, b) {
  const x = toNumber(a);
  const y = toNumber(b);
  if (y === 0) throw new Error('Division by zero');
  return x % y;
}

function power(base, exponent) {
  const b = toNumber(base);
  const e = toNumber(exponent);
  return Math.pow(b, e);
}

function squareRoot(n) {
  const x = toNumber(n);
  if (x < 0) throw new Error('Square root of negative number');
  return Math.sqrt(x);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
