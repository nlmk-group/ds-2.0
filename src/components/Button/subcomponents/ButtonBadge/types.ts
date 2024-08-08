import { EBadgeColors } from '@components/Badge/enums';
import { EButtonVariant } from '@components/Button/enums';
import { TButtonFill, TButtonSize, TButtonVariant } from '@components/Button/types';
import { variantsMapping } from '@components/declaration';

interface IBadgeProps {
  /**
   * Цвет бейджа
   */
  color: `${EBadgeColors}`;

  /**
   * Вариант стиля бейджа
   */
  variant: variantsMapping;
}

export type TBadgeTypes = {
  [key: string | EButtonVariant]: IBadgeProps;
};

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
