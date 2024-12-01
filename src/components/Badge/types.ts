import { CSSProperties } from 'react';

import { variantsMapping } from '@components/declaration/enums';

import { EBadgeColors, EBadgeSizes } from './enums';

export interface IBadgeProps {
  /**
   * Цвет бейджа
   * @default EBadgeColors.brand
   */
  color?: `${EBadgeColors}`;

  /**
   * Размер бейджа
   * @default EBadgeSizes.m
   */
  size?: `${EBadgeSizes}`;

  /**
   * Вариант отображения бейджа
   * @default variantsMapping.solid
   */
  variant?: `${variantsMapping}`;

  /**
   * Контент бейджа
   */
  children?: string | number;

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * Inline стили для кастомизации компонента
   */
  style?: CSSProperties;
}
