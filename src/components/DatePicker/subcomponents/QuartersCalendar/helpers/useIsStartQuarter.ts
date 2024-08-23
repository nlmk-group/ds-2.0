import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers/numberedDateByLevel';
import { IUseIsStartQuarterParams } from '@components/DatePicker/subcomponents/QuartersCalendar/types';

export const useIsStartQuarter = ({ withPeriod, dateFrom, dateCurrentHover }: IUseIsStartQuarterParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod) {
        return false;
      }
      const numberedDateFrom = dateFrom && numberedDateByLevel(dateFrom, 'quarter');
      const numberedDayAsDate = dayAsDate && numberedDateByLevel(dayAsDate, 'quarter');
      const numberedDateCurrentHover = dateCurrentHover && numberedDateByLevel(dateCurrentHover, 'quarter');
      if (numberedDateCurrentHover) {
        return Boolean(
          (numberedDateFrom && numberedDateFrom < numberedDateCurrentHover && numberedDateFrom === numberedDayAsDate) ||
            ((!numberedDateFrom || numberedDateCurrentHover < numberedDateFrom) &&
              numberedDateCurrentHover === numberedDayAsDate)
        );
      }
      return Boolean(numberedDateFrom && numberedDateFrom === numberedDayAsDate);
    },
    [withPeriod, dateFrom, dateCurrentHover]
  );
