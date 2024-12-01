import { CSSProperties, FC, ReactNode } from 'react';

export enum ESnackbarColors {
  sky = 'sky',
  green = 'green',
  red = 'red',
  yellow = 'yellow',
  'light-sky' = 'light-sky',
  'light-grey' = 'light-grey',
  'light-green' = 'light-green',
  'light-red' = 'light-red'
}

export interface ISnackbarProps {
  /** Цвет фона Snackbar */
  color?: `${ESnackbarColors}`;

  /** Вариант отображения Snackbar */
  type?: `${ESnackbarTypes}`;

  /** Функция, вызываемая при закрытии Snackbar */
  onClose?: () => void;

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

declare const Snackbar: FC<ISnackbarProps>;

export default Snackbar;
