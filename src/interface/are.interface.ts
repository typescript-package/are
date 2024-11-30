// Function.
import {
  areBigInt,
  areBoolean,
  areDate,
  areDefined,
  areFalse,
  areNull,
  areNumber,
  areRegExp,
  areString,
  areSymbol,
  areTrue,
  areUndefined,
} from '../lib';
/**
 * Represents the shape of an object that contains  `are` prefixed functions.
 */
export interface Are {
  /**
   * Checks if the values are a `bigint` type by using `every()`, `forEach()` and `some()` methods of the returned object.
   */
  bigint: typeof areBigInt;

  /**
   * Checks if the values are a `boolean` type or an instance of `Boolean` by using `every()`, `forEach()` and `some()` methods of the
   * returned object.
   */
  boolean: typeof areBoolean;

  /**
   * Checks if the values are `Date` by using `every()`, `forEach()` and `some()` methods of the returned object.
   */
  date: typeof areDate;

  /**
   * Checks if the values are defined by using `every()`, `forEach()` and `some()` methods of the returned object.
   */
  defined: typeof areDefined;

  /**
   * Checks if the values are a `boolean` type or an instance of `Boolean` equal to `false` by using `every()`, `forEach()` and `some()`
   * methods of the returned object.
   */
  false: typeof areFalse;

  /**
   * Checks if the values are `null` by using `every()`, `forEach()` and `some()` methods of the returned object.
   */
  null: typeof areNull;

  /**
   * Checks if the values are a `number` type or an instance of `Number` by using `every()`, `forEach()` and `some()` methods of the
   * returned object.
   */
  number: typeof areNumber;

  /**
   * Checks if the values are regular expressions of `RegExp` by using `every()`, `forEach()` and `some()` methods of the returned object.
   */
  regexp: typeof areRegExp;

  /**
   * Checks if the values are a `string` type or an instance of `String` by using `every()`, `forEach()` and `some()` methods of the
   * returned object.
   */
  string: typeof areString;

  /**
   * Checks if the values are a `symbol` type by using `every()`, `forEach()` and `some()` methods of the returned object.
   */
  symbol: typeof areSymbol;

  /**
   * Checks if the values are a `boolean` type or an instance of `Boolean` equal to `true` by using `every()`, `forEach()` and `some()`
   * methods of the returned object.
   */
  true: typeof areTrue;

  /**
   * Checks if the values are `undefined` by using `every()`, `forEach()` and `some()` methods of the returned object.
   */
  undefined: typeof areUndefined;
}
