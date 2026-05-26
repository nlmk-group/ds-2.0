import { FC, InputHTMLAttributes, ReactNode } from 'react';

/**
 * Опция для селектора "тип фильтра" (открывается по клику на иконку слева от инпута).
 */
export interface IFilterTypeOption {
  /** Уникальное значение опции */
  value: string;

  /** Отображаемая метка опции */
  label: string;

  /** Иконка, отображаемая в меню и слева в инпуте при выборе */
  icon: ReactNode;

  /** Флаг, указывающий, отключена ли опция */
  disabled?: boolean;
}

/**
 * Опция для селектора "значение" (открывается при фокусе на инпуте).
 */
export interface IFilterValueOption {
  /** Уникальное значение опции */
  value: string;

  /** Отображаемая метка опции */
  label: string;

  /** Флаг, указывающий, отключена ли опция */
  disabled?: boolean;
}

/**
 * Текущее открытое меню: список типов фильтра, список значений или оба закрыты.
 */
export type TMenuState = 'type' | 'value' | null;

/**
 * Режим работы фильтра.
 *
 * - `autocomplete` — одиночный выбор: клик по опции подставляет её в инпут и закрывает меню.
 * - `multiselect` — мультивыбор: каждая опция рендерится с чекбоксом, клик по опции toggles значение в `selectedValues`, меню остаётся открытым.
 */
export type TFilterMode = 'autocomplete' | 'multiselect';

/**
 * Свойства компонента Filter.
 */
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
   *
   * @default 'autocomplete'
   */
  mode?: TFilterMode;

  /** Controlled: массив выбранных значений (для режима `multiselect`). */
  selectedValues?: string[];

  /** Uncontrolled: начальный массив выбранных значений (для режима `multiselect`). */
  defaultSelectedValues?: string[];

  /** Коллбэк, вызывается при изменении набора выбранных значений в режиме `multiselect`. */
  onSelectedValuesChange?: (values: string[]) => void;
}

/**
 * Компонент Filter — фильтрация данных по типу и значению.
 *
 * Поддерживает два режима:
 * - `autocomplete` (по умолчанию) — одиночный выбор с автодополнением.
 * - `multiselect` — мультивыбор с чекбоксами, счётчиком «Выбрано: N» и иконкой сброса.
 *
 * Подходит для заголовков колонок таблицы.
 */
declare const Filter: FC<IFilterProps>;

export default Filter;
