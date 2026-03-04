import { ENABLED_HOURS_VALUES } from '@components/declaration';
import { IInputAdditionalProps } from '@components/Input/types';

export type TEnabledHour = typeof ENABLED_HOURS_VALUES[number] | undefined;

export enum ETimePickerType {
  time = 'time',
  timeWithSeconds = 'timeWithSeconds',
  period = 'period',
  periodWithSeconds = 'periodWithSeconds'
}

export interface TTimePickerType
  extends Omit<IInputAdditionalProps, 'value' | 'onChange' | 'onReset' | 'id' | 'onBlur'> {
  /** Уникальный идентификатор компонента */
  id?: number | string;
  /** Тип пикера времени */
  type?: `${ETimePickerType}`;
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
  /** Функция для определения начального доступного часа */
  enabledHourFrom?: (date: Date | undefined) => TEnabledHour;
  /** Функция для определения конечного доступного часа */
  enabledHourTo?: (date: Date | undefined) => TEnabledHour;
  /** Функция для определения начальной доступной минуты */
  enabledMinuteFrom?: (date: Date | undefined) => number;
  /** Функция для определения конечной доступной минуты */
  enabledMinuteTo?: (date: Date | undefined) => number;
  /** Флаг блокировки панели выбора */
  disabledPanel?: boolean;
  /** ID рутового контейнера для создания портала */
  portalContainerId?: string;
  /** Флаг использования портала для рендеринга */
  withPortal?: boolean;
  /** Флаг открытия пикера при фокусе */
  isOpenOnFocus?: boolean;
  /** Флаг отображения иконки */
  withIcon?: boolean;
  /** Флаг использования всплывающего пикера */
  withPicker?: boolean;
  /** Дополнительный CSS класс */
  className?: string;
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
