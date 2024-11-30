// Function.
import { areDeterminer } from './are-determiner.func';
import { isNull } from '@typescript-package/is';
/**
 * @description Checks whether the values are `null` by using `every()`, `forEach()` and `some()` methods of the returned object.
 * @template {object} CommonPayload
 * @param {...any[]} values A rest parameter of `any` type to check its elements against `null`.
 * @returns {*} The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied `values`.
 */
export const areNull = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isNull, ...values);
