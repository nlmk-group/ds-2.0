import { createContext, CSSProperties, ReactNode, RefObject } from 'react';

import { EButtonSize } from '@components/Button/enums';

interface DropdownContextProps {
  /** Флаг, указывающий, открыто ли меню */
  isOpen: boolean;
  /** Функция для установки состояния открытия/закрытия меню */
  setIsOpen: (isOpen: boolean) => void;
  /** Флаг, указывающий, отключен ли компонент */
  disabled: boolean;
  /** Содержимое кнопки */
  buttonChildren?: ReactNode;
  /** Ссылка на DOM-элемент кнопки */
  buttonRef: RefObject<HTMLButtonElement | null> | null;
  /** Размер компонента */
  size?: `${EButtonSize}`;
  /** Кастомные стили меню */
  menuStyle?: CSSProperties;
}

export const DropdownContext = createContext<DropdownContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  disabled: false,
  buttonChildren: undefined,
  menuStyle: undefined,
  buttonRef: null,
  size: EButtonSize.m
});
