import { CalendarLevel } from './types';

/**
 * Нормализует дату в зависимости от уровня календаря
 * @param date - Исходная дата
 * @param level - Уровень детализации
 * @returns Нормализованная дата
 */
export const normalizeDate = (date: Date, level: CalendarLevel): Date => {
  switch (level) {
    case 'day':
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    case 'month':
    case 'quarter':
      return new Date(date.getFullYear(), date.getMonth());
    case 'year':
      return new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0);
  }
};
