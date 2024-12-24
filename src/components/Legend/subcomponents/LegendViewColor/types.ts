import { ILegendProps } from '../../types';

/**
 * Props компонента отображения CSS цвета
 */
export interface ILegendViewColorProps extends Pick<ILegendProps, 'color' | 'onColorChange'> {
  /**
   * Выбран ли текущий цвет
   */
  isActive?: boolean;
  /**
   * Отображение для выбора цвета
   */
  isSelectable?: boolean;
}
