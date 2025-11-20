/**
 * Уровень детализации календаря
 */
export type CalendarLevel = 'day' | 'month' | 'quarter' | 'year';

/**
 * Параметры для хуков проверки периодов
 */
export interface UseCalendarPeriodParams {
  dateCurrentHover: Date | null;
  withPeriod?: boolean;
  dateFrom: Date | null | undefined;
  dateTo?: Date | null | undefined;
}

/**
 * Параметры для хука проверки выбора дня
 */
export interface UseIsSelectedParams extends UseCalendarPeriodParams {
  selectedDate?: Date;
  withTime?: boolean;
  panelValue?: Date;
}
