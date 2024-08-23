import { IDayProps } from '@components/DatePicker/subcomponents/Day/types';

export type TValue = { value: number; label: string };

export interface IInfiniteContainerProps extends IDayProps {
  values: Array<TValue>;
  selectedTime?: Date;
  handleMinuteClick: (value: number) => void;
  container?: null | HTMLDivElement;
  getSelected?: (value: number, selectedTime?: Date) => boolean;
}
