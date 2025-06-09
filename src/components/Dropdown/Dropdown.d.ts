import { CSSProperties, FC, ReactNode } from 'react';

import { EButtonColor, EButtonSize, EButtonVariant } from '@components/Button/enums';
import { IButtonProps } from '@components/Button/types';

/**
 * Интерфейс свойств компонента Dropdown.
 */
export interface IDropdownProps extends IButtonProps {
  /** Элементы, которые будут отображаться в меню */
  children: ReactNode;
  /** Отключает кнопку и возможность открытия меню */
  disabled?: boolean;
  /** Дополнительный класс для кнопки */
  className?: string;
  /** Размер кнопки и меню */
  size?: `${EButtonSize}`;
  /** Вариант стиля кнопки */
  variant?: `${EButtonVariant}`;
  /** Цвет кнопки */
  color?: `${EButtonColor}`;
  /** Содержимое кнопки */
  buttonChildren?: ReactNode;
  /** Иконка в начале кнопки */
  startIcon?: ReactNode;
  /** Иконка для кнопки-иконки (переопределяет стандартный шеврон) */
  iconButton?: ReactNode;
  /** Бейдж в начале кнопки */
  startBadge?: string | number;
  /** Бейдж в конце кнопки */
  endBadge?: string | number;
  /** Кастомные стили меню */
  menuStyle?: CSSProperties;
  /** Кастомные стили кнопки */
  buttonStyle?: CSSProperties;
  /** открытие выпадающего списка в портале */
  withPortal?: boolean;
  /** контейнер для портала */
  portalContainerId?: string;
}

/**
 * Интерфейс `IDropdownMenuItemProps` используется для описания свойств элемента меню в Dropdown.
 */
export declare interface IDropdownMenuItemProps {
  /** Функция, вызываемая при клике на элемент меню. */
  onClick?: (value: string) => void;
  /** Значение, связанное с элементом меню. */
  value: string;
  /** Флаг, определяющий, является ли элемент меню отключенным. */
  disabled?: boolean;
  /** Содержимое элемента меню. */
  children?: ReactNode;
}

/**
 * Компонент Dropdown предоставляет интерактивное выпадающее меню с настраиваемыми кнопками и элементами меню.
 * Наследует все возможности компонента Button.
 */
declare const Dropdown: FC<IDropdownProps>;

export default Dropdown;