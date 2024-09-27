import { TButtonFill, TButtonSize, TButtonVariant } from '@components/Button/types';

export interface IButtonBadge {
  /**
   * Размер бейджа
   */
  size: TButtonSize;

  /**
   * Вариант стиля бейджа
   */
  variant: TButtonVariant;

  /**
   * Тип заливки бейджа
   */
  fill: TButtonFill;

  /**
   * Контент для отображения в бейдже
   */
  badge: string | number;
}
