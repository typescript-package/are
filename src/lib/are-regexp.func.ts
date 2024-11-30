// Function.
import { areDeterminer } from './are-determiner.func';
import { isRegExp } from '@typescript-package/is';
/**
 * @description Checks whether the values are regular expressions of `RegExp` by using `every()`, `forEach()` and `some()` methods of the returned
 * object.
 * @template {object} CommonPayload
 * @param {...any[]} values A rest parameter of `any` type to check its elements against the regular expression of `RegExp`.
 * @returns {*} The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied `values`.
 */
export const areRegExp = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isRegExp, ...values);
