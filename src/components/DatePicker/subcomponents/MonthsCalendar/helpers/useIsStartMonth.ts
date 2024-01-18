import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers/numberedDateByLevel';
import { useIsStartMonthParams } from '@components/DatePicker/subcomponents/MonthsCalendar/types';

export const useIsStartMonth = ({ withPeriod, dateFrom, dateCurrentHover }: useIsStartMonthParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod) {
        return false;
      }
      const numberedDateFrom = dateFrom && numberedDateByLevel(dateFrom, 'month');
      const numberedDayAsDate = dayAsDate && numberedDateByLevel(dayAsDate, 'month');
      const numberedDateCurrentHover = dateCurrentHover && numberedDateByLevel(dateCurrentHover, 'month');
      if (numberedDateCurrentHover) {
        return Boolean(
          (numberedDateFrom && numberedDateFrom < numberedDateCurrentHover && numberedDateFrom === numberedDayAsDate) ||
            ((!numberedDateFrom || numberedDateCurrentHover < numberedDateFrom) &&
              numberedDateCurrentHover === numberedDayAsDate)
        );
      }
      return Boolean(numberedDateFrom && numberedDateFrom === numberedDayAsDate);
    },
    [dateCurrentHover, dateFrom, withPeriod]
  );
