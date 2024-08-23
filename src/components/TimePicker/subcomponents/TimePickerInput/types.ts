import { ENABLED_HOURS_FROM_VALUES, ENABLED_HOURS_TO_VALUES } from '@components/declaration';

type TEnabledHourFrom = typeof ENABLED_HOURS_FROM_VALUES[number] | undefined;
type TEnabledHourTo = typeof ENABLED_HOURS_TO_VALUES[number] | undefined;

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
  enabledHourFrom?: (date: Date | undefined) => TEnabledHourFrom;
  enabledHourTo?: (date: Date | undefined) => TEnabledHourTo;
  enabledMinuteFrom?: (date: Date | undefined) => number | undefined;
  enabledMinuteTo?: (date: Date | undefined) => number | undefined;
  label?: string;
  colored?: boolean
  isOpenOnFocus?: boolean;
  withIcon?: boolean;
  withPicker?: boolean;
  /** Флаг наличия кнопки сброса */
  reset?: boolean;
  /** Обработчик сброса значения */
  onReset?: () => void;
}
