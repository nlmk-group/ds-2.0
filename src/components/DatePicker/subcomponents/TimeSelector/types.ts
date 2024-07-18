import { ENABLED_HOURS_FROM_VALUES, ENABLED_HOURS_TO_VALUES } from '@components/declaration';

type TEnabledHourFrom = typeof ENABLED_HOURS_FROM_VALUES[number];
type TEnabledHourTo = typeof ENABLED_HOURS_TO_VALUES[number];

export interface TimeSelectorProps {
  selectedTime?: Date;
  withSeconds?: boolean;
  onChange?: (date: Date) => void;
  value?: Date;
  innerValue?: Date;
  disabled?: boolean;
  enabledHourFrom?: (date: Date | undefined) => TEnabledHourFrom;
  enabledHourTo?: (date: Date | undefined) => TEnabledHourTo;
  enabledMinuteFrom?: (date: Date | undefined) => number;
  enabledMinuteTo?: (date: Date | undefined) => number;
  infiniteTimeScroll?: boolean;
}

