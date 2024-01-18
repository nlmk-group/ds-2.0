import { quarterQuarterKeys } from '@components/DatePicker/helpers/quarters';

/**
 * Возвращает последний момент времени для заданного уровня даты (день, месяц, квартал, год).
 * @param level Уровень даты.
 * @param valueTo Конечная дата диапазона.
 * @param valueFrom Начальная дата диапазона.
 * @param quarters Информация о кварталах
 * @return Дата с установленным последним моментом времени для заданного уровня.
 */
export const getLastValue = (
  level: string,
  valueTo: Date | undefined,
  valueFrom: Date | undefined,
  quarters: { month: number; name: string; values: number[] }[]
): Date | undefined => {
  // Если значение конечной даты не определено, то используем начальную дату
  const date = valueTo || valueFrom;

  if (!date) {
    return undefined;
  }

  // Получаем ключ квартала по месяцу
  const quarterKey = quarterQuarterKeys[date.getMonth() as keyof typeof quarterQuarterKeys];

  // Находим последний месяц в квартале
  const lastMonthInQuarter = quarters.find(el => el.month === quarterKey)?.values[2];

  // Для каждого уровня устанавливаем последний момент времени
  switch (level) {
    case 'day':
      return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);

    case 'month':
      return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);

    case 'quarter':
      return new Date(date.getFullYear(), (lastMonthInQuarter || date.getMonth()) + 1, 0, 23, 59, 59);

    default:
      return new Date(date.getFullYear(), 11, 31, 23, 59, 59);
  }
};
