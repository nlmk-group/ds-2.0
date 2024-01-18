import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers/numberedDateByLevel';
import { useIsEndYearParams } from '@components/DatePicker/subcomponents/YearsCalendar/types';

export const useIsEndYear = ({ withPeriod, dateTo, dateFrom, dateCurrentHover }: useIsEndYearParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod) {
        return false;
      }
      const numberedDateFrom = dateFrom && numberedDateByLevel(dateFrom, 'year');
      const numberedDateTo = dateTo && numberedDateByLevel(dateTo, 'year');
      const numberedDayAsDate = dayAsDate && numberedDateByLevel(dayAsDate, 'year');
      const numberedDateCurrentHover = dateCurrentHover && numberedDateByLevel(dateCurrentHover, 'year');
      if (numberedDateCurrentHover) {
        return Boolean(
          ((!numberedDateFrom || numberedDateFrom < numberedDateCurrentHover) &&
            numberedDateCurrentHover === numberedDayAsDate) ||
            (numberedDateFrom && numberedDateCurrentHover < numberedDateFrom && numberedDateFrom === numberedDayAsDate)
        );
      }
      return Boolean(numberedDateTo && numberedDateTo === numberedDayAsDate);
    },
    [dateTo, dateFrom, withPeriod, dateCurrentHover]
  );
