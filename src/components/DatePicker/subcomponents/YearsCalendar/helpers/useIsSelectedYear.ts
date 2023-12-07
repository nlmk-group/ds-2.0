import { useCallback } from 'react';

import { normalizeDateToYear } from '@components/DatePicker/subcomponents/YearsCalendar/helpers/normalizeDateToYear';
import { useIsSelectedYearParams } from '@components/DatePicker/subcomponents/YearsCalendar/types';
import { isAfter, isBefore, isEqual } from 'date-fns';

export const useIsSelectedYear = ({
  withPeriod,
  dateFrom,
  dateTo,
  selectedDate,
  dateCurrentHover
}: useIsSelectedYearParams) =>
  useCallback(
    (dayAsDate: Date) => {
      const normalizedToDate = dateTo && normalizeDateToYear(dateTo);
      const normalizedFromDate = dateFrom && normalizeDateToYear(dateFrom);
      const normalizedDayAsDate = normalizeDateToYear(dayAsDate);

      if (withPeriod) {
        return Boolean(
          (normalizedFromDate &&
            normalizedToDate &&
            isBefore(normalizedDayAsDate, normalizedToDate) &&
            isAfter(normalizedDayAsDate, normalizedFromDate)) ||
            (normalizedToDate &&
              isEqual(normalizedToDate, normalizedDayAsDate)) ||
            (normalizedFromDate &&
              isEqual(normalizedFromDate, normalizedDayAsDate))
        );
      } else {
        return Boolean(
          selectedDate?.getFullYear() === normalizedDayAsDate.getFullYear()
        );
      }
    },
    [dateFrom, selectedDate, dateTo, withPeriod, dateCurrentHover]
  );
