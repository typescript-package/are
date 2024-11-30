// Function.
import { areDeterminer } from './are-determiner.func';
import { isSymbol } from '@typescript-package/is';
/**
 * @description Checks whether the values are a `symbol` type by using `every()`, `forEach()` and `some()` methods of the returned object.
 * @template {object} CommonPayload
 * @param {...any[]} values A rest parameter of `any` type to check its elements against a `symbol` type.
 * @returns {*} The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied values.
 */
export const areSymbol = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isSymbol, ...values);
