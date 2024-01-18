import { quarterQuarterKeys } from '@components/DatePicker/helpers/quarters';

/**
 * Возвращает число, представляющее дату в зависимости от уровня детализации (level).
 * Для 'day' - это полноценное число даты.
 * Для 'quarter' - это начало квартала.
 * Для 'month' - это начало месяца.
 * Для 'year' - это начало года.
 * По умолчанию, возвращается полное число даты.
 * @param date Дата, которую нужно преобразовать.
 * @param level Уровень детализации.
 * @return Число, представляющее дату в зависимости от уровня детализации.
 */
export function numberedDateByLevel(date: Date, level: string): number {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  switch (level) {
    case 'day': {
      return +new Date(year, month, day);
    }
    case 'quarter': {
      return +new Date(year, quarterQuarterKeys[month as keyof typeof quarterQuarterKeys]);
    }
    case 'month': {
      return +new Date(year, month);
    }
    case 'year': {
      return +new Date(year);
    }
    default: {
      return +date;
    }
  }
}
