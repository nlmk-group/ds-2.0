import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export enum EButtonSize {
  m = 'm',
  s = 's',
  xs = 'xs'
}

export enum EButtonColor {
  brand = 'brand',
  grey = 'grey',
  ghost = 'ghost',
  error = 'error',
  warning = 'warning',
  success = 'success'
}

export enum EButtonVariant {
  primary = 'primary',
  secondary = 'secondary'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Контент для бейджа кнопки в начале кнопки
   */
  startBadge?: string | number;

  /**
   * Контент для бейджа кнопки в конце кнопки
   */
  endBadge?: string | number;

  /**
   * Иконка, отображаемая в начале кнопки
   */
  startIcon?: ReactNode;

  /**
   * Иконка, отображаемая в конце кнопки
   */
  endIcon?: ReactNode;

  /**
   * Иконка для кнопки-иконки
   */
  iconButton?: ReactNode;

  /**
   * Размер кнопки
   */
  size?: `${EButtonSize}`;

  /**
   * Вариант стиля кнопки
   */
  variant?: `${EButtonVariant}`;

  /**
   * Тип заливки кнопки
   */
  color?: `${EButtonColor}`;

  /**
   * Дополнительный CSS класс для кнопки
   */
  className?: string;

  /**
   * Контент кнопки
   */
  children?: ReactNode;

  /**
   * Inline стили для кастомизации компонента
   */
  style?: CSSProperties;
}

declare const Button: FC<IButtonProps>;

export default Button;
