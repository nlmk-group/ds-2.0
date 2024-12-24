import { FC } from 'react';

/**
 * Позиция отображения значения ползунка.
 * Перечисление всех возможных позиций для отображения значения ползунка.
 */
export enum EInputSliderValuePosition {
  /** Значение отображается сверху */
  top = 'top',
  /** Значение отображается справа */
  right = 'right'
}

/**
 * Свойства компонента InputSlider.
 * Интерфейс, описывающий свойства, принимаемые компонентом InputSlider.
 */
export interface IInputSliderProps {
  /** Минимальное значение диапазона */
  min: number;
  /** Максимальное значение диапазона */
  max: number;
  /** Текст метки */
  label?: string;
  /** Шаг изменения значения */
  step?: number;
  /** Текущее значение ползунка */
  value: number;
  /** Показывать ли текущее значение */
  showValue?: boolean;
  /** Позиция текущего значения */
  valuePosition?: `${EInputSliderValuePosition}`;
  /** Функция, вызываемая при изменении значения */
  onChange?: (value: number) => void;
  /** Отключает ползунок */
  disabled?: boolean;
}

/**
 * Компонент InputSlider предоставляет интерфейс ползунка для выбора числового значения.
 */
declare const InputSlider: FC<IInputSliderProps>;

export default InputSlider;
