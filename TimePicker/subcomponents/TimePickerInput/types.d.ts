import { ENABLED_HOURS_VALUES } from '../../../declaration';

type TEnabledHour = typeof ENABLED_HOURS_VALUES[number] | undefined;
export interface ITimePickerInputProps {
    value?: Date;
    valueFrom?: Date;
    valueTo?: Date;
    selectedTimeFirst?: Date;
    selectedTimeSecond?: Date;
    onChangeFirst?: (date: Date) => void;
    onChangeSecond?: (date: Date | undefined) => void;
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
    reset?: boolean;
    onReset?: () => void;
}
export {};
//# sourceMappingURL=types.d.ts.map