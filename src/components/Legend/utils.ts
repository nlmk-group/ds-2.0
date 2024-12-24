import { isValidElement } from 'react';

import { ILegendColor } from './types';

/**
 * Проверяет, является ли переданный кастомный элемент ReactElement
 */
export const isCustomElement = (
  color: ILegendColor | undefined,
  key: keyof Pick<ILegendColor, 'viewColor' | 'editColor'>
) => {
  if (typeof color?.[key] !== 'function') {
    return false;
  }
  const element = color?.[key]?.({ color, onClick: () => undefined, isOpen: false, ref: { current: null } });
  return isValidElement(element);
};
