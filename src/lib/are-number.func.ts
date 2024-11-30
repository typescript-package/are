// Function.
import { areDeterminer } from './are-determiner.func';
import { isNumber } from '@typescript-package/is';
/**
 * @description Checks whether the values are a `number` type or an instance of `Number` by using `every()`, `forEach()` and `some()` methods of the
 * returned object.
 * @template {object} CommonPayload
 * @param {...any[]} values A rest parameter of `any` type to check its elements against a `number` type or an instance of `Number`.
 * @returns {*} The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied values.
 */
export const areNumber = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isNumber, ...values);
