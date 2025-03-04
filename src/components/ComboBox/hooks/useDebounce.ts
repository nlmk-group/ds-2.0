import { useEffect, useState } from 'react';

/**
 * Хук для создания отложенного (debounced) значения
 * 
 * @template T - Тип значения для debounce
 * @param value - Исходное значение, которое нужно отложить
 * @param delay - Задержка в миллисекундах перед обновлением значения
 * @returns Отложенное значение того же типа, что и входное
 * 
 * @description
 * Хук создает отложенную версию значения, которая обновляется только после того,
 * как прошло указанное количество миллисекунд с момента последнего изменения исходного значения.
 * Это полезно для оптимизации производительности при частых обновлениях, например, при поиске.
 * 
 * @example
 * ```typescript
 * function SearchComponent() {
 *   const [searchTerm, setSearchTerm] = useState('');
 *   const debouncedSearchTerm = useDebounce(searchTerm, 300);
 * 
 *   useEffect(() => {
 *     // Поиск будет выполнен только через 300мс после последнего ввода
 *     performSearch(debouncedSearchTerm);
 *   }, [debouncedSearchTerm]);
 * 
 *   return (
 *     <input
 *       value={searchTerm}
 *       onChange={(e) => setSearchTerm(e.target.value)}
 *     />
 *   );
 * }
 * ```
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
