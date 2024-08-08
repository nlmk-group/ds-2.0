import { ENABLED_HOURS_FROM_VALUES, ENABLED_HOURS_TO_VALUES } from '../../../declaration';

type TEnabledHourFrom = typeof ENABLED_HOURS_FROM_VALUES[number] | undefined;
type TEnabledHourTo = typeof ENABLED_HOURS_TO_VALUES[number] | undefined;
export interface ITimeSelectorProps {
    selectedTime?: Date;
    onChange?: (date: Date) => void;
    value?: Date;
    innerValue?: Date;
    disabled?: boolean;
    isTimeWithSecondsType?: boolean;
    enabledHourFrom?: (date: Date | undefined) => TEnabledHourFrom;
    enabledHourTo?: (date: Date | undefined) => TEnabledHourTo;
    enabledMinuteFrom?: (date: Date | undefined) => number | undefined;
    enabledMinuteTo?: (date: Date | undefined) => number | undefined;
}
export {};
//# sourceMappingURL=types.d.ts.map