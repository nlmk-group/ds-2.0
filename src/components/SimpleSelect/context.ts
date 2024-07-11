import { createContext, RefObject } from 'react';

import { ScrollingItemsDefault } from './constants';

interface SelectContextProps {
  /**
   * Флаг, указывающий, открыто ли меню
   */
  isOpen: boolean;

  /**
   * Функция для установки состояния открытия меню
   */
  setIsOpen: (isOpen: boolean) => void;

  /**
   * Выбранная опция в селекте
   */
  selectedOption: string | number | undefined;

  /**
   * Функция для установки выбранной опции
   */
  setSelectedOption: (option: string | number) => void;

  /**
   * Обработчик изменения значения селекта
   */
  onChange?: (value: string | number) => void;

  /**
   * Реф для корневого элемента селекта, нужен в том числе чтобы ClickAwayListener корректно работал с withPortal
   */
  selectRef: RefObject<HTMLDivElement>;

  /**
   * Реф для элемента меню, нужен в том числе чтобы ClickAwayListener корректно работал с withPortal
   */
  menuRef: RefObject<HTMLDivElement>;

  /**
   * Ширина меню селекта
   */
  menuWidth?: string;

  /**
   * Флаг, указывающий, должно ли меню рендериться в портале
   */
  withPortal?: boolean;

  /**
   * id рутового контейнера для создания портала
   */
  portalContainerId: string;

  /**
   * Количество элементов после которого включается прокрутка.
   */
  scrollingItems: number;

  /**
   * Выбранная опция отображаемого в инпуте значения
   */
  selectedLabel: string;

  /**
   * Функция для установки отображаемого в инпуте значения
   */
  setSelectedLabel: (label: string) => void;

  /**
   * Текущий поисковый запрос
   */
  searchTerm: string;

  /**
   * Функция для установки поискового запроса
   */
  setSearchTerm: (term: string) => void;

  /**
   * Индекс текущего элемента в фокусе при навигации с клавиатуры
   */
  focusedIndex: number;

  /**
   * Функция для установки индекса элемента в фокусе
   */
  setFocusedIndex: (index: number) => void;
}

export const SelectContext = createContext<SelectContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  selectedOption: undefined,
  setSelectedOption: () => {},
  onChange: undefined,
  selectedLabel: '',
  setSelectedLabel: () => {},
  selectRef: { current: null },
  menuRef: { current: null },
  menuWidth: undefined,
  withPortal: false,
  portalContainerId: 'root',
  scrollingItems: ScrollingItemsDefault,
  searchTerm: '',
  setSearchTerm: () => {},
  focusedIndex: -1,
  setFocusedIndex: () => {}
});
