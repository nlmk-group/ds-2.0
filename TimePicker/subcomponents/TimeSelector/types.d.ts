import { ENABLED_HOURS_VALUES } from '../../../declaration';

type TEnabledHour = typeof ENABLED_HOURS_VALUES[number] | undefined;
export interface ITimeSelectorProps {
    selectedTime?: Date;
    initialSelectedTimeFirst?: Date;
    initialSelectedTimeSecond?: Date;
    onChangeFirst?: (date: Date) => void;
    onChangeSecond?: (date: Date) => void;
    onChange?: (date: Date) => void;
    value?: Date;
    innerValue?: Date;
    disabled?: boolean;
    isTimeWithSecondsType?: boolean;
    isTimePeriodType?: boolean;
    isTimePeriodWithSecondsType?: boolean;
    enabledHourFrom?: (date: Date | undefined) => TEnabledHour;
    enabledHourTo?: (date: Date | undefined) => TEnabledHour;
    enabledMinuteFrom?: (date: Date | undefined) => number | undefined;
    enabledMinuteTo?: (date: Date | undefined) => number | undefined;
}
export {};
//# sourceMappingURL=types.d.ts.map