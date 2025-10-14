import { createContext, Dispatch, MutableRefObject, SetStateAction, useContext } from 'react';

import { TOptionItemSize } from '@components/OptionItem/types';

import { ISelectedOption } from './types';

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

  /** Реф для кнопки со стрелкой, нужен чтобы ClickAwayListener игнорировал клики на неё */
  arrowButtonRef: MutableRefObject<HTMLButtonElement | null>;

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

  /** Размер опций */
  size: TOptionItemSize;
}

export const MultiSelectContext = createContext<IMultiSelectContextProps | null>(null);

export const useMultiSelectContext = () => {
  const context = useContext(MultiSelectContext);
  if (!context) {
    throw new Error('useMultiSelectContext must be used within MultiSelectContext.Provider');
  }
  return context;
};
