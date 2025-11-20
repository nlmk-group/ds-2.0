import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers';
import { isAfter, isBefore } from 'date-fns';

import { CalendarLevel, UseCalendarPeriodParams } from './types';

import { normalizeDate } from './normalizeDate';

/**
 * Универсальный хук для проверки, находится ли дата в середине периода
 * @param params - Параметры периода
 * @param level - Уровень детализации календаря
 * @returns Функция проверки
 */
export const useIsMid = (
  { dateCurrentHover, withPeriod, dateFrom, dateTo }: UseCalendarPeriodParams,
  level: CalendarLevel
) =>
  useCallback(
    (dayAsDate: Date) => {
      if (!withPeriod || !dateFrom) {
        return false;
      }

      if (level === 'day') {
        if (dateCurrentHover) {
          return Boolean(
            (isAfter(dayAsDate, dateFrom) && isBefore(dayAsDate, dateCurrentHover)) ||
              (isBefore(dayAsDate, dateFrom) && isAfter(dayAsDate, dateCurrentHover))
          );
        }
        return Boolean(dateTo && isBefore(dayAsDate, dateTo) && isAfter(dayAsDate, dateFrom));
      }

      if (level === 'quarter') {
        const numberedDateFromWithQuarter = numberedDateByLevel(dateFrom, 'quarter');
        const numberedDateToWithQuarter = dateTo && numberedDateByLevel(dateTo, 'quarter');
        const numberedDayAsDateWithQuarter = numberedDateByLevel(dayAsDate, 'quarter');
        const numberedDateCurrentHoverWithQuarter =
          dateCurrentHover && numberedDateByLevel(dateCurrentHover, 'quarter');

        if (numberedDateCurrentHoverWithQuarter) {
          return Boolean(
            (numberedDayAsDateWithQuarter > numberedDateFromWithQuarter &&
              numberedDayAsDateWithQuarter < numberedDateCurrentHoverWithQuarter) ||
              (numberedDayAsDateWithQuarter < numberedDateFromWithQuarter &&
                numberedDayAsDateWithQuarter > numberedDateCurrentHoverWithQuarter)
          );
        }
        return Boolean(
          numberedDateToWithQuarter &&
            numberedDayAsDateWithQuarter < numberedDateToWithQuarter &&
            numberedDayAsDateWithQuarter > numberedDateFromWithQuarter
        );
      }

      const normalizedDateFrom = normalizeDate(dateFrom, level);
      const normalizedDateTo = dateTo && normalizeDate(dateTo, level);
      const normalizedDayAsDate = normalizeDate(dayAsDate, level);
      const normalizedDateCurrentHover = dateCurrentHover && normalizeDate(dateCurrentHover, level);

      if (normalizedDateCurrentHover) {
        return Boolean(
          (isAfter(normalizedDayAsDate, normalizedDateFrom) &&
            isBefore(normalizedDayAsDate, normalizedDateCurrentHover)) ||
            (isBefore(normalizedDayAsDate, normalizedDateFrom) &&
              isAfter(normalizedDayAsDate, normalizedDateCurrentHover))
        );
      }
      return Boolean(
        normalizedDateTo &&
          isBefore(normalizedDayAsDate, normalizedDateTo) &&
          isAfter(normalizedDayAsDate, normalizedDateFrom)
      );
    },
    [dateCurrentHover, withPeriod, dateFrom, dateTo, level]
  );
