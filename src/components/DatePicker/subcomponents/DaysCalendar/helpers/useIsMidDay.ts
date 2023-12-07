import { useCallback } from 'react';

import { useIsMidDayParams } from '@components/DatePicker/subcomponents/DaysCalendar/types';
import { isAfter, isBefore } from 'date-fns';

export const useIsMidDay = ({
  dateCurrentHover,
  withPeriod,
  dateFrom,
  dateTo
}: useIsMidDayParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod || !dateFrom) {
        return false;
      }
      if (dateCurrentHover) {
        return Boolean(
          (isAfter(dayAsDate, dateFrom) &&
            isBefore(dayAsDate, dateCurrentHover)) ||
            (isBefore(dayAsDate, dateFrom) &&
              isAfter(dayAsDate, dateCurrentHover))
        );
      } else {
        return Boolean(
          dateTo && isBefore(dayAsDate, dateTo) && isAfter(dayAsDate, dateFrom)
        );
      }
    },
    [dateCurrentHover, dateFrom, dateTo, withPeriod]
  );
