import { useCallback } from 'react';

import { normalizeDateToDay } from '@components/DatePicker/subcomponents/DaysCalendar/helpers/normalizeDateToDay';
import { isAfter, isBefore } from 'date-fns';

export const useIsDisabled = (enabledFrom?: Date, enabledTo?: Date) =>
  useCallback(
    (date: Date) => {
      const normalizedEnabledFrom =
        enabledFrom && normalizeDateToDay(enabledFrom);
      const normalizedEnabledTo = enabledTo && normalizeDateToDay(enabledTo);
      const normalizedDate = normalizeDateToDay(date);
      return !!(
        (normalizedEnabledFrom &&
          isBefore(normalizedDate, normalizedEnabledFrom)) ||
        (normalizedEnabledTo && isAfter(normalizedDate, normalizedEnabledTo))
      );
    },
    [enabledFrom, enabledTo]
  );
