import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers/numberedDateByLevel';
import { useIsEndMonthParams } from '@components/DatePicker/subcomponents/MonthsCalendar/types';

export const useIsEndMonth = ({
  dateCurrentHover,
  withPeriod,
  dateTo,
  dateFrom
}: useIsEndMonthParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod) {
        return false;
      }
      const numberedDateFrom =
        dateFrom && numberedDateByLevel(dateFrom, 'month');
      const numberedDateTo = dateTo && numberedDateByLevel(dateTo, 'month');
      const numberedDayAsDate =
        dayAsDate && numberedDateByLevel(dayAsDate, 'month');
      const numberedDateCurrentHover =
        dateCurrentHover && numberedDateByLevel(dateCurrentHover, 'month');
      if (numberedDateCurrentHover) {
        return Boolean(
          ((!numberedDateFrom || numberedDateFrom < numberedDateCurrentHover) &&
            numberedDateCurrentHover === numberedDayAsDate) ||
            (numberedDateFrom &&
              numberedDateCurrentHover < numberedDateFrom &&
              numberedDateFrom === numberedDayAsDate)
        );
      }
      return Boolean(numberedDateTo && numberedDateTo === numberedDayAsDate);
    },
    [dateCurrentHover, withPeriod, dateTo, dateFrom]
  );
