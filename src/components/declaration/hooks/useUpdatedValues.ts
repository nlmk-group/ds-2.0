import { useEffect, useRef, useState } from 'react';

/**
 * Хук, который возвращает значение и функцию изменения этого значения,
 * но обновляет значение только в случае, если новое значение отличается от предыдущего.
 * @param initialValues Значение state при инициализации.
 * @param isEqualFn Функция, которая определяет, что значения равны. По умолчанию сравниваются значения по ссылке, то есть, если ссылки на объекты равны, то значения считаются равными.
 * @returns Возвращает значение и функцию для изменения значения.
 */
export const useUpdatedValues = <T>(
  initialValues: T,
  isEqualFn: (prev: T, current: T) => boolean = (prev, current) => prev === current
): { value: T; onChange: (newValue: T) => void } => {
  if (typeof isEqualFn !== 'function') {
    throw new TypeError('isEqualFn is not a function');
  }

  const [value, setValue] = useState(initialValues);
  const prevValueRef = useRef<T>(initialValues);

  // Эффект, который вызывается при изменении значения initialValues.
  // Если значения отличаются, то обновляем значение состояния.
  useEffect(() => {
    if (!isEqualFn(prevValueRef.current, initialValues)) {
      setValue(initialValues);
    }
  }, [initialValues, isEqualFn]);

  // Эффект, который вызывается при изменении значения value.
  // Обновляем значение prevValueRef.current, чтобы оно отражало текущее значение.
  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return {
    value,
    onChange: setValue
  };
};
