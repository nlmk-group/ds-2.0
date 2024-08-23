import { ReactNode } from 'react';

import { IFooterProps } from '@components/DatePicker/subcomponents/Footer/types';
import { IPeriodPickerProps } from '@components/DatePicker/subcomponents/PeriodPicker/types';
import { TLevel } from '@components/DatePicker/types';

export interface ICommonCalendarProps extends IPeriodPickerProps, Omit<IFooterProps, 'className'> {
  period?: ReactNode;
  level: TLevel;
  timeSlot?: ReactNode;
  showFooter?: boolean;
  disableContentOfPeriodPicker?: boolean;
  children?: ReactNode;
  showShiftsSelector?: boolean;
  shiftFrom?: number;
  shiftTo?: number;
  shiftLength?: 2 | 3;
  disableChange?: boolean;
  withSeconds?: boolean;
  onChangeShiftFrom: (value: number) => void;
  onChangeShiftTo: (value: number) => void;
  isHideYear: boolean;
  selectedPanel: TLevel;

  [key: string]: any;
}
