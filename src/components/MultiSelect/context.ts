import { createContext, Dispatch, MutableRefObject, SetStateAction } from 'react';

import { ISelectedOption } from './types';

import { SCROLLING_ITEMS_DEFAULT } from './constants';

export interface IMultiSelectContextProps {
  /** Открыто ли меню опций */
  isOpen: boolean;

  /** Функция установки открытия/закрытия меню опций */
  setIsOpen: Dispatch<SetStateAction<boolean>>;

  /** Массив выбранных значений */
  selectedOptions: Array<string | number>;

  /** Функция выбора опции */
  toggleOption: (value: string | number, label: string) => void;

  /** Массив объектов выбранных опций (с метками) */
  selectedOptionsWithLabels: ISelectedOption[];

  /** Функция установки выбранных опций */
  setSelectedOptionsWithLabels?: (value: Array<string | number>) => void;

  /** Реф инпута */
  inputRef: MutableRefObject<HTMLInputElement | null>;

  /** Реф меню опций */
  menuRef: MutableRefObject<HTMLDivElement | null>;

  /** Ширина меню опций */
  menuWidth?: string;

  /** Флаг, указывающий должно ли меню рендериться в портале */
  withPortal: boolean;

  /** id рутового контейнера для создания портала */
  portalContainerId: string;

  /** Количество элементов после которого включается прокрутка */
  scrollingItems: number;

  /** Строка поиска */
  searchTerm: string;

  /** Функция установки строки поиска */
  setSearchTerm: Dispatch<SetStateAction<string>>;

  /** Индекс текущего фокуса в списке */
  focusedIndex: number;

  /** Функция установки индекса текущего фокуса */
  setFocusedIndex: Dispatch<SetStateAction<number>>;

  /** Функция вызываемая при изменении выбранных опций */
  onChange?: (value: Array<string | number>) => void;

  /** Разделитель для отображения выбранных значений */
  valueSeparator: string;

  /** Выбрать все опции */
  selectAll: () => void;

  /** Очистить все выбранные опции */
  clearAll: () => void;

  /** Флаг отображения кнопки "Выбрать все" */
  showSelectAll: boolean;

  /** Лейбл для кнопки "Выбрать все" */
  selectAllLabel: string;

  /** Все опции доступные для выбора */
  allOptions: ISelectedOption[];

  /** Текст, отображаемый, когда нет доступных опций */
  noOptionsText: string;
}

export const MultiSelectContext = createContext<IMultiSelectContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  selectedOptions: [],
  toggleOption: () => {},
  selectedOptionsWithLabels: [],
  setSelectedOptionsWithLabels: () => {},
  inputRef: { current: null },
  menuRef: { current: null },
  withPortal: false,
  portalContainerId: 'root',
  scrollingItems: SCROLLING_ITEMS_DEFAULT,
  searchTerm: '',
  setSearchTerm: () => {},
  focusedIndex: -1,
  setFocusedIndex: () => {},
  valueSeparator: ', ',
  selectAll: () => {},
  clearAll: () => {},
  showSelectAll: false,
  selectAllLabel: 'Выбрать все',
  allOptions: [],
  noOptionsText: 'Ничего не найдено'
});
