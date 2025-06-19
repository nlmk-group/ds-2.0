import { CSSProperties, FC, ReactNode } from 'react';

import { customInputColors } from '@components/declaration';
import { IBadgeProps } from '@components/Badge/types';

import { EPseudoInputSizes } from './enums';

type TBadgeProps = Partial<Pick<IBadgeProps, 'color' | 'variant'>>;

export interface IPseudoInputProps extends TBadgeProps {
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
  size?: `${EPseudoInputSizes}`;

  /**
   * Цвет метки PseudoInput
   */
  labelColor?: `${customInputColors}`;

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * Дополнительный текст справа от псевдо-ввода
   */
  suffix?: ReactNode;

  /**
   * Содержимое бейджа
   */
  badgeChildren?: string | number;

  /**
   * Флаг, добавляющий ширину в 100%
   */
  fullWidth?: boolean;

  /**
   * Inline стили для кастомизации компонента
   */
  style?: CSSProperties;
}

/**
 * Компонент PseudoInput для отображения текста с меткой в стиле input.
 */
declare const PseudoInput: FC<IPseudoInputProps>;

export default PseudoInput;
export type { IPseudoInputProps };