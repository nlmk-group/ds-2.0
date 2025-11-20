import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers';
import { isBefore, isEqual } from 'date-fns';

import { CalendarLevel, UseCalendarPeriodParams } from './types';

import { normalizeDate } from './normalizeDate';

/**
 * Универсальный хук для проверки, является ли дата началом периода
 * @param params - Параметры периода
 * @param level - Уровень детализации календаря
 * @returns Функция проверки
 */
export const useIsStart = ({ withPeriod, dateFrom, dateCurrentHover }: UseCalendarPeriodParams, level: CalendarLevel) =>
  useCallback(
    (dayAsDate: Date, quarter?: { month: number }) => {
      if (!withPeriod) {
        return false;
      }

      if (level === 'quarter' && quarter) {
        const numberedDateFrom = dateFrom && numberedDateByLevel(dateFrom, 'quarter');
        const numberedDayAsDate = numberedDateByLevel(dayAsDate, 'quarter');
        const numberedDateCurrentHover = dateCurrentHover && numberedDateByLevel(dateCurrentHover, 'quarter');

        if (numberedDateCurrentHover) {
          return Boolean(
            (numberedDateFrom &&
              numberedDateFrom < numberedDateCurrentHover &&
              numberedDateFrom === numberedDayAsDate) ||
              ((!numberedDateFrom || numberedDateCurrentHover < numberedDateFrom) &&
                numberedDateCurrentHover === numberedDayAsDate)
          );
        }
        return Boolean(numberedDateFrom && numberedDateFrom === numberedDayAsDate);
      }

      if (level === 'day') {
        if (dateCurrentHover) {
          return Boolean(
            (withPeriod && dateFrom && isBefore(dateFrom, dateCurrentHover) && isEqual(dateFrom, dayAsDate)) ||
              ((!dateFrom || isBefore(dateCurrentHover, dateFrom)) && isEqual(dateCurrentHover, dayAsDate))
          );
        }
        return Boolean(withPeriod && dateFrom && isEqual(dateFrom, dayAsDate));
      }

      const normalizedDateFrom = dateFrom && normalizeDate(dateFrom, level);
      const normalizedDayAsDate = normalizeDate(dayAsDate, level);
      const normalizedDateCurrentHover = dateCurrentHover && normalizeDate(dateCurrentHover, level);

      const numberedDateFrom = normalizedDateFrom && numberedDateByLevel(normalizedDateFrom, level);
      const numberedDayAsDate = numberedDateByLevel(normalizedDayAsDate, level);
      const numberedDateCurrentHover =
        normalizedDateCurrentHover && numberedDateByLevel(normalizedDateCurrentHover, level);

      if (numberedDateCurrentHover) {
        return Boolean(
          (numberedDateFrom && numberedDateFrom < numberedDateCurrentHover && numberedDateFrom === numberedDayAsDate) ||
            ((!numberedDateFrom || numberedDateCurrentHover < numberedDateFrom) &&
              numberedDateCurrentHover === numberedDayAsDate)
        );
      }
      return Boolean(numberedDateFrom && numberedDateFrom === numberedDayAsDate);
    },
    [dateCurrentHover, dateFrom, withPeriod, level]
  );
