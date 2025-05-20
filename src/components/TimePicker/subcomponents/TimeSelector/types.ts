import { TEnabledHour } from '../../types';

export interface ITimeSelectorProps {
  /** Выбранное время */
  selectedTime?: Date;
  /** Начальное время для первого селектора */
  initialSelectedTimeFirst?: Date;
  /** Начальное время для второго селектора */
  initialSelectedTimeSecond?: Date;
  /** Обработчик изменения первого времени */
  onChangeFirst?: (date: Date) => void;
  /** Обработчик изменения второго времени */
  onChangeSecond?: (date: Date) => void;
  /** Общий обработчик изменения времени */
  onChange?: (date: Date) => void;
  /** Значение времени */
  value?: Date;
  /** Внутреннее значение времени */
  innerValue?: Date;
  /** Флаг блокировки компонента */
  disabled?: boolean;
  /** Флаг типа с секундами */
  isTimeWithSecondsType?: boolean;
  /** Флаг типа периода */
  isTimePeriodType?: boolean;
  /** Флаг типа периода с секундами */
  isTimePeriodWithSecondsType?: boolean;
  /** Функция для определения начального доступного часа */
  enabledHourFrom?: (date: Date | undefined) => TEnabledHour;
  /** Функция для определения конечного доступного часа */
  enabledHourTo?: (date: Date | undefined) => TEnabledHour;
  /** Функция для определения начальной доступной минуты */
  enabledMinuteFrom?: (date: Date | undefined) => number | undefined;
  /** Функция для определения конечной доступной минуты */
  enabledMinuteTo?: (date: Date | undefined) => number | undefined;
}
