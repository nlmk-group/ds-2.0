import { numberedDateByLevel } from '@components/DatePicker/helpers/numberedDateByLevel';
import { quarterQuarterKeys } from '@components/DatePicker/helpers/quarters';
import { quarterParams, useIsSelectedQuarterParams } from '@components/DatePicker/subcomponents/QuartersCalendar/types';

export const useIsSelectedQuarter =
  ({ withPeriod, dateFrom, dateTo, selectedDate, panelValue }: useIsSelectedQuarterParams) =>
    (dayAsDate: Date, quarter: quarterParams) => {
      const numberedDateFrom =
      dateFrom &&
      numberedDateByLevel(
        new Date(dateFrom.getFullYear(), quarterQuarterKeys[dateFrom.getMonth() as keyof typeof quarterQuarterKeys]),
        'quarter'
      );
      const numberedDateTo =
      dateTo &&
      numberedDateByLevel(
        new Date(dateTo.getFullYear(), quarterQuarterKeys[dateTo.getMonth() as keyof typeof quarterQuarterKeys]),
        'quarter'
      );
      const numberedDayAsDate = numberedDateByLevel(
        new Date(dayAsDate.getFullYear(), quarterQuarterKeys[dayAsDate.getMonth() as keyof typeof quarterQuarterKeys]),
        'quarter'
      );

      const withPeriodCondition = (withPeriod &&
        numberedDateFrom &&
        numberedDateTo &&
        numberedDayAsDate < numberedDateTo &&
        numberedDayAsDate > numberedDateFrom) ||
        (withPeriod && numberedDateTo === numberedDayAsDate) ||
        (withPeriod && numberedDateFrom === numberedDayAsDate);

      const withoutPeriodCondition = selectedDate && !!selectedDate?.getMonth()
        ? selectedDate?.getFullYear() === panelValue?.getFullYear() && quarter.values.includes(selectedDate?.getMonth())
        : selectedDate?.getFullYear() === panelValue?.getFullYear() && selectedDate?.getMonth() === dayAsDate.getMonth();
      
      return Boolean(
        withPeriod
          ? withPeriodCondition
          : withoutPeriodCondition
      );
    };
