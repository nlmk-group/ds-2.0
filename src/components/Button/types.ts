import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

import { EButtonColor, EButtonSize, EButtonVariant } from './enums';

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
   * Контент кнопки
   */
  children?: ReactNode;

  /**
   * Дополнительный CSS класс для кнопки
   */
  className?: string;

  /**
   * Inline стили для кастомизации компонента
   */
  style?: CSSProperties;
}
