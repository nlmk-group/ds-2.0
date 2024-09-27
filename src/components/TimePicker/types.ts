import { ENABLED_HOURS_VALUES } from '@components/declaration';

type TEnabledHour = typeof ENABLED_HOURS_VALUES[number] | undefined;

export interface TTimePickerType {
  /** Уникальный идентификатор компонента */
  id?: number | string;
  /** Тип пикера времени */
  type?: 'time' | 'timeWithSeconds' | 'period' | 'periodWithSeconds';
  /** Выбранное значение времени */
  value?: Date;
  /** Обработчик изменения выбранного времени */
  onChange?: (date: Date) => void;
  /** Начальное значение времени для периода */
  valueFrom?: Date;
  /** Конечное значение времени для периода */
  valueTo?: Date;
  /** Обработчик изменения периода времени */
  onPeriodChange?: (valueFrom?: Date, valueTo?: Date) => void;
  /** Дополнительный CSS класс */
  className?: string;
  /** Функция для определения начального доступного часа */
  enabledHourFrom?: (date: Date | undefined) => TEnabledHour;
  /** Функция для определения конечного доступного часа */
  enabledHourTo?: (date: Date | undefined) => TEnabledHour;
  /** Функция для определения начальной доступной минуты */
  enabledMinuteFrom?: (date: Date | undefined) => number;
  /** Функция для определения конечной доступной минуты */
  enabledMinuteTo?: (date: Date | undefined) => number;
  /** Флаг отключения компонента */
  disabled?: boolean;
  /** Текст метки (label) для инпута */
  label?: string;
  /** Флаг блокировки панели выбора */
  disabledPanel?: boolean;
  /** Имя поля для использования в формах */
  name?: string;
  /** Флаг использования портала для рендеринга */
  withPortal?: boolean;
  /** Флаг ошибки */
  error?: boolean;
  /** Флаг открытия пикера при фокусе */
  isOpenOnFocus?: boolean;
  /** Флаг использования псевдо-инпута */
  pseudo?: boolean;
  /** Флаг отображения иконки */
  withIcon?: boolean;
  /** Флаг использования всплывающего пикера */
  withPicker?: boolean;
  /** Флаг применения цветовых стилей */
  colored?: boolean;
  /** Флаг наличия кнопки сброса */
  reset?: boolean;
  /** Обработчик сброса значения */
  onReset?: () => void;
}

/** Тип для значений дат в периоде */
export type TDateValues = {
  /** Начальное значение даты */
  valueFrom: Date | undefined;
  /** Конечное значение даты */
  valueTo: Date | undefined;
};
