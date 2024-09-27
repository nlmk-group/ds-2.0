import { ENABLED_HOURS_VALUES } from '@components/declaration';

type TEnabledHour = typeof ENABLED_HOURS_VALUES[number];

export interface ITimeSelectorProps {
  selectedTime?: Date;
  withSeconds?: boolean;
  onChange?: (date: Date) => void;
  value?: Date;
  innerValue?: Date;
  disabled?: boolean;
  enabledHourFrom?: (date: Date | undefined) => TEnabledHour;
  enabledHourTo?: (date: Date | undefined) => TEnabledHour;
  enabledMinuteFrom?: (date: Date | undefined) => number;
  enabledMinuteTo?: (date: Date | undefined) => number;
  infiniteTimeScroll?: boolean;
}
