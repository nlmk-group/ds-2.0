import { FC } from 'react';

/**
 * Позиция отображения значения ползунка.
 * Перечисление всех возможных позиций для отображения значения ползунка.
 */
export enum ESliderThumbValuePosition {
  /** Значение отображается сверху */
  top = 'top',
  /** Значение отображается снизу */
  bottom = 'bottom',
  /** Значение не отображается */
  none = 'none'
}

/**
 * Свойства компонента InputRange.
 * Интерфейс, описывающий свойства, принимаемые компонентом InputRange.
 */
export interface IInputRangeProps {
  /** Минимальное значение диапазона */
  min: number;
  /** Максимальное значение диапазона */
  max: number;
  /** Шаг изменения значения */
  step?: number;
  /** Текущее значение диапазона */
  value: { min: number; max: number };
  /** Функция, вызываемая при изменении диапазона */
  onChange?: (value: { min: number; max: number }) => void;
  /** Отключает ползунок */
  disabled?: boolean;
  /** Позиция текущего значения ползунка */
  thumbValuePosition?: `${ESliderThumbValuePosition}`;
}

/**
 * Компонент InputRange предоставляет интерфейс двойного ползунка для выбора диапазона значений.
 */
declare const InputRange: FC<IInputRangeProps>;

export default InputRange;
