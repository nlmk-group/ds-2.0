import { CSSProperties, FC, ReactNode } from 'react';

import { TInputProps } from '../Input/types';

/**
 * Интерфейс для объекта выбранной опции (с меткой и значением)
 */
export interface ISelectedOption {
  /** Отображаемая метка опции */
  label: string;
  /** Значение опции */
  value: string | number;
}

/**
 * Свойства, переопределяющие пропсы из Input
 */
export type TOverrideInputProps = {
  /** Массив выбранных значений */
  value?: Array<string | number>;

  /** Функция обработчик, вызывается при выборе новых значений */
  onChange?: (value: Array<string | number>) => void;

  /** Обработчик закрытия меню options */
  onBlur?: () => void;

  /** Обработчик открытия меню options */
  onFocus?: () => void;
};

/**
 * Специфичные для MultiSelect свойства
 */
export interface IMultiSelectSpecificProps {
  /** id рутового контейнера для создания портала */
  portalContainerId?: string;

  /** Дочерние элементы селекта (опции меню) */
  children: ReactNode;

  /** Ширина меню селекта */
  menuWidth?: string;

  /** Флаг, указывающий, должно ли меню рендериться в портале */
  withPortal?: boolean;

  /** Обработчик нажатия клавиши Enter */
  onEnterPress?: (items: Array<string | number>) => void;

  /** Количество элементов после которого включается прокрутка */
  scrollingItems?: number;

  /** Текст, отображаемый когда нет доступных опций */
  noOptionsText?: string;

  /** Флаг, указывающий, доступен ли поиск */
  searchable?: boolean;

  /** Кастомные стили для самого селекта (контейнера) */
  style?: CSSProperties;

  /** Кастомные стили для внутреннего Input компонента */
  inputStyle?: CSSProperties;

  /** Разделитель для отображения выбранных значений */
  valueSeparator?: string;

  /** Максимальное количество отображаемых тегов (остальные будут под "+N") */
  maxVisibleTags?: number;

  /** Флаг для отображения счетчика выбранных элементов */
  showCounter?: boolean;

  /** Текст при выборе всех элементов */
  allSelectedText?: string;

  /** Лейбл для кнопки "Выбрать все" */
  selectAllLabel?: string;

  /** Флаг отображения кнопки "Выбрать все" */
  showSelectAll?: boolean;

  /** Очищать поле поиска при выборе значения */
  clearSearchOnSelect?: boolean;
}

/**
 * Объединенные пропсы для компонента MultiSelect
 */
export type IMultiSelectProps = Omit<TInputProps, keyof TOverrideInputProps | 'color'> &
  TOverrideInputProps &
  IMultiSelectSpecificProps;

/**
 * Компонент MultiSelect представляет собой кастомизируемый выпадающий список с возможностью выбора нескольких значений.
 */
declare const MultiSelect: FC<IMultiSelectProps>;

export default MultiSelect;
