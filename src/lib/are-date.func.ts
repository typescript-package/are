// Function.
import { areDeterminer } from './are-determiner.func';
import { isDate } from '@typescript-package/is';
/**
 * @description Checks whether the values are `Date` by using `every()`, `forEach()` and `some()` methods of the returned object.
 * @template {object} CommonPayload 
 * @param {...any[]} values A rest parameter of `any` type to check its elements against `Date`.
 * @returns {*} The return value is an `object` of `every()`, `some()` and `forEach()` as methods of checking supplied `values`.
 */
export const areDate = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isDate, ...values);
