import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers';

import { CalendarLevel } from './types';

import { normalizeDate } from './normalizeDate';

/**
 * Универсальный хук для проверки, отключена ли дата
 * @param enabledFrom - Минимальная доступная дата
 * @param enabledTo - Максимальная доступная дата
 * @param level - Уровень детализации календаря
 * @returns Функция проверки
 */
export const useIsDisabled = (enabledFrom?: Date, enabledTo?: Date, level: CalendarLevel = 'day') => {
  return useCallback(
    (dateOrYear: Date | number | undefined, month?: number): boolean => {
      if (dateOrYear === undefined) {
        return false;
      }

      if (level === 'year' && typeof dateOrYear === 'number') {
        if (enabledFrom && enabledFrom.getFullYear() > dateOrYear) {
          return true;
        }
        return !!(enabledTo && enabledTo.getFullYear() < dateOrYear);
      }

      if ((level === 'month' || level === 'quarter') && typeof dateOrYear === 'number' && typeof month === 'number') {
        if (enabledFrom && dateOrYear < enabledFrom.getFullYear()) {
          return true;
        }
        if (enabledTo && dateOrYear > enabledTo.getFullYear()) {
          return true;
        }
        if (enabledFrom && enabledFrom.getFullYear() === dateOrYear && enabledFrom.getMonth() > month) {
          return true;
        }
        if (enabledTo && enabledTo.getFullYear() === dateOrYear && enabledTo.getMonth() < month) {
          return true;
        }
        return false;
      }

      if (dateOrYear instanceof Date) {
        const date = dateOrYear as Date;

        if (level === 'quarter') {
          const numberedDate = numberedDateByLevel(date, 'quarter');
          const numberedFrom = enabledFrom && numberedDateByLevel(enabledFrom, 'quarter');
          const numberedTo = enabledTo && numberedDateByLevel(enabledTo, 'quarter');
          return !!((numberedFrom && numberedDate < numberedFrom) || (numberedTo && numberedDate > numberedTo));
        }

        const normalizedDate = normalizeDate(date, level);
        const normalizedEnabledFrom = enabledFrom && normalizeDate(enabledFrom, level);
        const normalizedEnabledTo = enabledTo && normalizeDate(enabledTo, level);

        return !!(
          (normalizedEnabledFrom && normalizedDate < normalizedEnabledFrom) ||
          (normalizedEnabledTo && normalizedDate > normalizedEnabledTo)
        );
      }

      return false;
    },
    [enabledFrom, enabledTo, level]
  );
};
