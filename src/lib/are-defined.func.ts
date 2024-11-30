// Function.
import { areDeterminer } from './are-determiner.func';
import { isDefined } from '@typescript-package/is';
/**
 * @description Checks whether the values are defined by using `every()`, `forEach()` and `some()` methods of the returned object.
 * @template {object} CommonPayload
 * @param {...any[]} values A rest parameter of `any` type to check whether its elements are defined.
 * @returns {{ every: <Payload extends CommonPayload>(callback?: ResultCallback<any, Payload>, payload?: Payload) => boolean; forEach: <Payload extends CommonPayload>(forEachCallback: ForEachCallback<...>, payload?: Payload) => void; some: <Payload extends CommonPayload>(callback?...}
 * The return value is an `object` of `every()`, `some()` and `forEach()` as a methods of checking supplied `values`.
 */
export const areDefined = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isDefined, ...values);
