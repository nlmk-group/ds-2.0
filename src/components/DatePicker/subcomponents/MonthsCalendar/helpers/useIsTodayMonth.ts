import { useIsTodayMonthParams } from '@components/DatePicker/subcomponents/MonthsCalendar/types';

export const useIsTodayMonth =
  ({ panelValue }: useIsTodayMonthParams) =>
    (monthNumber: number) => {
      return Boolean(
        new Date().getMonth() === monthNumber &&
        new Date().getFullYear() === panelValue?.getFullYear()
      );
    };
