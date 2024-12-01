import { ChangeEvent, CSSProperties, FC } from 'react';

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
   * Текст метки радио-кнопки
   */
  label?: string;

  /**
   * Цвет радио-кнопки
   * @default ERadioColors.brand
   */
  color?: `${ERadioColors}`;

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * Inline стили для кастомизации компонента
   */
  style?: CSSProperties;
};

declare const Radio: FC<IRadioProps>;

export default Radio;
