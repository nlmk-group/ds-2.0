import { createContext, RefObject, useContext } from 'react';

import { TOptionItemSize } from '@components/OptionItem/types';

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
   * Реф инпута из корневого элемента селекта, нужен в том числе чтобы ClickAwayListener корректно работал с withPortal
   */
  inputRef: RefObject<HTMLInputElement>;

  /**
   * Реф для элемента меню, нужен в том числе чтобы ClickAwayListener корректно работал с withPortal
   */
  menuRef: RefObject<HTMLDivElement>;

  /**
   * Реф для кнопки со стрелкой, нужен чтобы ClickAwayListener игнорировал клики на неё
   */
  arrowButtonRef: RefObject<HTMLButtonElement>;

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

  /**
   * Размер опций
   */
  size: TOptionItemSize;

  /**
   * Очищать поле поиска при выборе значения
   */
  clearSearchOnSelect: boolean;
}

export const SelectContext = createContext<SelectContextProps | null>(null);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('useSelectContext must be used within SelectContext.Provider');
  }
  return context;
};
