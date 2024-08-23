import { IUseIsSelectedMonthParams } from '@components/DatePicker/subcomponents/MonthsCalendar/types';
import { isAfter, isBefore, isEqual } from 'date-fns';

export const useIsSelectedMonth =
  ({ withPeriod, dateFrom, dateTo, selectedDate, panelValue }: IUseIsSelectedMonthParams) =>
    (dayAsDate: Date) => {
      return Boolean(
        withPeriod
          ? (withPeriod && dateFrom && dateTo && isBefore(dayAsDate, dateTo) && isAfter(dayAsDate, dateFrom)) ||
            (withPeriod && dateTo && isEqual(dateTo, dayAsDate)) ||
            (withPeriod && dateFrom && isEqual(dateFrom, dayAsDate))
          : selectedDate?.getFullYear() === panelValue?.getFullYear() && selectedDate?.getMonth() === dayAsDate.getMonth()
      );
    };
