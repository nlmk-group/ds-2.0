import { ENABLED_HOURS_VALUES } from '../declaration';

type TEnabledHour = typeof ENABLED_HOURS_VALUES[number] | undefined;
export interface TTimePickerType {
    id?: number | string;
    type?: 'time' | 'timeWithSeconds' | 'period' | 'periodWithSeconds';
    value?: Date;
    onChange?: (date: Date) => void;
    valueFrom?: Date;
    valueTo?: Date;
    onPeriodChange?: (valueFrom?: Date, valueTo?: Date) => void;
    className?: string;
    enabledHourFrom?: (date: Date | undefined) => TEnabledHour;
    enabledHourTo?: (date: Date | undefined) => TEnabledHour;
    enabledMinuteFrom?: (date: Date | undefined) => number;
    enabledMinuteTo?: (date: Date | undefined) => number;
    disabled?: boolean;
    label?: string;
    disabledPanel?: boolean;
    name?: string;
    withPortal?: boolean;
    error?: boolean;
    isOpenOnFocus?: boolean;
    pseudo?: boolean;
    withIcon?: boolean;
    withPicker?: boolean;
    colored?: boolean;
    reset?: boolean;
    onReset?: () => void;
}
export type TDateValues = {
    valueFrom: Date | undefined;
    valueTo: Date | undefined;
};
export {};
//# sourceMappingURL=types.d.ts.map