// Function.
import { areDeterminer } from './are-determiner.func';
import { isTrue } from '@typescript-package/is';
/**
 * @description Checks whether the values are a `boolean` type or an instance of `Boolean` equal to `true` by using `every()`, `forEach()` and `some()`
 * methods of the returned object.
 * @template {object} CommonPayload
 * @param {...any[]} values A rest parameter of `any` type to check its elements against a `boolean` type or an instance of `Boolean` equal to `true`.
 * @returns {*} The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied `values`.
 */
export const areTrue = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isTrue, ...values);
