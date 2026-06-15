#!/usr/bin/env node
/**
 * CLI for the calculator module
 * Supported operations (aliases accepted):
 *  - add    | +      -> addition
 *  - sub    | -      -> subtraction
 *  - mul    | * | x  -> multiplication
 *  - div    | /      -> division
 *
 * Usage:
 *   node src/calculator-cli.js <operation> <a> <b>
 * Examples:
 *   node src/calculator-cli.js add 2 3
 *   node src/calculator-cli.js + 4 5
 */

const path = require('path');
const { add, subtract, multiply, divide } = require('./calculator');

function printUsage() {
  console.error('Usage: node src/calculator-cli.js <operation> <a> <b>');
  console.error('Operations: add|+  sub|-  mul|*|x  div|/');
}

function main(argv) {
  const [, , op, a, b] = argv;
  if (!op || a === undefined || b === undefined) {
    printUsage();
    process.exit(1);
  }

  const map = {
    add: add,
    '+': add,
    sub: subtract,
    '-': subtract,
    mul: multiply,
    '*': multiply,
    x: multiply,
    X: multiply,
    div: divide,
    '/': divide,
  };

  const fn = map[op];
  if (!fn) {
    console.error(`Unknown operation: ${op}`);
    printUsage();
    process.exit(1);
  }

  try {
    const result = fn(a, b);
    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

if (require.main === module) main(process.argv);
