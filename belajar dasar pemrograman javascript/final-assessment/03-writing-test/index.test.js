import { sum } from './index.js';
import test from 'node:test';
import assert from 'node:assert';

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

// saya asalnya ingin menambahkan pengujian err untuk type data dari sum
// tapi setelah melihat codenya sepertinya test di atas sudah cukup
