import { FC, ReactNode } from 'react';

import { LEVEL_MAPPING_ENUM } from '@components/DatePicker/helpers/levelMappingEnum';
import { ENABLED_HOURS_VALUES } from '@components/declaration';
import { TInputProps } from '@components/Input/types';

/**
 * Тип уровня детализации выбора даты (день, месяц, квартал, год)
 */
export type TLevel = `${LEVEL_MAPPING_ENUM}`;

/**
 * Допустимые значения для минимального/максимального часа
 */
export type TEnabledHour = typeof ENABLED_HOURS_VALUES[number];

/**
 * Свойства инпута, которые переопределяют стандартные
 */
export type TOverrideInputProps = {
  /** Выбранное значение даты */
  value?: Date;
  /** Обработчик изменения даты */
  onChange?: (date: Date) => void;
  /** Обработчик потери фокуса инпутом */
  onBlur?: () => void;
  /** Обработчик получения фокуса инпутом или клика по иконке календаря */
  onFocus?: () => void;
};

/**
 * Специфичные свойства для DatePicker
 */
export interface IDatePickerSpecificProps {
  /** ID контейнера для портала */
  portalContainerId?: string;
  /** Локаль для форматирования дат */
  locale?: string;
  /** Минимальная доступная дата */
  enabledFrom?: Date;
  /** Максимальная доступная дата */
  enabledTo?: Date;
  /** Функция для определения минимального доступного часа */
  enabledHourFrom?: (date: Date) => TEnabledHour;
  /** Функция для определения максимального доступного часа */
  enabledHourTo?: (date: Date) => TEnabledHour;
  /** Функция для определения минимальной доступной минуты */
  enabledMinuteFrom?: (date: Date) => number;
  /** Функция для определения максимальной доступной минуты */
  enabledMinuteTo?: (date: Date) => number;
  /** Флаг для отключения возможности изменения */
  disableChange?: boolean;
  /** Флаг для рендеринга в портале */
  withPortal?: boolean;
  /** Флаг для отключения изменений при потере фокуса */
  disableChangesOnBlur?: boolean;
  /** Флаг для открытия пикера при фокусе */
  isOpenOnFocus?: boolean;
  /** Флаг для отображения псевдо-инпута */
  pseudo?: boolean;
  /** Содержимое для псевдо-инпута */
  pseudoChildren?: ReactNode;
  /** Флаг для скрытия года */
  isHideYear?: boolean;
  /** Флаг для отображения без дней недели */
  withoutWeekdays?: boolean;
  /** Обработчик изменения панели */
  onPanelChange?: (date: Date) => void;
  /** Обработчик выбора даты */
  onSelect?: (date: Date) => void;
  /** Флаг для бесконечной прокрутки времени */
  infiniteTimeScroll?: boolean;
  /** Флаг ошибки, влияет на стиль компонента */
  error?: boolean;
  /** Вспомогательный текст под инпутом */
  helperText?: string;
  /** Флаг наличия кнопки сброса */
  reset?: boolean;
  /** Обработчик сброса значения */
  onReset?: () => void;
}

/**
 * Базовые свойства DatePicker, объединяющие стандартные свойства инпута и специфичные для DatePicker
 */
export type IBaseProps = Omit<TInputProps, keyof TOverrideInputProps> & TOverrideInputProps & IDatePickerSpecificProps;

/**
 * Свойства для обычного DatePicker с типом 'date'
 */
export interface IDatePickerRegularProps extends IBaseProps {
  /** Тип пикера (обычный выбор даты) */
  type?: 'date';
  /** Выбранное значение даты */
  value?: Date;
  /** Обработчик изменения даты */
  onChange?: (date: Date) => void;
  /** Уровень детализации выбора даты */
  level?: TLevel;
}

/**
 * Свойства для DatePicker с выбором времени
 */
export interface IDateTimePickerRegularProps extends IDatePickerRegularProps {
  /** Тип пикера (с выбором времени) */
  type: 'time';
}

/**
 * Свойства для DatePicker с выбором времени с секундами
 */
export interface IDateTimeSecondsPickerRegularProps extends IDatePickerRegularProps {
  /** Тип пикера (с выбором времени с секундами) */
  type: 'seconds';
}

/**
 * Свойства для DatePicker с выбором периода (без смен)
 */
export interface IDatePickerPeriodProps extends IBaseProps {
  /** Тип пикера (с выбором периода) */
  type: 'period';
  /** Значение начала выбранного периода */
  valueFrom?: Date;
  /** Значение конца выбранного периода */
  valueTo?: Date;
  /** Обработчик изменения периода */
  onPeriodChange?: (valueFrom?: Date, valueTo?: Date) => void;
}

/**
 * Свойства для DatePicker с выбором периода и смен
 */
export interface IDatePickerPeriodShiftProps extends IBaseProps {
  /** Тип пикера (с выбором периода и смен) */
  type: 'shift';
  /** Значение начала выбранного периода */
  valueFrom?: Date;
  /** Значение конца выбранного периода */
  valueTo?: Date;
  /** Значение начальной смены */
  shiftFrom?: number;
  /** Значение конечной смены */
  shiftTo?: number;
  /** Длина смены (количество смен в сутки) */
  shiftLength?: 2 | 3;
  /** Обработчик изменения периода и смен */
  onPeriodChange?: (valueFrom?: Date, valueTo?: Date, shiftFrom?: number, shiftTo?: number) => void;
}

/**
 * Все возможные варианты свойств компонента DatePicker
 */
export type TDatePickerProps =
  | IDatePickerRegularProps
  | IDateTimePickerRegularProps
  | IDateTimeSecondsPickerRegularProps
  | IDatePickerPeriodProps
  | IDatePickerPeriodShiftProps;

/**
 * Компонент DatePicker для выбора даты и времени в различных форматах.
 * Поддерживает выбор одиночной даты, периода, времени, смен.
 */
declare const DatePicker: FC<TDatePickerProps>;

export default DatePicker;
