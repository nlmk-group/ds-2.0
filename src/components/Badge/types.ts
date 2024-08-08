import { variantsMapping } from '@components/declaration/enums';

import { EBadgeColors, EBadgeSizes } from './enums';

export interface IBadgeProps {
  /**
   * Цвет бейджа
   */
  color?: `${EBadgeColors}`;

  /**
   * Размер бейджа
   */
  size?: `${EBadgeSizes}`;

  /**
   * Вариант отображения бейджа
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
}
