import { ChangeEventHandler, CSSProperties, InputHTMLAttributes } from 'react';

import { ECheckboxColors } from './enums';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Текст метки чекбокса
   */
  label?: string;

  /**
   * Цветовой вариант компонента
   * @default ECheckboxColors.brand
   */
  color?: `${ECheckboxColors}`;

  /**
   * Флаг, указывающий, отключен ли чекбокс
   */
  disabled?: boolean;

  /**
   * Флаг, указывающий, выбран ли чекбокс
   */
  checked?: boolean;

  /**
   * Уникальный идентификатор
   */
  id?: string;

  /**
   * Функция обработки изменения состояния
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /**
   * Значение чекбокса
   */
  value?: string;

  /**
   * Флаг множественного выбора (показывает минус вместо галочки)
   * @default false
   */
  multiple?: boolean;

  /**
   * Флаг для цветовой индикации (например, показать изменилось ли значение)
   * @default false
   */
  colored?: boolean;

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * Inline стили для кастомизации компонента
   */
  style?: CSSProperties;
}
