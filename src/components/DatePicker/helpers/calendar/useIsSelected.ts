import { useCallback } from 'react';

import { numberedDateByLevel } from '@components/DatePicker/helpers';
import { isAfter, isBefore, isEqual } from 'date-fns';

import { CalendarLevel, UseIsSelectedParams } from './types';

import { normalizeDate } from './normalizeDate';

/**
 * Универсальный хук для проверки, выбрана ли дата
 * @param params - Параметры выбора
 * @param level - Уровень детализации календаря
 * @returns Функция проверки
 */
export const useIsSelected = (
  { withPeriod, dateFrom, dateTo, withTime, selectedDate, dateCurrentHover, panelValue }: UseIsSelectedParams,
  level: CalendarLevel
) =>
  useCallback(
    (dayAsDate: Date, quarter?: { month: number }) => {
      if (withPeriod) {
        if (level === 'day') {
          const normalizedDayAsDate = normalizeDate(dayAsDate, 'day');

          if (dateFrom && dateTo) {
            return Boolean(
              (isBefore(normalizedDayAsDate, dateTo) && isAfter(normalizedDayAsDate, dateFrom)) ||
                isEqual(dateTo, normalizedDayAsDate) ||
                isEqual(dateFrom, normalizedDayAsDate)
            );
          }
          if (dateFrom && !dateTo && dateCurrentHover) {
            return isEqual(dayAsDate, dateFrom);
          }
          return false;
        }

        if (level === 'quarter' && quarter) {
          const numberedDayAsDate = numberedDateByLevel(dayAsDate, 'quarter');
          const numberedDateFrom = dateFrom && numberedDateByLevel(dateFrom, 'quarter');
          const numberedDateTo = dateTo && numberedDateByLevel(dateTo, 'quarter');

          return Boolean(
            (numberedDateFrom &&
              numberedDateTo &&
              numberedDayAsDate > numberedDateFrom &&
              numberedDayAsDate < numberedDateTo) ||
              (numberedDateTo && numberedDayAsDate === numberedDateTo) ||
              (numberedDateFrom && numberedDayAsDate === numberedDateFrom)
          );
        }

        const normalizedDateFrom = dateFrom && normalizeDate(dateFrom, level);
        const normalizedDateTo = dateTo && normalizeDate(dateTo, level);
        const normalizedDayAsDate = normalizeDate(dayAsDate, level);

        return Boolean(
          (normalizedDateFrom &&
            normalizedDateTo &&
            isBefore(normalizedDayAsDate, normalizedDateTo) &&
            isAfter(normalizedDayAsDate, normalizedDateFrom)) ||
            (normalizedDateTo && isEqual(normalizedDateTo, normalizedDayAsDate)) ||
            (normalizedDateFrom && isEqual(normalizedDateFrom, normalizedDayAsDate))
        );
      }

      if (level === 'day') {
        const normalizedDayAsDate = normalizeDate(dayAsDate, 'day');
        const normalizedSelectedDate = selectedDate && normalizeDate(selectedDate, 'day');

        if (withTime) {
          return Boolean(normalizedSelectedDate && isEqual(normalizedSelectedDate, normalizedDayAsDate));
        }
        return Boolean(
          normalizedSelectedDate &&
            isEqual(
              new Date(
                normalizedSelectedDate.getFullYear(),
                normalizedSelectedDate.getMonth(),
                normalizedSelectedDate.getDate()
              ),
              normalizedDayAsDate
            )
        );
      }

      if (level === 'month') {
        return Boolean(
          selectedDate?.getFullYear() === panelValue?.getFullYear() && selectedDate?.getMonth() === dayAsDate.getMonth()
        );
      }

      if (level === 'quarter' && quarter) {
        const selectedQuarter = selectedDate && Math.floor(selectedDate.getMonth() / 3);
        const currentQuarter = Math.floor(quarter.month / 3);
        return Boolean(selectedDate?.getFullYear() === panelValue?.getFullYear() && selectedQuarter === currentQuarter);
      }

      if (level === 'year') {
        return Boolean(selectedDate?.getFullYear() === dayAsDate.getFullYear());
      }

      return false;
    },
    [dateCurrentHover, dateFrom, dateTo, selectedDate, withPeriod, withTime, panelValue, level]
  );
