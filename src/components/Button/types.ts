import { ButtonHTMLAttributes, ReactNode } from 'react';

import { EButtonFill, EButtonSizes, EButtonVariant } from './enums';

export type TButtonSize = `${EButtonSizes}`;
export type TButtonVariant = `${EButtonVariant}`;
export type TButtonFill = `${EButtonFill}`;

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
  size?: `${EButtonSizes}`;

  /**
   * Вариант стиля кнопки
   */
  variant?: `${EButtonVariant}`;

  /**
   * Тип заливки кнопки
   */
  fill?: `${EButtonFill}`;

  /**
   * Дополнительный CSS класс для кнопки
   */
  className?: string;

  /**
   * Контент кнопки
   */
  children?: ReactNode;
}
