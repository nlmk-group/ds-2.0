import { IUseIsTodayMonthParams } from '@components/DatePicker/subcomponents/MonthsCalendar/types';

export const useIsTodayMonth =
  ({ panelValue }: IUseIsTodayMonthParams) =>
    (monthNumber: number) => {
      return Boolean(new Date().getMonth() === monthNumber && new Date().getFullYear() === panelValue?.getFullYear());
    };
