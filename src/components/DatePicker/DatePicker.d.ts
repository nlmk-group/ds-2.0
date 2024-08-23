import { FC, ReactNode } from 'react';

import { LEVEL_MAPPING_ENUM } from '@components/DatePicker/helpers/levelMappingEnum';
import { ENABLED_HOURS_FROM_VALUES, ENABLED_HOURS_TO_VALUES, sizesMappingInput } from '@components/declaration';

export type TLevel = `${LEVEL_MAPPING_ENUM}`;
export type TEnabledHourFrom = typeof ENABLED_HOURS_FROM_VALUES[number];
export type TEnabledHourTo = typeof ENABLED_HOURS_TO_VALUES[number];

export interface IBaseProps {
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
  withoutWeekdays?: boolean;
  onPanelChange?: (date: Date) => void;
  onSelect?: (date: Date) => void;
  infiniteTimeScroll?: boolean;
  reset?: boolean;
  onReset?: () => void;
}

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
