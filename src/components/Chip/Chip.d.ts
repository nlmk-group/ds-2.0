import { FC } from 'react';

import { sizesMapping, variantsMapping } from '@components/declaration/enums';

export enum EChipColors {
  primary = 'primary',
  error = 'error',
  success = 'success',
  warning = 'warning'
}

export type TChipSize = Exclude<`${sizesMapping}`, 'l'>;

export interface IChipProps {
  /**
   * Цвет чипа
   * @default EChipColors.brand
   */
  color?: `${EChipColors}`;

  /**
   * Размер чипа
   * @default sizesMapping.m
   */
  size?: TChipSize;

  /**
   * Вариант отображения чипа
   * @default variantsMapping.solid
   */
  variant?: `${variantsMapping}`;

  /**
   * Метка чипа (отображается над основным контентом)
   */
  label?: string;

  /**
   * Основной контент чипа
   */
  children: string | number;

  /**
   * Суффикс чипа (отображается справа от основного контента)
   */
  suffix?: string;

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * Inline стили для кастомизации компонента
   */
  style?: CSSProperties;
}

declare const Chip: FC<IChipProps>;

export default Chip;
