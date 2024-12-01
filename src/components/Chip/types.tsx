import { CSSProperties } from 'react';

import { EChipColors } from '@components/Chip/enums';
import { sizesMapping, variantsMapping } from '@components/declaration/enums';

/**
 * Допустимые размеры чипа (исключая размер 'l')
 */
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
