import { CSSProperties, ReactNode } from 'react';

import { ESnackbarColors, ESnackbarTypes } from './enums';

export interface ISnackbarProps {
  /** Цвет фона Snackbar */
  color?: `${ESnackbarColors}`;

  /** Вариант отображения Snackbar */
  type?: `${ESnackbarTypes}`;

  /** Функция, вызываемая при закрытии Snackbar */
  onClose?: () => void;

  /** Наличие иконки в начале Snackbar */
  startIcon?: boolean;

  /** Функция, вызываемая при нажатии на кнопку действия */
  actionButton?: () => void;

  /** Текст кнопки действия */
  actionText?: string;

  /** Содержимое Snackbar */
  children: ReactNode;

  /** Время в миллисекундах, через которое Snackbar автоматически скроется */
  autoHideDuration?: number;

  /** Отображение таймера с момента появления Snackbar */
  showCountdown?: boolean;

  /** Дополнительный CSS класс */
  className?: string;

  /** Inline стили для компонента */
  style?: CSSProperties;
}
