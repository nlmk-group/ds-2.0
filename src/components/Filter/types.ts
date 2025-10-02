import { InputHTMLAttributes, ReactNode } from 'react';

export interface IFilterTypeOption {
  value: string;
  label: string;
  icon: ReactNode;
  disabled?: boolean;
}

export interface IFilterValueOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export type TMenuState = 'type' | 'value' | null;


export interface IFilterProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'onChange'> {
  /** Массив опций для "типов фильтра" (при клике на иконку) */
  filterTypeOptions: IFilterTypeOption[];
  /** Массив опций для "значений" (при фокусе на инпут) */
  filterValueOptions: IFilterValueOption[];
  /** Коллбэк, вызывается при изменении value или типа */
  onFilterChange?: (value: string | undefined, filterType: string) => void;
  /** Начальное текстовое значение в инпуте */
  defaultValue?: string;
  /** Начальный тип фильтра (если не задан, возьмём первый из filterTypeOptions) */
  defaultFilterType?: string;
  /** Нужно ли рендерить меню через портал? */
  withPortal?: boolean;
  /** ID DOM-элемента для портала */
  portalContainerId?: string;
}
