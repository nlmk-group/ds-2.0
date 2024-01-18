import { useCallback } from 'react';

import { normalizeDateToDay } from '@components/DatePicker/subcomponents/DaysCalendar/helpers/normalizeDateToDay';
import { useIsDaySelectedParams } from '@components/DatePicker/subcomponents/DaysCalendar/types';
import { isAfter, isBefore, isEqual } from 'date-fns';

export const useIsDaySelected = ({
  withPeriod,
  dateFrom,
  dateTo,
  withTime,
  selectedDate,
  dateCurrentHover
}: useIsDaySelectedParams) =>
  useCallback(
    (dayAsDate: Date) => {
      const normalizedDayAsDate = normalizeDateToDay(dayAsDate);
      const normalizedSelectedDate = selectedDate && normalizeDateToDay(selectedDate);
      if (withPeriod) {
        if (dateFrom && dateTo) {
          return Boolean(
            (isBefore(normalizedDayAsDate, dateTo) && isAfter(normalizedDayAsDate, dateFrom)) ||
              isEqual(dateTo, normalizedDayAsDate) ||
              isEqual(dateFrom, normalizedDayAsDate)
          );
        } else if (dateFrom && !dateTo && dateCurrentHover) {
          return isEqual(dayAsDate, dateFrom);
        }
      } else {
        if (withTime) {
          return Boolean(normalizedSelectedDate && isEqual(normalizedSelectedDate, normalizedDayAsDate));
        }
        return Boolean(
          normalizedSelectedDate &&
            isEqual(
              new Date(
                normalizedSelectedDate.getFullYear(),
                normalizedSelectedDate.getMonth(),
                normalizedSelectedDate.getDate()
              ),
              normalizedDayAsDate
            )
        );
      }
      return false;
    },
    [dateCurrentHover, dateFrom, dateTo, selectedDate, withPeriod, withTime]
  );
