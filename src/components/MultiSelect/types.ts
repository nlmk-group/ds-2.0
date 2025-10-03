import { CSSProperties, ReactNode } from 'react';

import { customInputColors } from '@components/declaration';
import { TInputProps } from '@components/Input/types';

type TOverrideInputProps = {
  /** Массив выбранных значений */
  value?: Array<string | number>;

  /** Функция обработчик, вызывается при выборе новых значений */
  onChange?: (value: Array<string | number>) => void;

  /** Обработчик закрытия меню options */
  onBlur?: () => void;

  /** Обработчик открытия меню options */
  onFocus?: () => void;
};

interface IMultiSelectSpecificProps {
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

  /** Цвет компонента */
  color?: customInputColors;
}

export type IMultiSelectProps = Omit<TInputProps, keyof TOverrideInputProps | 'color'> &
  TOverrideInputProps &
  IMultiSelectSpecificProps;

export interface ISelectedOption {
  label: string;
  value: string | number;
}
