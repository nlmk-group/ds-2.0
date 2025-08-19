import { EInputSliderValuePosition } from './enums';

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
  /** Суффикс для отображаемого значения (по умолчанию '%'). Передайте пустую строку для скрытия суффикса */
  valueSuffix?: string;
  /** Функция, вызываемая при изменении значения */
  onChange?: (value: number) => void;
  /** Отключает ползунок */
  disabled?: boolean;
}
