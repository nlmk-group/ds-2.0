import { FC } from 'react';

import { variantsMapping } from '@components/declaration/enums';

export enum EBadgeSizes {
  l = 'l',
  m = 'm',
  s = 's',
  xs = 'xs'
}

export enum EBadgeColors {
  primary = 'primary',
  secondary = 'secondary',
  error = 'error',
  success = 'success',
  warning = 'warning',
  grey = 'grey',
  'light-grey' = 'light-grey',
  'light-green' = 'light-green'
}

export interface IBadgeProps {
  /**
   * Цвет бейджа
   */
  color?: EBadgeColors;

  /**
   * Размер бейджа
   */
  size?: EBadgeSizes;

  /**
   * Вариант отображения бейджа
   */
  variant?: variantsMapping;

  /**
   * Контент бейджа
   */
  children?: string | number;

  /**
   * Дополнительный CSS класс
   */
  className?: string;
}

declare const Badge: FC<IBadgeProps>;

export default Badge;
