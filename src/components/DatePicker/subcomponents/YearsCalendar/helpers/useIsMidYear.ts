import { useCallback } from 'react';

import { normalizeDateToYear } from '@components/DatePicker/subcomponents/YearsCalendar/helpers/normalizeDateToYear';
import { useIsMidYearParams } from '@components/DatePicker/subcomponents/YearsCalendar/types';
import { isAfter, isBefore } from 'date-fns';

export const useIsMidYear = ({
  dateCurrentHover,
  withPeriod,
  dateFrom,
  dateTo
}: useIsMidYearParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod || !dateFrom) {
        return false;
      }
      const normalizedToDate = dateTo && normalizeDateToYear(dateTo);
      const normalizedFromDate = dateFrom && normalizeDateToYear(dateFrom);
      const normalizedDayAsDate = normalizeDateToYear(dayAsDate);
      if (dateCurrentHover) {
        return Boolean(
          (isAfter(normalizedDayAsDate, normalizedFromDate) &&
            isBefore(normalizedDayAsDate, dateCurrentHover)) ||
            (isBefore(normalizedDayAsDate, normalizedFromDate) &&
              isAfter(normalizedDayAsDate, dateCurrentHover))
        );
      } else {
        return Boolean(
          normalizedToDate &&
            isBefore(normalizedDayAsDate, normalizedToDate) &&
            isAfter(normalizedDayAsDate, normalizedFromDate)
        );
      }
    },
    [dateCurrentHover, dateFrom, dateTo, withPeriod]
  );
