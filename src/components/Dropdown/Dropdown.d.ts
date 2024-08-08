import { FC, ReactNode } from 'react';

import { EButtonSizes } from '@components/Button/enums';

/**
 * Интерфейс свойств компонента Dropdown.
 */
export interface IDropdownProps {
  /** Элементы, которые будут отображаться в меню. */
  children: ReactNode;
  /** Отключает кнопку и возможность открытия меню. */
  disabled?: boolean;
  /** Дополнительный класс для кнопки. */
  className?: string;
  /** Текст, отображаемый в кнопке. */
  buttonText: string;
  /** Размер кнопки и меню. */
  size?: EButtonSizes;
}

export declare interface IDropdownMenuItemProps {
  onClick?: (value: string) => void;
  value: string;
  disabled?: boolean;
  children?: ReactNode;
}

/**
 * Компонент Dropdown предоставляет интерактивное выпадающее меню с настраиваемыми кнопками и элементами меню.
 */
declare const Dropdown: FC<IDropdownProps>;

export default Dropdown;
