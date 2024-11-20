import { FC, ReactNode } from 'react';

import { LEVEL_MAPPING_ENUM } from '@components/DatePicker/helpers/levelMappingEnum';
import { ENABLED_HOURS_VALUES } from '@components/declaration';
import { TInputProps } from '@components/Input/types';

export type TLevel = `${LEVEL_MAPPING_ENUM}`;
export type TEnabledHour = typeof ENABLED_HOURS_VALUES[number];

export type TOverrideInputProps = {
  value?: Date;
  onChange?: (date: Date) => void;
  onBlur?: () => void;
  onFocus?: () => void;
};

export interface IDatePickerSpecificProps {
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

export interface IDatePickerRegularProps extends IBaseProps {
  type?: 'date';
  value?: Date;
  onChange?: (date: Date) => void;
  level?: TLevel;
}

export interface IDateTimePickerRegularProps extends IDatePickerRegularProps {
  type: 'time';
}

export interface IDateTimeSecondsPickerRegularProps extends IDatePickerRegularProps {
  type: 'seconds';
}

export interface IDatePickerPeriodProps extends IBaseProps {
  type: 'period';
  valueFrom?: Date;
  valueTo?: Date;
  onPeriodChange?: (valueFrom?: Date, valueTo?: Date) => void;
}

export interface IDatePickerPeriodShiftProps extends IBaseProps {
  type: 'shift';
  valueFrom?: Date;
  valueTo?: Date;
  shiftFrom?: number;
  shiftTo?: number;
  shiftLength?: 2 | 3;
  onPeriodChange?: (valueFrom?: Date, valueTo?: Date, shiftFrom?: number, shiftTo?: number) => void;
}

export type TDatePickerProps =
  | IDatePickerRegularProps
  | IDateTimePickerRegularProps
  | IDateTimeSecondsPickerRegularProps
  | IDatePickerPeriodProps
  | IDatePickerPeriodShiftProps;

declare const DatePicker: FC<TDatePickerProps>;

export default DatePicker;
