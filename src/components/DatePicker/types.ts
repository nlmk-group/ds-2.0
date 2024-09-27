import { FC, ReactNode } from 'react';

import { LEVEL_MAPPING_ENUM } from '@components/DatePicker/helpers/levelMappingEnum';
import { sizesMappingInput } from '@components/declaration';
import { ENABLED_HOURS_VALUES } from '@components/declaration/constants/enabledHours';

export type TLevel = `${LEVEL_MAPPING_ENUM}`;

export type TEnabledHour = typeof ENABLED_HOURS_VALUES[number];

export interface IBaseProps {
  id?: number | string;
  portalContainerId?: string;
  locale?: string;
  className?: string;
  enabledFrom?: Date;
  enabledTo?: Date;
  enabledHourFrom?: (date: Date) => TEnabledHour;
  enabledHourTo?: (date: Date) => TEnabledHour;
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

export type TDatePickerProps = FC<
  | IDatePickerRegularProps
  | IDateTimePickerRegularProps
  | IDateTimeSecondsPickerRegularProps
  | IDatePickerPeriodProps
  | IDatePickerUnFullPeriodProps
  | IDatePickerPeriodShiftProps
>;

export type TDateValues = {
  valueFrom: Date | undefined;
  valueTo: Date | undefined;
};

export type TShiftValues = {
  shiftFrom: number | undefined;
  shiftTo: number | undefined;
};
