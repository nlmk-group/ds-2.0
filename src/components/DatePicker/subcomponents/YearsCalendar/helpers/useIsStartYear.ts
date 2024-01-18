import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers/numberedDateByLevel';
import { useIsStartYearParams } from '@components/DatePicker/subcomponents/YearsCalendar/types';

export const useIsStartYear = ({ withPeriod, dateFrom, dateCurrentHover }: useIsStartYearParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod) {
        return false;
      }
      const numberedDateFrom = dateFrom && numberedDateByLevel(dateFrom, 'year');
      const numberedDayAsDate = dayAsDate && numberedDateByLevel(dayAsDate, 'year');
      const numberedDateCurrentHover = dateCurrentHover && numberedDateByLevel(dateCurrentHover, 'year');
      if (numberedDateCurrentHover) {
        return Boolean(
          (numberedDateFrom && numberedDateFrom < numberedDateCurrentHover && numberedDateFrom === numberedDayAsDate) ||
            ((!numberedDateFrom || numberedDateCurrentHover < numberedDateFrom) &&
              numberedDateCurrentHover === numberedDayAsDate)
        );
      }
      return Boolean(numberedDateFrom && numberedDateFrom === numberedDayAsDate);
    },
    [dateFrom, withPeriod, dateCurrentHover]
  );
