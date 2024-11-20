import { CSSProperties, FC, ReactNode } from 'react';

import { TInputProps } from '@components/Input/types';

export enum ESelectSizes {
  m = 'm',
  s = 's',
  xs = 'xs'
}

export enum ESelectColors {
  default = 'default',
  error = 'error',
  warning = 'warning',
  success = 'success'
}

export type TOverrideInputProps = {
  /** Текущее значение селекта */
  value?: string | number;

  /** Функция обработчик, вызывается при выборе нового значения */
  onChange?: (value: string | number) => void;

  /** Обработчик закрытия меню options */
  onBlur?: () => void;

  /** Обработчик открытия меню options */
  onFocus?: () => void;
};

export interface ISelectSpecificProps {
  /** id рутового контейнера для создания портала */
  portalContainerId?: string;

  /** Дочерние элементы селекта (опции меню) */
  children: ReactNode;

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

  /** Кастомные стили для компонента */
  style?: CSSProperties;
}

export type ISelectProps = Omit<TInputProps, keyof TOverrideInputProps> & TOverrideInputProps & ISelectSpecificProps;

declare const SimpleSelect: FC<ISelectProps>;

export default SimpleSelect;
