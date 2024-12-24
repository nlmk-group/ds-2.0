import { ILegendProps } from '../../types';

/**
 * Props основного компонетна отображения
 */
export interface ILegendViewProps
  extends Pick<ILegendProps, 'label'>,
    Partial<Pick<ILegendProps, 'color' | 'onColorChange'>> {
  /**
   * Не отображать label
   */
  isWithoutLabel?: boolean;
  /**
   * Отображение для выбора цвета
   */
  isSelectable?: boolean;
  /**
   * Текущий цвет
   */
  isActive?: boolean;
}
