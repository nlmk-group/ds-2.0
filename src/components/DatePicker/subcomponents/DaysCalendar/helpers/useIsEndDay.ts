import { useCallback } from 'react';

import { IUseIsEndDayParams } from '@components/DatePicker/subcomponents/DaysCalendar/types';
import { isBefore, isEqual } from 'date-fns';

export const useIsEndDay = ({ dateCurrentHover, withPeriod, dateFrom, dateTo }: IUseIsEndDayParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod) {
        return false;
      }
      if (dateCurrentHover) {
        return Boolean(
          ((!dateFrom || isBefore(dateFrom, dateCurrentHover)) && isEqual(dateCurrentHover, dayAsDate)) ||
            (dateFrom && isBefore(dateCurrentHover, dateFrom) && isEqual(dateFrom, dayAsDate))
        );
      } else {
        return Boolean(dateTo && isEqual(dateTo, dayAsDate));
      }
    },
    [dateCurrentHover, dateFrom, dateTo, withPeriod]
  );
