import { ENABLED_HOURS_VALUES } from '@components/declaration';

type TEnabledHour = typeof ENABLED_HOURS_VALUES[number] | undefined;

export interface ITimeSelectorProps {
  selectedTime?: Date;
  onChange?: (date: Date) => void;
  value?: Date;
  innerValue?: Date;
  disabled?: boolean;
  isTimeWithSecondsType?: boolean;
  enabledHourFrom?: (date: Date | undefined) => TEnabledHour;
  enabledHourTo?: (date: Date | undefined) => TEnabledHour;
  enabledMinuteFrom?: (date: Date | undefined) => number | undefined;
  enabledMinuteTo?: (date: Date | undefined) => number | undefined;
}
