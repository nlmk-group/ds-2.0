import { FC, ReactNode } from '../../../node_modules/react';
import { LEVEL_MAPPING_ENUM } from './helpers/levelMappingEnum';
import { ENABLED_HOURS_VALUES } from '../declaration/constants/enabledHours';
import { TInputProps } from '../Input/types';

export type TLevel = `${LEVEL_MAPPING_ENUM}`;
export type TEnabledHour = typeof ENABLED_HOURS_VALUES[number];
type TOverrideInputProps = {
    value?: Date;
    onChange?: (date: Date) => void;
    onBlur?: () => void;
    onFocus?: () => void;
};
interface IDatePickerSpecificProps {
    portalContainerId?: string;
    locale?: string;
    enabledFrom?: Date;
    enabledTo?: Date;
    enabledHourFrom?: (date: Date) => TEnabledHour;
    enabledHourTo?: (date: Date) => TEnabledHour;
    enabledMinuteFrom?: (date: Date) => number;
    enabledMinuteTo?: (date: Date) => number;
    disableChange?: boolean;
    withPortal?: boolean;
    disableChangesOnBlur?: boolean;
    isOpenOnFocus?: boolean;
    pseudo?: boolean;
    pseudoChildren?: ReactNode;
    isHideYear?: boolean;
    withoutWeekdays?: boolean;
    onPanelChange?: (date: Date) => void;
    onSelect?: (date: Date) => void;
    infiniteTimeScroll?: boolean;
    error?: boolean;
}
export type IBaseProps = Omit<TInputProps, keyof TOverrideInputProps> & TOverrideInputProps & IDatePickerSpecificProps;
export interface IBaseRegularProps extends IBaseProps {
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
export interface IDatePickerRegularProps extends IBaseRegularProps {
    type?: 'date';
}
export interface IDateTimePickerRegularProps extends IBaseRegularProps {
    type?: 'time';
}
export interface IDateTimeSecondsPickerRegularProps extends IBaseRegularProps {
    type?: 'seconds';
}
export interface IBasePeriodProps extends IBaseProps {
    valueFrom?: Date;
    valueTo?: Date;
    onChange?: undefined;
    value?: undefined;
    level?: undefined;
}
export interface IDatePickerPeriodProps extends IBasePeriodProps {
    shiftFrom?: undefined;
    shiftTo?: undefined;
    shiftLength?: 2 | 3;
    onPeriodChange?: (valueFrom?: Date, valueTo?: Date) => void;
    type?: 'period';
}
export interface IDatePickerUnFullPeriodProps extends IBaseProps {
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
export interface IDatePickerPeriodShiftProps extends IBasePeriodProps {
    shiftFrom?: number;
    shiftTo?: number;
    shiftLength?: 2 | 3;
    onPeriodChange?: (valueFrom?: Date, valueTo?: Date, shiftFrom?: number, shiftTo?: number) => void;
    type?: 'shift';
}
export type TDatePickerProps = FC<IDatePickerRegularProps | IDateTimePickerRegularProps | IDateTimeSecondsPickerRegularProps | IDatePickerPeriodProps | IDatePickerUnFullPeriodProps | IDatePickerPeriodShiftProps>;
export type TDateValues = {
    valueFrom: Date | undefined;
    valueTo: Date | undefined;
};
export type TShiftValues = {
    shiftFrom: number | undefined;
    shiftTo: number | undefined;
};
export {};
//# sourceMappingURL=types.d.ts.map