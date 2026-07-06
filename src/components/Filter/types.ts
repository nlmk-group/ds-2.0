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

export type TFilterMode = 'autocomplete' | 'multiselect';

export interface IFilterProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'onChange'> {
  /** Массив опций для "типов фильтра" (при клике на иконку) */
  filterTypeOptions: IFilterTypeOption[];
  /** Массив опций для "значений" (при фокусе на инпут) */
  filterValueOptions: IFilterValueOption[];
  /**
   * Коллбэк, вызывается при изменении value или типа фильтра.
   * В режиме `multiselect` параметр `value` всегда `undefined` — для изменения выбранных значений используйте `onSelectedValuesChange`.
   */
  onFilterChange?: (value: string | undefined, filterType: string) => void;
  /** Начальное текстовое значение в инпуте */
  defaultValue?: string;
  /** Начальный тип фильтра (если не задан, возьмём первый из filterTypeOptions) */
  defaultFilterType?: string;
  /** Нужно ли рендерить меню через портал? */
  withPortal?: boolean;
  /** ID DOM-элемента для портала */
  portalContainerId?: string;
  /**
   * Режим работы фильтра.
   * - `autocomplete` (по умолчанию) — клик по опции подставляет её в инпут и закрывает меню.
   * - `multiselect` — каждая опция рендерится с чекбоксом, клик по опции toggles значение в `selectedValues`, меню остаётся открытым.
   */
  mode?: TFilterMode;
  /** Controlled: массив выбранных значений (для режима `multiselect`). */
  selectedValues?: string[];
  /** Uncontrolled: начальный массив выбранных значений (для режима `multiselect`). */
  defaultSelectedValues?: string[];
  /** Коллбэк, вызывается при изменении набора выбранных значений в режиме `multiselect`. */
  onSelectedValuesChange?: (values: string[]) => void;
}
