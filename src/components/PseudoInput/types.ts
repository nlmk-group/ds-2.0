import { ReactNode } from 'react';

import { customInputColors } from '@components/declaration';

export interface IPseudoInputProps {
  /**
   * Текст или элемент для лейбла PseudoInput
   */
  label: JSX.Element | string;

  /**
   * Содержимое PseudoInput
   */
  children: ReactNode;

  /**
   * Размер компонента PseudoInput
   */
  size?: 'm' | 's';

  /**
   * Цвет метки PseudoInput
   */
  labelColor?: customInputColors;

  /**
   * Дополнительный CSS класс
   */
  className?: string;
}
