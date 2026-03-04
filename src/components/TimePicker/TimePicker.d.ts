import { FC } from 'react';

import { ENABLED_HOURS_VALUES } from '@components/declaration';

type TEnabledHour = typeof ENABLED_HOURS_VALUES[number] | undefined;

export enum ETimePickerTypes {
  /** Выбор времени (часы и минуты) */
  time = 'time',
  /** Выбор времени с секундами */
  timeWithSeconds = 'timeWithSeconds',
  /** Выбор периода времени (часы и минуты) */
  period = 'period',
  /** Выбор периода времени с секундами */
  periodWithSeconds = 'periodWithSeconds'
}

export interface ITimePickerProps {
  /** Уникальный идентификатор компонента */
  id?: number | string;
  /** Тип пикера времени */
  type?: `${ETimePickerTypes}`;
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
  /** Флаг блокировки компонента */
  disabled?: boolean;
  /** Текст метки компонента */
  label?: string;
  /** Флаг блокировки панели выбора */
  disabledPanel?: boolean;
  /** Имя поля формы */
  name?: string;
  /** ID рутового контейнера для создания портала */
  portalContainerId?: string;
  /** Флаг использования портала для рендеринга */
  withPortal?: boolean;
  /** Флаг наличия ошибки */
  error?: boolean;
  /** Флаг открытия пикера при фокусе */
  isOpenOnFocus?: boolean;
  /** Флаг псевдо-состояния компонента */
  pseudo?: boolean;
  /** Флаг отображения иконки */
  withIcon?: boolean;
  /** Флаг использования всплывающего пикера */
  withPicker?: boolean;
  /** Флаг цветового выделения */
  colored?: boolean;
  /** Флаг отображения кнопки сброса */
  reset?: boolean;
  /** Обработчик сброса значения */
  onReset?: () => void;
}

declare const TimePicker: FC<ITimePickerProps>;

export default TimePicker;
