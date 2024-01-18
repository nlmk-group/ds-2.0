import { useCallback } from 'react';

import { normalizeDateToMonth } from '@components/DatePicker/subcomponents/MonthsCalendar/helpers/normalizeDateToMonth';
import { useIsMidMonthParams } from '@components/DatePicker/subcomponents/MonthsCalendar/types';
import { isAfter, isBefore } from 'date-fns';

export const useIsMidMonth = ({ dateCurrentHover, withPeriod, dateFrom, dateTo }: useIsMidMonthParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod || !dateFrom) {
        return false;
      }
      const normalizedDateFrom = dateFrom && normalizeDateToMonth(dateFrom);
      const normalizedDateTo = dateTo && normalizeDateToMonth(dateTo);
      const normalizedDayAsDate = normalizeDateToMonth(dayAsDate);
      if (dateCurrentHover) {
        return Boolean(
          (isAfter(normalizedDayAsDate, normalizedDateFrom) && isBefore(normalizedDayAsDate, dateCurrentHover)) ||
            (isBefore(normalizedDayAsDate, normalizedDateFrom) && isAfter(normalizedDayAsDate, dateCurrentHover))
        );
      } else {
        return Boolean(
          normalizedDateTo &&
            isBefore(normalizedDayAsDate, normalizedDateTo) &&
            isAfter(normalizedDayAsDate, normalizedDateFrom)
        );
      }
    },
    [dateCurrentHover, withPeriod, dateFrom, dateTo]
  );
