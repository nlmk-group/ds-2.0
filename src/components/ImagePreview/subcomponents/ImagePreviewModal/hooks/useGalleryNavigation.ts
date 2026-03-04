import { useCallback, useEffect, useMemo, useRef } from 'react';
import { clamp } from '@components/ImagePreview/utils';

type UseGalleryNavigationArgs = {
  length: number;
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
};

type UseGalleryNavigationResult = {
  hasMany: boolean;
  canPrev: boolean;
  canNext: boolean;
  goTo: (next: number) => void;
  prev: () => void;
  next: () => void;
};

/**
 * useGalleryNavigation инкапсулирует навигацию по галерее изображений:
 * вычисляет доступность переходов, нормализует индекс в границах и отдает стабильные обработчики переходов.
 *
 * @param {object} args - Параметры хука.
 * @param {number} args.length - Количество элементов в галерее.
 * @param {number} args.activeIndex - Текущий активный индекс.
 * @param {(idx: number) => void} args.setActiveIndex - Сеттер активного индекса.
 *
 * @returns {object} result - Результат хука.
 * @returns {boolean} result.hasMany - Признак, что в галерее больше одного элемента.
 * @returns {boolean} result.canPrev - Можно ли перейти к предыдущему элементу.
 * @returns {boolean} result.canNext - Можно ли перейти к следующему элементу.
 * @returns {(next: number) => void} result.goTo - Переход к указанному индексу (с clamp по границам).
 * @returns {() => void} result.prev - Переход к предыдущему элементу.
 * @returns {() => void} result.next - Переход к следующему элементу.
 */

export const useGalleryNavigation = ({
   length,
   activeIndex,
   setActiveIndex
}: UseGalleryNavigationArgs): UseGalleryNavigationResult => {
  const activeIndexRef = useRef(activeIndex);
  const lengthRef = useRef(length);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    lengthRef.current = length;
  }, [length]);

  const hasMany = length > 1;
  const canPrev = hasMany && activeIndex > 0;
  const canNext = hasMany && activeIndex < length - 1;

  const goTo = useCallback(
    (next: number) => {
      const len = lengthRef.current;
      if (len <= 0) return;
      setActiveIndex(clamp(next, 0, len - 1));
    },
    [setActiveIndex]
  );

  const prev = useCallback(() => {
    goTo(activeIndexRef.current - 1);
  }, [goTo]);

  const next = useCallback(() => {
    goTo(activeIndexRef.current + 1);
  }, [goTo]);

  return useMemo(
    () => ({ hasMany, canPrev, canNext, goTo, prev, next }),
    [hasMany, canPrev, canNext, goTo, prev, next]
  );
};
