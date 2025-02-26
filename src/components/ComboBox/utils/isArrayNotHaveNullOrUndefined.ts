/**
 * Проверяет, что массив не содержит значений null или undefined
 *
 * @template T - Тип элементов массива
 * @param {(T | null | undefined)[]} array - Проверяемый массив
 * @returns {boolean} true - если массив не содержит null или undefined
 *
 * @example
 * const arr1 = [1, 2, 3];
 * isArrayNotHaveNullOrUndefined(arr1); // true
 *
 * const arr2 = [1, null, 3];
 * isArrayNotHaveNullOrUndefined(arr2); // false
 */
const isArrayNotHaveNullOrUndefined = <T>(array: (T | null | undefined)[]): array is T[] => {
  return array.every(item => item !== null && item !== undefined);
};

export default isArrayNotHaveNullOrUndefined;
