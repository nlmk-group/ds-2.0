import { useCallback, useEffect, useRef } from 'react';

import { IUseScrollProps } from './types';

type DebouncedFunc<T extends (...args: any[]) => any> = T & {
  cancel: () => void;
  flush: () => void;
};

/**
 * Хук для реализации бесконечной прокрутки с использованием IntersectionObserver
 *
 * @param {IUseScrollProps} props - Параметры хука
 * @param {RefObject<HTMLDivElement | null>} props.wrapperRef - Реф контейнера со скроллом
 * @param {RefObject<HTMLDivElement | null>} props.targetRef - Реф целевого элемента для отслеживания
 * @param {(t?: unknown) => void} props.callback - Функция, вызываемая при достижении целевого элемента
 * @param {boolean} props.canLoadMore - Флаг возможности подгрузки данных
 * @param {boolean} props.isPortalMounted - Флаг монтирования через портал
 *
 */
export const useScrollPagination = ({
  wrapperRef,
  targetRef,
  callback,
  canLoadMore,
  isPortalMounted
}: IUseScrollProps) => {
  let observer: IntersectionObserver | null = null;
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const target = targetRef.current;
    if (wrapper && target) {
      const options = {
        root: wrapper,
        rootMargin: '10px',
        threshold: 0.5
      };

      observer = new IntersectionObserver(([entries]) => {
        if (entries) {
          const { isIntersecting } = entries;

          if (isIntersecting && canLoadMore) {
            callback();
          }
        }
      }, options);

      observer.observe(target);
    }
    return () => {
      if (target && observer) {
        observer.unobserve(target);
      }
    };
  }, [wrapperRef, targetRef, callback, canLoadMore, isPortalMounted]);
};

/**
 * Хук для создания дебаунсированной функции, которая сохраняется между рендерами
 *
 * @param {number} delay - Задержка в миллисекундах
 * @param {Function} callback - Функция, которую нужно дебаунсировать
 * @returns {DebouncedFunc<Function>} Дебаунсированная функция
 *
 */
export const useDebounce = <T extends (...args: any[]) => any>(delay: number, callback?: T): DebouncedFunc<T> => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedFn = useCallback(
    ((...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callbackRef.current?.(...args);
      }, delay);
    }) as T,
    [delay]
  );

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const flush = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      callbackRef.current?.();
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const result = debouncedFn as DebouncedFunc<T>;
  result.cancel = cancel;
  result.flush = flush;

  return result;
};
