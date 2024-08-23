import { useCallback } from 'react';

import { IUseIsStartDayParams } from '@components/DatePicker/subcomponents/DaysCalendar/types';
import { isBefore, isEqual } from 'date-fns';

export const useIsStartDay = ({ withPeriod, dateFrom, dateCurrentHover }: IUseIsStartDayParams) =>
  useCallback(
    (dayAsDate: Date) => {
      if (dateCurrentHover) {
        return Boolean(
          (withPeriod && dateFrom && isBefore(dateFrom, dateCurrentHover) && isEqual(dateFrom, dayAsDate)) ||
            ((!dateFrom || isBefore(dateCurrentHover, dateFrom)) && isEqual(dateCurrentHover, dayAsDate))
        );
      } else {
        return Boolean(withPeriod && dateFrom && isEqual(dateFrom, dayAsDate));
      }
    },
    [dateCurrentHover, dateFrom, withPeriod]
  );
