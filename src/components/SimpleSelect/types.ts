import { CSSProperties, ReactNode } from 'react';

import { TInputProps } from '@components/Input/types';

type TOverrideInputProps = {
  /** Текущее значение селекта */
  value?: string | number;

  /** Функция обработчик, вызывается при выборе нового значения */
  onChange?: (value: string | number) => void;

  /** Обработчик закрытия меню options */
  onBlur?: () => void;

  /** Обработчик открытия меню options */
  onFocus?: () => void;
};

interface ISelectSpecificProps {
  /** id рутового контейнера для создания портала */
  portalContainerId?: string;

  /** Дочерние элементы селекта (опции меню) */
  children?: ReactNode;

  /** Ширина меню селекта */
  menuWidth?: string;

  /** Флаг, указывающий, должно ли меню рендериться в портале */
  withPortal?: boolean;

  /** Обработчик нажатия клавиши Enter */
  onEnterPress?: (item: string | number) => void;

  /** Количество элементов после которого включается прокрутка */
  scrollingItems?: number;

  /** Текст, отображаемый когда нет доступных опций */
  noOptionsText?: string;

  /** Флаг, указывающий, доступен ли поиск */
  searchable?: boolean;

  /** Очищать поле поиска при выборе значения */
  clearSearchOnSelect?: boolean;

  /** Кастомное отображаемое значение в инпуте (переопределяет автоматическое определение по label) */
  displayValue?: string;

  /** Кастомные стили для самого селекта (контейнера) */
  style?: CSSProperties;

  /** Кастомные стили для внутреннего Input компонента */
  inputStyle?: CSSProperties;
}

export type ISelectProps = Omit<TInputProps, keyof TOverrideInputProps | 'style'> &
  TOverrideInputProps &
  ISelectSpecificProps;
