import { FC } from 'react';

export type TEnabledHour = number | undefined;

export enum ETimePickerTypes {
  time = 'time',
  timeWithSeconds = 'timeWithSeconds',
  period = 'period',
  periodWithSeconds = 'periodWithSeconds'
}

export interface ITimePickerProps {
  id?: number | string;
  type?: `${ETimePickerTypes}`;
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

declare const TimePicker: FC<ITimePickerProps>;

export default TimePicker;
