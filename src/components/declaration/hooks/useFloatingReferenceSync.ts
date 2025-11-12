import { useEffect } from 'react';
import type { ReferenceType, UseFloatingReturn } from '@floating-ui/react';

/**
 * Хук для синхронизации референсов с floating-ui.
 * Используется для связывания reference элемента (например, input) и floating элемента (например, dropdown)
 * с системой позиционирования floating-ui.
 *
 * @param inputRef - Референс на reference элемент (триггер) или сам элемент
 * @param popperElement - Floating элемент (выпадающий список)
 * @param refs - Объект refs из useFloating хука
 * @param setIsPositioned - Функция для установки состояния позиционирования
 */
export const useFloatingReferenceSync = (
  inputRef: React.RefObject<HTMLElement | null> | HTMLElement | null,
  popperElement: HTMLElement | null,
  refs: UseFloatingReturn<ReferenceType>['refs'],
  setIsPositioned: (v: boolean) => void
) => {
  useEffect(() => {
    const element = inputRef && 'current' in inputRef ? inputRef.current : inputRef;
    if (!element) return;

    refs.setReference(element);
  }, [inputRef, refs]);

  useEffect(() => {
    if (!popperElement) {
      setIsPositioned(false);
      return;
    }

    refs.setFloating(popperElement);

    const raf = requestAnimationFrame(() => {
      setIsPositioned(true);
    });

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [popperElement, refs, setIsPositioned]);
};

