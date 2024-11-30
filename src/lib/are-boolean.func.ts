// Function.
import { areDeterminer } from './are-determiner.func';
import { isBoolean } from '@typescript-package/is';
/**
 * @description Checks whether the values are a `boolean` type or an instance of `Boolean` by using `every()`, `forEach()` and `some()` methods of the
 * returned object.
 * @template {object} CommonPayload
 * @param {...any[]} values A rest parameter of `any` type to check its elements against a `boolean` type or an instance of `Boolean`.
 * @returns {*} The return value is an `object` of `every()`, `some()` and `forEach()` as methods of checking supplied `values`.
 */
export const areBoolean = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isBoolean, ...values);
