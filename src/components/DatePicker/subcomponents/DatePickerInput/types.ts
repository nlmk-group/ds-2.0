import { TLevel } from '@components/DatePicker/types';
import { ENABLED_HOURS_VALUES, sizesMappingInput } from '@components/declaration';

type TEnabledHour = typeof ENABLED_HOURS_VALUES[number];

type TSize = `${sizesMappingInput}`;

export interface IDatePickerInputProps {
  value?: Date;
  valueFrom?: Date;
  valueTo?: Date;
  onChange?: (date: Date) => void;
  onFocus?: () => void;
  onBlur?: (date: Date | null, date2?: Date | null, shiftFrom?: number, shiftTo?: number) => void;
  onEnterKeyDown?: (date: Date | null, date2?: Date | null, shiftFrom?: number, shiftTo?: number) => void;
  onTabKeyDown?: (date: Date | null, date2?: Date | null, shiftFrom?: number, shiftTo?: number) => void;
  disabled?: boolean;
  className?: string;
  showTime?: boolean;
  withPeriod?: boolean;
  enabledFrom?: Date;
  enabledTo?: Date;
  enabledHourFrom?: (date: Date) => TEnabledHour;
  enabledHourTo?: (date: Date) => TEnabledHour;
  enabledMinuteFrom?: (date: Date) => number;
  enabledMinuteTo?: (date: Date) => number;
  shiftFrom?: number;
  shiftTo?: number;
  shiftLength?: 2 | 3;
  withShift?: boolean;
  withSeconds?: boolean;
  level: TLevel;
  label?: string;
  colored?: boolean;
  isOpenOnFocus?: boolean;
  isHideYear?: boolean;
  size?: TSize;
  reset?: boolean;
  onReset?: () => void;
}
