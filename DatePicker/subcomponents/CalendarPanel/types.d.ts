import { CALENDAR_FORMAT_ENUM } from '../../helpers';
import { TLevel } from '../../types';
import { ENABLED_HOURS_FROM_VALUES, ENABLED_HOURS_TO_VALUES } from '../../../declaration';

type TEnabledHourFrom = typeof ENABLED_HOURS_FROM_VALUES[number];
type TEnabledHourTo = typeof ENABLED_HOURS_TO_VALUES[number];
export interface ICalendarPanelProps {
    type: `${CALENDAR_FORMAT_ENUM}`;
    withTime?: boolean;
    value?: Date;
    enabledFrom?: Date;
    enabledTo?: Date;
    enabledHourFrom?: (date: Date | undefined) => TEnabledHourFrom;
    enabledHourTo?: (date: Date | undefined) => TEnabledHourTo;
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
export {};
//# sourceMappingURL=types.d.ts.map