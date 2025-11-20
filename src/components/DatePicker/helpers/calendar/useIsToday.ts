import { useCallback } from 'react';

import { CalendarLevel } from './types';

import { normalizeDate } from './normalizeDate';

/**
 * Универсальный хук для проверки, является ли дата сегодняшней
 * @param level - Уровень детализации календаря
 * @param panelValue - Текущее значение панели (для month/quarter)
 * @returns Функция проверки
 */
export const useIsToday = (level: CalendarLevel, panelValue?: Date) => {
  return useCallback(
    (dateOrIndex: Date | number): boolean => {
      const today = new Date();

      if (level === 'day' && dateOrIndex instanceof Date) {
        const normalizedToday = normalizeDate(today, 'day');
        const normalizedDate = normalizeDate(dateOrIndex, 'day');
        return normalizedToday.getTime() === normalizedDate.getTime();
      }

      if (level === 'month' && typeof dateOrIndex === 'number') {
        return today.getFullYear() === (panelValue || today).getFullYear() && today.getMonth() === dateOrIndex;
      }

      if (level === 'quarter' && typeof dateOrIndex === 'number') {
        const currentQuarter = Math.floor(today.getMonth() / 3);
        return today.getFullYear() === (panelValue || today).getFullYear() && currentQuarter === dateOrIndex;
      }

      if (level === 'year' && typeof dateOrIndex === 'number') {
        return today.getFullYear() === dateOrIndex;
      }

      return false;
    },
    [level, panelValue]
  );
};
