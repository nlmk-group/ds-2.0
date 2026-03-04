import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers';
import { isBefore, isEqual } from 'date-fns';

import { CalendarLevel, UseCalendarPeriodParams } from './types';

import { normalizeDate } from './normalizeDate';

/**
 * Универсальный хук для проверки, является ли дата концом периода
 * @param params - Параметры периода
 * @param level - Уровень детализации календаря
 * @returns Функция проверки
 */
export const useIsEnd = (
  { dateCurrentHover, withPeriod, dateFrom, dateTo }: UseCalendarPeriodParams,
  level: CalendarLevel
) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod) {
        return false;
      }

      if (level === 'day') {
        if (dateCurrentHover) {
          return Boolean(
            ((!dateFrom || isBefore(dateFrom, dateCurrentHover)) && isEqual(dateCurrentHover, dayAsDate)) ||
              (dateFrom && isBefore(dateCurrentHover, dateFrom) && isEqual(dateFrom, dayAsDate))
          );
        }
        return Boolean(dateTo && isEqual(dateTo, dayAsDate));
      }

      const normalizedDateFrom = dateFrom && normalizeDate(dateFrom, level);
      const normalizedDateTo = dateTo && normalizeDate(dateTo, level);
      const normalizedDayAsDate = normalizeDate(dayAsDate, level);
      const normalizedDateCurrentHover = dateCurrentHover && normalizeDate(dateCurrentHover, level);

      const numberedDateFrom = normalizedDateFrom && numberedDateByLevel(normalizedDateFrom, level);
      const numberedDateTo = normalizedDateTo && numberedDateByLevel(normalizedDateTo, level);
      const numberedDayAsDate = numberedDateByLevel(normalizedDayAsDate, level);
      const numberedDateCurrentHover =
        normalizedDateCurrentHover && numberedDateByLevel(normalizedDateCurrentHover, level);

      if (numberedDateCurrentHover) {
        return Boolean(
          ((!numberedDateFrom || numberedDateFrom < numberedDateCurrentHover) &&
            numberedDateCurrentHover === numberedDayAsDate) ||
            (numberedDateFrom && numberedDateCurrentHover < numberedDateFrom && numberedDateFrom === numberedDayAsDate)
        );
      }
      return Boolean(numberedDateTo && numberedDateTo === numberedDayAsDate);
    },
    [dateCurrentHover, withPeriod, dateTo, dateFrom, level]
  );
