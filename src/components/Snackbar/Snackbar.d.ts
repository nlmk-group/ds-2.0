import { CSSProperties, FC, ReactNode } from 'react';

import { variantsMapping } from '@components/declaration';

export enum ESnackbarColors {
  dark = 'dark',
  green = 'green',
  red = 'red',
  orange = 'orange',
  grey = 'grey',
  white = 'white',
  'light-green' = 'light-green',
  pink = 'pink'
}

export interface ISnackbarProps {
  /** Цвет фона Snackbar */
  color?: ESnackbarColors;

  /** Вариант отображения Snackbar */
  variant?: keyof typeof variantsMapping;

  /** Функция, вызываемая при закрытии Snackbar */
  close?: () => void;

  /** Функция, вызываемая при нажатии на кнопку действия */
  actionButton?: () => void;

  /** Текст кнопки действия */
  actionText?: string;

  /** Содержимое Snackbar */
  children: ReactNode;

  /** Время в миллисекундах, через которое Snackbar автоматически скроется */
  autoHideDuration?: number;

  /** Дополнительный CSS класс */
  className?: string;

  /** Inline стили для компонента */
  style?: CSSProperties;
}

declare const Snackbar: FC<ISnackbarProps>;

export default Snackbar;
