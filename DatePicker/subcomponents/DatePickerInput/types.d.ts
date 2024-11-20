import { TLevel } from '../../types';
import { ENABLED_HOURS_VALUES } from '../../../declaration';
import { TInputProps } from '../../../Input/types';

type TEnabledHour = typeof ENABLED_HOURS_VALUES[number];
export type TOverrideInputProps = {
    value?: Date;
    onChange?: (date: Date) => void;
    onBlur?: (date: Date | null, date2?: Date | null, shiftFrom?: number, shiftTo?: number) => void;
};
export interface IDatePickerInputSpecificProps {
    valueFrom?: Date;
    valueTo?: Date;
    onFocus?: () => void;
    onEnterKeyDown?: (date: Date | null, date2?: Date | null, shiftFrom?: number, shiftTo?: number) => void;
    onTabKeyDown?: (date: Date | null, date2?: Date | null, shiftFrom?: number, shiftTo?: number) => void;
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
    isOpenOnFocus?: boolean;
    isHideYear?: boolean;
    error?: boolean;
}
export type IDatePickerInputProps = Omit<TInputProps, keyof TOverrideInputProps> & TOverrideInputProps & IDatePickerInputSpecificProps;
export {};
//# sourceMappingURL=types.d.ts.map