import { EButtonSize } from '@components/Button/enums';

export interface IButtonBadgeProps {
  /**
   * Размер бейджа
   */
  size: `${EButtonSize}`;

  /**
   * Контент для отображения в бейдже
   */
  badge: string | number;
}
