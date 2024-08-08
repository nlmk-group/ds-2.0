import { createContext, RefObject } from 'react';

import { EButtonSizes } from '@components/Button/enums';

interface DropdownContextProps {
  /** Флаг, указывающий, открыто ли меню */
  isOpen: boolean;
  /** Функция для установки состояния открытия/закрытия меню */
  setIsOpen: (isOpen: boolean) => void;
  /** Флаг, указывающий, отключен ли компонент */
  disabled: boolean;
  /** Текст кнопки */
  buttonText?: string;
  /** Ссылка на DOM-элемент кнопки */
  buttonRef: RefObject<HTMLButtonElement> | null;
  /** Размер компонента */
  size?: EButtonSizes;
}

export const DropdownContext = createContext<DropdownContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  disabled: false,
  buttonText: '',
  buttonRef: null,
  size: EButtonSizes.m
});
