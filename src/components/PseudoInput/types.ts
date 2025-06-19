import { CSSProperties, ReactNode } from 'react';

import { IBadgeProps } from '@components/Badge/types';
import { customInputColors } from '@components/declaration';

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