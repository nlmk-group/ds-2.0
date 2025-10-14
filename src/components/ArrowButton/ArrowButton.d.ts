import { FC, MouseEventHandler } from 'react';

/**
 * Enum для цветов кнопки стрелки
 */
export enum EArrowButtonColor {
  error = 'error',
  success = 'success',
  warning = 'warning',
  primary = 'primary',
  default = 'default'
}

/**
 * Свойства компонента ArrowButton
 */
export interface IArrowButtonProps {
  /** Флаг, указывающий открыт ли выпадающий список */
  isOpen: boolean;

  /** Флаг блокировки кнопки */
  disabled: boolean;

  /** Цвет кнопки */
  color: `${EArrowButtonColor}`;

  /** Обработчик клика по кнопке */
  toggleDropdown: MouseEventHandler;
}

/**
 * Компонент ArrowButton - внутренний компонент для отображения стрелки в выпадающих списках
 */
declare const ArrowButton: FC<IArrowButtonProps>;

export default ArrowButton;
