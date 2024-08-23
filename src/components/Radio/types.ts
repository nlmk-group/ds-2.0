import { ChangeEvent } from 'react';

export type IRadioProps = {
  /**
   * Значение радио-кнопки
   */
  value?: string;

  /**
   * Флаг, указывающий, выбрана ли радио-кнопка
   */
  checked?: boolean;

  /**
   * Флаг, указывающий, отключена ли радио-кнопка
   */
  disabled?: boolean;

  /**
   * Функция обработки изменения состояния радио-кнопки
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * Текст метки радио-кнопки
   */
  label?: string;
};
