import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers';
import { IUseIsMidQuarterParams } from '../types';

export const useIsMidQuarter = ({ dateCurrentHover, withPeriod, dateFrom, dateTo }: IUseIsMidQuarterParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod || !dateFrom) {
        return false;
      }
      const numberedDateFromWithQuarter = numberedDateByLevel(dateFrom, 'quarter');
      const numberedDateToWithQuarter = dateTo && numberedDateByLevel(dateTo, 'quarter');
      const numberedDayAsDateWithQuarter = numberedDateByLevel(dayAsDate, 'quarter');
      const numberedDateCurrentHoverWithQuarter = dateCurrentHover && numberedDateByLevel(dateCurrentHover, 'quarter');
      if (numberedDateCurrentHoverWithQuarter) {
        return Boolean(
          (numberedDayAsDateWithQuarter > numberedDateFromWithQuarter &&
            numberedDayAsDateWithQuarter < numberedDateCurrentHoverWithQuarter) ||
            (numberedDayAsDateWithQuarter < numberedDateFromWithQuarter &&
              numberedDayAsDateWithQuarter > numberedDateCurrentHoverWithQuarter)
        );
      } else {
        return Boolean(
          numberedDateToWithQuarter &&
            numberedDayAsDateWithQuarter < numberedDateToWithQuarter &&
            numberedDayAsDateWithQuarter > numberedDateFromWithQuarter
        );
      }
    },
    [dateCurrentHover, withPeriod, dateFrom, dateTo]
  );
