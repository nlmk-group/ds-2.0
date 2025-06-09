import { CSSProperties, FC, MouseEventHandler, RefObject } from 'react';

import { ELegendType } from './enums';

/**
 * Props основного компонетна
 */
export interface ILegendProps {
  /**
   * (CSS Цвет & Custom компонент) для отображения и выбора цвета
   */
  color: ILegendColor;
  /**
   * (CSS Цвет & Custom компонент) список цвета для выбора
   */
  colorList?: ILegendColor[];
  /**
   * Тип компонента (ELegendType.VIEW | ELegendType.EDIT)
   */
  type?: `${ELegendType}`;
  /**
   * Подпись у элемента Legend
   */
  label?: string;
  /**
   * Dropdown - Использоваться createPortal для отображения DropdownMenu
   */
  withPortal?: boolean;
  /**
   * Dropdown - ID Контейнера для использования createPortal
   */
  portalContainerId?: string;
  /**
   * Dropdown - Стили DropdownMenu
   */
  menuStyle?: CSSProperties;
  /**
   * Dropdown - Подпись при выборе цвета
   */
  menuLabel?: string;
  /**
   * Событие изменения цвета (val: ILegendColor) => void;
   */
  onColorChange?: (val: ILegendColor) => void;
  /**
   * Tooltip - текст
   */
  tooltipText?: string;
  /**
   * Запрет редактирования
   */
  isDisabled?: boolean;
}

/**
 * Props компонента отображения CSS цвета
 */
export interface ILegendViewComponentProps extends Pick<ILegendProps, 'color' | 'onColorChange'> {
  /**
   * Выбран ли текущий цвет
   */
  isActive?: boolean;
  /**
   * Отображение для выбора цвета
   */
  isSelectable?: boolean;
  /**
   * Class div компонента
   */
  className?: string;
}

/**
 * Props компонента изменения CSS цвета
 */
export interface ILegendEditComponentProps extends Pick<ILegendProps, 'color'> {
  /**
   * Class div компонента
   */
  className?: string;
  /**
   * Событие нажатия на div
   */
  onClick: MouseEventHandler<HTMLDivElement>;
  /**
   * Открыт ли Dropdown menu
   */
  isOpen: boolean;
  /**
   * Запрет редактирования
   */
  isDisabled?: ILegendProps['isDisabled'];
}

/**
 * Интерфейс СSS цвета
 */
export interface ILegendColor {
  /**
   * Цвет по умолчанию
   */
  default: CSSProperties['color'];
  /**
   * Цвет при наведении
   */
  hover?: CSSProperties['color'];
  /**
   * Цвет при выбранном цвете
   */
  active?: CSSProperties['color'];
  /**
   * Custom компонент отображение цвета
   */
  viewColor?: FC<ILegendViewComponentProps>;
  /**
   * Custom компонент редактирования цвета
   */
  editColor?: FC<ILegendEditComponentProps & { ref: RefObject<HTMLDivElement> }>;
}
