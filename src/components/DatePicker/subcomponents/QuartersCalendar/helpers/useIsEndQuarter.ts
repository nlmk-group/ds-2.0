import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers/numberedDateByLevel';
import { useIsEndQuarterParams } from '@components/DatePicker/subcomponents/QuartersCalendar/types';

export const useIsEndQuarter = ({ dateCurrentHover, withPeriod, dateTo, dateFrom }: useIsEndQuarterParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod) {
        return false;
      }
      const numberedDateFrom = dateFrom && numberedDateByLevel(dateFrom, 'month');
      const numberedDateTo = dateTo && numberedDateByLevel(dateTo, 'month');
      const numberedDayAsDate = dayAsDate && numberedDateByLevel(dayAsDate, 'month');
      const numberedDateCurrentHover = dateCurrentHover && numberedDateByLevel(dateCurrentHover, 'month');
      if (numberedDateCurrentHover) {
        return Boolean(
          ((!numberedDateFrom || numberedDateFrom < numberedDateCurrentHover) &&
            numberedDateCurrentHover === numberedDayAsDate) ||
            (numberedDateFrom && numberedDateCurrentHover < numberedDateFrom && numberedDateFrom === numberedDayAsDate)
        );
      }
      return Boolean(numberedDateTo && numberedDateTo === numberedDayAsDate);
    },
    [dateCurrentHover, withPeriod, dateTo, dateFrom]
  );
