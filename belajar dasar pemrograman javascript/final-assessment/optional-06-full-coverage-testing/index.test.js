import sum from './index.js';
import test from 'node:test';
import assert from 'node:assert';

// testing apakah code menambahkan dengan benar
test('should sum correctly', () => {
  // arrange
  const op1 = 3;
  const op2 = 2;

  // action
  const equalValue = sum(op1, op2);
  const expectedValue = 5;

  // assert
  assert.equal(expectedValue, equalValue);
});

// testing jika operator 1 bukanlah integer
test('should return 0 when op1 is string', () => {
  // arrange
  const op1 = '2';
  const op2 = 2;

  // action
  const equalValue = sum(op1, op2);
  const expectedValue = 0;

  // assert
  assert.equal(expectedValue, equalValue);
});
test('should return 0 when op1 is undifined', () => {
  // arrange
  const op1 = undefined;
  const op2 = 2;

  // action
  const equalValue = sum(op1, op2);
  const expectedValue = 0;

  // assert
  assert.equal(expectedValue, equalValue);
});
test('should return 0 when op1 is boolean', () => {
  // arrange
  const op1 = true;
  const op2 = 2;

  // action
  const equalValue = sum(op1, op2);
  const expectedValue = 0;

  // assert
  assert.equal(expectedValue, equalValue);
});
test('should return 0 when op1 is array', () => {
  // arrange
  const op1 = [0, 1];
  const op2 = 2;

  // action
  const equalValue = sum(op1, op2);
  const expectedValue = 0;

  // assert
  assert.equal(expectedValue, equalValue);
});

// testing jika operator 2 bukan integer
test('should return 0 when op2 is string', () => {
  // arrange
  const op1 = 3;
  const op2 = '2';

  // action
  const equalValue = sum(op1, op2);
  const expectedValue = 0;

  // assert
  assert.equal(expectedValue, equalValue);
});

test('should return 0 when op2 is undifined', () => {
  // arrange
  const op1 = 2;
  const op2 = undefined;

  // action
  const equalValue = sum(op1, op2);
  const expectedValue = 0;

  // assert
  assert.equal(expectedValue, equalValue);
});
test('should return 0 when op2 is boolean', () => {
  // arrange
  const op1 = 2;
  const op2 = false;

  // action
  const equalValue = sum(op1, op2);
  const expectedValue = 0;

  // assert
  assert.equal(expectedValue, equalValue);
});
test('should return 0 when op1 is array', () => {
  // arrange
  const op1 = 2;
  const op2 = [0, 2];

  // action
  const equalValue = sum(op1, op2);
  const expectedValue = 0;

  // assert
  assert.equal(expectedValue, equalValue);
});

// testing jika operator 1 kurang dari 0
test('should return 0 when op1 less than zero', () => {
  // arrange
  const op1 = -1;
  const op2 = 3;

  // action
  const equalValue = sum(op1, op2);
  const expectedValue = 0;

  // assert
  assert.equal(expectedValue, equalValue);
});

// testing jika operator 2 kurang dari 0
test('should return 0 when op2 les than zero', () => {
  // arrange
  const op1 = 3;
  const op2 = -2;

  // action
  const equalValue = sum(op1, op2);
  const expectedValue = 0;

  // assert
  assert.equal(expectedValue, equalValue);
});
