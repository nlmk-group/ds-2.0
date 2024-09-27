import { CALENDAR_FORMAT_ENUM } from '@components/DatePicker/helpers';
import { TLevel } from '@components/DatePicker/types';
import { ENABLED_HOURS_VALUES } from '@components/declaration';

type TEnabledHour = typeof ENABLED_HOURS_VALUES[number];

export interface ICalendarPanelProps {
  type: `${CALENDAR_FORMAT_ENUM}`;
  withTime?: boolean;
  value?: Date;
  enabledFrom?: Date;
  enabledTo?: Date;
  enabledHourFrom?: (date: Date | undefined) => TEnabledHour;
  enabledHourTo?: (date: Date | undefined) => TEnabledHour;
  onClose: () => void;
  onChange?: (date: Date) => void;
  onPeriodChange?: (valueFrom?: Date, valueTo?: Date, shiftFrom?: number, shiftTo?: number) => void;
  onReset: () => void;
  valueFrom?: Date;
  valueTo?: Date;
  withPeriod?: boolean;
  withShift?: boolean;
  shiftFrom?: number;
  shiftTo?: number;
  shiftLength?: 2 | 3;
  disableChange?: boolean;
  withSeconds?: boolean;
  level: TLevel;
  disableChangesOnBlur?: boolean;
  isOpenOnFocus?: boolean;
  isHideYear: boolean;
  onPanelChange?: (date: Date) => void;
  onSelect?: (date: Date) => void;
  [key: string]: any;
  infiniteTimeScroll?: boolean;
}
