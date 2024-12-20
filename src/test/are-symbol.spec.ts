// Function to test.
import { areSymbol } from '../lib/are-symbol.func';
// Testing.
import {
  Testing,
  TestingToBeMatchers,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.are.symbol.describe,
  tests.are.symbol.it
);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(areSymbol.name, () => {
  const arr = [Symbol(1), 2, Symbol(3), 4];
  testing
    // Defined.
    .it('is DEFINED', () => expect(areSymbol).toBeDefined())
    .it(`every()`, () => {
      areSymbol(...arr).every(
        (result, value, payload) => {
          expect(value).toEqual(arr);
          toBe
            .false(result)
            .array(value)
            .undefined(payload);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areSymbol(...arr).forEach(
        (result, value, index, array, payload) => {
          expect(value).toEqual(array[index]);
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areSymbol(...arr).some(
        (result, value, payload) => {
          expect(result).toBeTrue();
          expect(value).toEqual(arr);
          toBe
            .true(result)
            .array(value)
            .undefined(payload);
          return result;
        }
      );
    });
});
