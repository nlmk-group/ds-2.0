import { quarterQuarterKeys } from '@components/DatePicker/helpers/quarters';
import { isEqual, startOfDay, startOfMonth, startOfYear } from 'date-fns';

/**
 * Функция сравнивает две даты с учетом указанного уровня детализации (день, месяц, квартал, год).
 *
 * @param {string} level - уровень детализации для сравнения.
 * @param {Date} valueFrom - первая дата для сравнения.
 * @param {Date} valueTo - вторая дата для сравнения.
 * @returns {boolean} Возвращает true, если даты равны с учетом заданного уровня детализации, иначе false.
 */
export const isEqualDatesAfterLevel = (level: string, valueFrom: Date, valueTo: Date): boolean => {
  // Определяем действия по уровням.
  const levelActions = {
    day: (date: Date) => startOfDay(date),
    month: (date: Date) => startOfMonth(date),
    year: (date: Date) => startOfYear(date),
    quarter: (date: Date) => startOfMonth(date)
  };

  // Проверяем, есть ли действие для указанного уровня.
  if (!levelActions[level as keyof typeof levelActions]) {
    throw new Error(`Unknown level: ${level}`);
  }

  // Применяем действие к каждой дате.
  const dateFrom = levelActions[level as keyof typeof levelActions](valueFrom);
  const dateTo = levelActions[level as keyof typeof levelActions](valueTo);

  if (level === 'quarter') {
    // Если уровень - квартал, сравниваем кварталы и года.
    const quarterKeyValueFrom = quarterQuarterKeys[valueFrom.getMonth() as keyof typeof quarterQuarterKeys];
    const quarterKeyValueTo = quarterQuarterKeys[valueTo.getMonth() as keyof typeof quarterQuarterKeys];

    return quarterKeyValueFrom === quarterKeyValueTo && valueFrom.getFullYear() === valueTo.getFullYear();
  }

  // Сравниваем даты.
  return isEqual(dateFrom, dateTo);
};
