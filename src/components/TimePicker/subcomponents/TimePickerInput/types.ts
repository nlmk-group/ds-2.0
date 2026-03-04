import { RefObject } from 'react';

import { IInputAdditionalProps } from '@components/Input/types';

import { TEnabledHour } from '../../types';

export interface ITimePickerInputProps
  extends Pick<IInputAdditionalProps, 'colored' | 'label' | 'reset' | 'onReset' | 'disabled'> {
  /** Дополнительный CSS класс */
  className?: string;
  /** Выбранное значение времени */
  value?: Date;
  /** Начальное значение времени для периода */
  valueFrom?: Date;
  /** Конечное значение времени для периода */
  valueTo?: Date;
  /** Выбранное время для первого пикера (для периода) */
  selectedTimeFirst?: Date;
  /** Выбранное время для второго пикера (для периода) */
  selectedTimeSecond?: Date;
  /** Обработчик изменения первого времени (может быть undefined при частичном сбросе) */
  onChangeFirst?: (date: Date | undefined) => void;
  /** Обработчик изменения второго времени (может быть undefined при частичном сбросе) */
  onChangeSecond?: (date: Date | undefined) => void;
  /** Обработчик изменения времени */
  onChange?: (date: Date) => void;
  /** Обработчик фокуса на поле ввода */
  onFocus?: () => void;
  /** Обработчик потери фокуса */
  onBlur?: (date: Date | null, date2?: Date | null) => void;
  /** Обработчик нажатия Enter */
  onEnterKeyDown?: (date: Date | null, date2?: Date | null) => void;
  /** Обработчик нажатия Tab */
  onTabKeyDown?: (date: Date | null, date2?: Date | null) => void;
  /** Флаг режима одиночного времени */
  isTimeType?: boolean;
  /** Флаг режима времени с секундами */
  isTimeWithSecondsType?: boolean;
  /** Флаг режима периода времени */
  isTimePeriodType?: boolean;
  /** Флаг режима периода времени с секундами */
  isTimePeriodWithSecondsType?: boolean;
  /** Функция для определения начального доступного часа */
  enabledHourFrom?: (date: Date | undefined) => TEnabledHour;
  /** Функция для определения конечного доступного часа */
  enabledHourTo?: (date: Date | undefined) => TEnabledHour;
  /** Функция для определения начальной доступной минуты */
  enabledMinuteFrom?: (date: Date | undefined) => number | undefined;
  /** Функция для определения конечной доступной минуты */
  enabledMinuteTo?: (date: Date | undefined) => number | undefined;
  /** Флаг открытия пикера при фокусе */
  isOpenOnFocus?: boolean;
  /** Флаг отображения иконки */
  withIcon?: boolean;
  /** Флаг использования всплывающего пикера */
  withPicker?: boolean;
  /** Обработчик toggle панели */
  onToggle?: () => void;
  /** Ref для иконки часов */
  iconRef?: RefObject<HTMLDivElement | null>;
}
