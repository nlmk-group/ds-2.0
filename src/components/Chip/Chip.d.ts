import { FC } from 'react';

import { sizesMapping, variantsMapping } from '@components/declaration/enums';

export enum EChipColors {
  primary = 'primary',
  error = 'error',
  success = 'success',
  warning = 'warning'
}

export type ChipSize = Exclude<`${sizesMapping}`, 'l'>;

export interface IChipProps {
  /**
   * Цвет чипа
   */
  color?: EChipColors;

  /**
   * Размер чипа
   */
  size?: ChipSize;

  /**
   * Вариант отображения чипа
   */
  variant?: variantsMapping;

  /**
   * Метка чипа
   */
  label?: string;

  /**
   * Основной контент чипа
   */
  children: string | number;

  /**
   * Суффикс чипа
   */
  suffix?: string;

  /**
   * Дополнительный CSS класс
   */
  className?: string;
}

declare const Chip: FC<IChipProps>;

export default Chip;
