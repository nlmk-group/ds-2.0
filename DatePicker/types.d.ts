import { FC, ReactNode } from 'react';
import { LEVEL_MAPPING_ENUM } from '../DatePicker/helpers/levelMappingEnum';
import { ENABLED_HOURS_FROM_VALUES, ENABLED_HOURS_TO_VALUES, sizesMappingInput } from '../declaration';
export type TLevel = `${LEVEL_MAPPING_ENUM}`;
export type TEnabledHourFrom = typeof ENABLED_HOURS_FROM_VALUES[number];
export type TEnabledHourTo = typeof ENABLED_HOURS_TO_VALUES[number];
export interface BaseProps {
    id?: number | string;
    portalContainerId?: string;
    locale?: string;
    className?: string;
    enabledFrom?: Date;
    enabledTo?: Date;
    enabledHourFrom?: (date: Date) => TEnabledHourFrom;
    enabledHourTo?: (date: Date) => TEnabledHourTo;
    enabledMinuteFrom?: (date: Date) => number;
    enabledMinuteTo?: (date: Date) => number;
    disabled?: boolean;
    label?: string;
    disableChange?: boolean;
    name?: string;
    withPortal?: boolean;
    error?: boolean;
    colored?: boolean;
    disableChangesOnBlur?: boolean;
    isOpenOnFocus?: boolean;
    pseudo?: boolean;
    pseudoChildren?: ReactNode;
    isHideYear?: boolean;
    size?: sizesMappingInput;
}
export interface BaseRegularProps extends BaseProps {
    value?: Date;
    shiftFrom?: undefined;
    shiftTo?: undefined;
    shiftLength?: 2 | 3;
    onChange?: (date: Date) => void;
    valueFrom?: undefined;
    valueTo?: undefined;
    onPeriodChange?: undefined;
    level?: TLevel;
}
export interface DatePickerRegularProps extends BaseRegularProps {
    type?: 'date';
}
export interface DateTimePickerRegularProps extends BaseRegularProps {
    type?: 'time';
}
export interface DateTimeSecondsPickerRegularProps extends BaseRegularProps {
    type?: 'seconds';
}
export interface BasePeriodProps extends BaseProps {
    valueFrom?: Date;
    valueTo?: Date;
    onChange?: undefined;
    value?: undefined;
    level?: undefined;
}
export interface DatePickerPeriodProps extends BasePeriodProps {
    shiftFrom?: undefined;
    shiftTo?: undefined;
    shiftLength?: 2 | 3;
    onPeriodChange?: (valueFrom?: Date, valueTo?: Date) => void;
    type?: 'period';
}
export interface DatePickerUnFullPeriodProps extends BaseProps {
    valueFrom?: Date;
    valueTo?: Date;
    onChange?: undefined;
    value?: undefined;
    shiftFrom?: undefined;
    shiftTo?: undefined;
    shiftLength?: 2 | 3;
    onPeriodChange?: (valueFrom?: Date, valueTo?: Date) => void;
    type?: 'period';
    level?: TLevel;
}
export interface DatePickerPeriodShiftProps extends BasePeriodProps {
    shiftFrom?: number;
    shiftTo?: number;
    shiftLength?: 2 | 3;
    onPeriodChange?: (valueFrom?: Date, valueTo?: Date, shiftFrom?: number, shiftTo?: number) => void;
    type?: 'shift';
}
export type TDatePickerProps = FC<DatePickerRegularProps | DateTimePickerRegularProps | DateTimeSecondsPickerRegularProps | DatePickerPeriodProps | DatePickerUnFullPeriodProps | DatePickerPeriodShiftProps>;
export type TDateValues = {
    valueFrom: Date | undefined;
    valueTo: Date | undefined;
};
export type TShiftValues = {
    shiftFrom: number | undefined;
    shiftTo: number | undefined;
};
//# sourceMappingURL=types.d.ts.map