import { ChangeEvent, FC } from 'react';

export interface IRadioProps {
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
}

declare const Radio: FC<IRadioProps>;

export default Radio;
