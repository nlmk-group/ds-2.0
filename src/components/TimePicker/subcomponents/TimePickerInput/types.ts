import { ENABLED_HOURS_VALUES } from '@components/declaration';

type TEnabledHour = typeof ENABLED_HOURS_VALUES[number] | undefined;

export interface ITimePickerInputProps {
  value?: Date;
  valueFrom?: Date;
  valueTo?: Date;
  onChange?: (date: Date) => void;
  onFocus?: () => void;
  onBlur?: (date: Date | null, date2?: Date | null) => void;
  onEnterKeyDown?: (date: Date | null, date2?: Date | null) => void;
  onTabKeyDown?: (date: Date | null, date2?: Date | null) => void;
  disabled?: boolean;
  className?: string;
  isTimeType?: boolean;
  isTimeWithSecondsType?: boolean;
  isTimePeriodType?: boolean;
  isTimePeriodWithSecondsType?: boolean;
  enabledHourFrom?: (date: Date | undefined) => TEnabledHour;
  enabledHourTo?: (date: Date | undefined) => TEnabledHour;
  enabledMinuteFrom?: (date: Date | undefined) => number | undefined;
  enabledMinuteTo?: (date: Date | undefined) => number | undefined;
  label?: string;
  colored?: boolean;
  isOpenOnFocus?: boolean;
  withIcon?: boolean;
  withPicker?: boolean;
  /** Флаг наличия кнопки сброса */
  reset?: boolean;
  /** Обработчик сброса значения */
  onReset?: () => void;
}
