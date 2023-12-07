import { DaysCalendar } from '@components/DatePicker/subcomponents/DaysCalendar';
import MonthsCalendar from '@components/DatePicker/subcomponents/MonthsCalendar';
import QuartersCalendar from '@components/DatePicker/subcomponents/QuartersCalendar';
import { YearsCalendar } from '@components/DatePicker/subcomponents/YearsCalendar';

export const panelToCalendarMapping = {
  day: DaysCalendar,
  month: MonthsCalendar,
  quarter: QuartersCalendar,
  year: YearsCalendar
} as const;
