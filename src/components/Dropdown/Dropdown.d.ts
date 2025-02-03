import { CSSProperties, FC, ReactNode } from 'react';

import { EButtonSize } from '@components/Button/enums';

/**
 * Интерфейс свойств компонента Dropdown.
 */
export interface IDropdownProps {
  /** Элементы, которые будут отображаться в меню */
  children: ReactNode;
  /** Отключает кнопку и возможность открытия меню */
  disabled?: boolean;
  /** Дополнительный класс для кнопки */
  className?: string;
  /** Размер кнопки и меню */
  size?: `${EButtonSize}`;
  /** Содержимое кнопки */
  buttonChildren?: ReactNode;
  /** Кастомные стили меню */
  menuStyle?: CSSProperties;
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
 */
declare const Dropdown: FC<IDropdownProps>;

export default Dropdown;
