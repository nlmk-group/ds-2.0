import { FC } from 'react';

import { variantsMapping } from '@components/declaration/enums';

export enum EBadgeSizes {
  l = 'l',
  m = 'm',
  s = 's',
  xs = 'xs'
}

export enum EBadgeColors {
  brand = 'brand',
  grey = 'grey',
  error = 'error',
  success = 'success',
  warning = 'warning'
}

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

declare const Badge: FC<IBadgeProps>;

export default Badge;
