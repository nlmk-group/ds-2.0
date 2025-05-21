import { FC, ReactNode } from 'react';

import { LEVEL_MAPPING_ENUM } from '@components/DatePicker/helpers/levelMappingEnum';
import { ENABLED_HOURS_VALUES } from '@components/declaration/constants/enabledHours';
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
type TOverrideInputProps = {
  value?: Date;
  onChange?: (date: Date) => void;
  /** Обработчик потери фокуса инпутом */
  onBlur?: () => void;
  /** Обработчик получения фокуса инпутом или клика по иконке календаря */
  onFocus?: () => void;
};

interface IDatePickerSpecificProps {
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
}

/**
 * Базовые свойства DatePicker, объединяющие стандартные свойства инпута и специфичные для DatePicker
 */
export type IBaseProps = Omit<TInputProps, keyof TOverrideInputProps> & TOverrideInputProps & IDatePickerSpecificProps;

/**
 * Базовые свойства для обычного DatePicker с одиночной датой
 */
export interface IBaseRegularProps extends IBaseProps {
  /** Выбранное значение даты */
  value?: Date;
  /** Значение начальной смены (не используется) */
  shiftFrom?: undefined;
  /** Значение конечной смены (не используется) */
  shiftTo?: undefined;
  /** Длина смены (количество смен в сутки) */
  shiftLength?: 2 | 3;
  /** Обработчик изменения даты */
  onChange?: (date: Date) => void;
  /** Значение начала периода (не используется) */
  valueFrom?: undefined;
  /** Значение конца периода (не используется) */
  valueTo?: undefined;
  /** Обработчик изменения периода (не используется) */
  onPeriodChange?: undefined;
  /** Уровень детализации выбора даты */
  level?: TLevel;
}

/**
 * Свойства для обычного DatePicker с типом 'date'
 */
export interface IDatePickerRegularProps extends IBaseRegularProps {
  /** Тип пикера (обычный выбор даты) */
  type?: 'date';
}

/**
 * Свойства для DatePicker с выбором времени
 */
export interface IDateTimePickerRegularProps extends IBaseRegularProps {
  /** Тип пикера (с выбором времени) */
  type?: 'time';
}

/**
 * Свойства для DatePicker с выбором времени с секундами
 */
export interface IDateTimeSecondsPickerRegularProps extends IBaseRegularProps {
  /** Тип пикера (с выбором времени с секундами) */
  type?: 'seconds';
}

/**
 * Базовые свойства для DatePicker с выбором периода
 */
export interface IBasePeriodProps extends IBaseProps {
  /** Значение начала выбранного периода */
  valueFrom?: Date;
  /** Значение конца выбранного периода */
  valueTo?: Date;
  /** Обработчик изменения даты (не используется) */
  onChange?: undefined;
  /** Выбранное значение даты (не используется) */
  value?: undefined;
  /** Уровень детализации (не используется) */
  level?: undefined;
}

/**
 * Свойства для DatePicker с выбором периода (без смен)
 */
export interface IDatePickerPeriodProps extends IBasePeriodProps {
  /** Значение начальной смены (не используется) */
  shiftFrom?: undefined;
  /** Значение конечной смены (не используется) */
  shiftTo?: undefined;
  /** Длина смены (количество смен в сутки) */
  shiftLength?: 2 | 3;
  /** Обработчик изменения периода */
  onPeriodChange?: (valueFrom?: Date, valueTo?: Date) => void;
  /** Тип пикера (с выбором периода) */
  type?: 'period';
}

/**
 * Свойства для DatePicker с выбором периода с поддержкой уровня детализации
 */
export interface IDatePickerUnFullPeriodProps extends IBaseProps {
  /** Значение начала выбранного периода */
  valueFrom?: Date;
  /** Значение конца выбранного периода */
  valueTo?: Date;
  /** Обработчик изменения даты (не используется) */
  onChange?: undefined;
  /** Выбранное значение даты (не используется) */
  value?: undefined;
  /** Значение начальной смены (не используется) */
  shiftFrom?: undefined;
  /** Значение конечной смены (не используется) */
  shiftTo?: undefined;
  /** Длина смены (количество смен в сутки) */
  shiftLength?: 2 | 3;
  /** Обработчик изменения периода */
  onPeriodChange?: (valueFrom?: Date, valueTo?: Date) => void;
  /** Тип пикера (с выбором периода) */
  type?: 'period';
  /** Уровень детализации выбора даты */
  level?: TLevel;
}

/**
 * Свойства для DatePicker с выбором периода и смен
 */
export interface IDatePickerPeriodShiftProps extends IBasePeriodProps {
  /** Значение начальной смены */
  shiftFrom?: number;
  /** Значение конечной смены */
  shiftTo?: number;
  /** Длина смены (количество смен в сутки) */
  shiftLength?: 2 | 3;
  /** Обработчик изменения периода и смен */
  onPeriodChange?: (valueFrom?: Date, valueTo?: Date, shiftFrom?: number, shiftTo?: number) => void;
  /** Тип пикера (с выбором периода и смен) */
  type?: 'shift';
}

/**
 * Тип функционального компонента DatePicker, объединяющий все возможные варианты использования
 */
export type TDatePickerProps = FC<
  | IDatePickerRegularProps
  | IDateTimePickerRegularProps
  | IDateTimeSecondsPickerRegularProps
  | IDatePickerPeriodProps
  | IDatePickerUnFullPeriodProps
  | IDatePickerPeriodShiftProps
>;

/**
 * Тип для внутреннего хранения значений периода в компоненте
 */
export type TDateValues = {
  /** Значение начала выбранного периода */
  valueFrom: Date | undefined;
  /** Значение конца выбранного периода */
  valueTo: Date | undefined;
};

/**
 * Тип для внутреннего хранения значений смен в компоненте
 */
export type TShiftValues = {
  /** Значение начальной смены */
  shiftFrom: number | undefined;
  /** Значение конечной смены */
  shiftTo: number | undefined;
};
