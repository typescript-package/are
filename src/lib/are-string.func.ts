// Function.
import { areDeterminer } from './are-determiner.func';
import { isString } from '@typescript-package/is';
/**
 * @description Checks if the values are a `string` type or an instance of `String` by using `every()`, `forEach()` and `some()` methods of the
 * returned object.
 * @template {object} CommonPayload
 * @param {...any[]} values A rest parameter of `any` type to check its elements against a `string` type or an instance of `String`.
 * @returns {*} The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied values.
 */
export const areString = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isString, ...values);
