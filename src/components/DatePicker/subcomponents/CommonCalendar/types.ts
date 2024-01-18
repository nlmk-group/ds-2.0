import { ReactNode } from 'react';

import { FooterProps } from '@components/DatePicker/subcomponents/Footer/types';
import { PeriodPickerProps } from '@components/DatePicker/subcomponents/PeriodPicker/types';
import { TLevel } from '@components/DatePicker/types';

export interface CommonCalendarProps extends PeriodPickerProps, Omit<FooterProps, 'className'> {
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
