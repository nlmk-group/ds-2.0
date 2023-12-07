import React, { FC, useMemo, useState } from 'react';

import { Day } from '@components/DatePicker/subcomponents';
import {
  normalizeDateToYear,
  useIsDisabledYear,
  useIsEndYear,
  useIsMidYear,
  useIsSelectedYear,
  useIsStartYear
} from '@components/DatePicker/subcomponents/YearsCalendar/helpers';
import { YearsCalendarProps } from '@components/DatePicker/subcomponents/YearsCalendar/types';

import styles from './YearsCalendar.module.scss';

export const YearsCalendar: FC<YearsCalendarProps> = ({
  panelValue,
  disableChange,
  withPeriod,
  valueFrom,
  valueTo,
  enabledFrom,
  enabledTo,
  selectedDate,
  onSelect
}) => {
  const today = useMemo(() => new Date(), []);
  const startYear = useMemo(
    () => (panelValue ?? new Date()).getFullYear() - 6,
    [panelValue]
  );
  const dateFrom = useMemo(
    () => valueFrom && normalizeDateToYear(valueFrom),
    [valueFrom]
  );
  const dateTo = useMemo(
    () => valueTo && normalizeDateToYear(valueTo),
    [valueTo]
  );
  const [innerCurrentHover, setCurrentHover] = useState<null | Date>(null);
  const currentHover = useMemo(
    () => (!valueFrom || !valueTo ? innerCurrentHover : null),
    [innerCurrentHover, valueFrom, valueTo]
  );
  const dateCurrentHover = useMemo(
    () =>
      currentHover &&
      new Date(
        currentHover.getFullYear(),
        currentHover.getMonth(),
        1,
        0,
        0,
        0,
        0
      ),
    [currentHover]
  );

  const isSelectedYear = useIsSelectedYear({
    dateCurrentHover,
    withPeriod,
    dateFrom,
    dateTo,
    selectedDate
  });
  const isStartYear = useIsStartYear({
    dateCurrentHover,
    withPeriod,
    dateFrom
  });
  const isMidYear = useIsMidYear({
    dateCurrentHover,
    withPeriod,
    dateFrom,
    dateTo
  });
  const isEndYear = useIsEndYear({
    dateCurrentHover,
    withPeriod,
    dateTo,
    dateFrom
  });
  const isDisabled = useIsDisabledYear(enabledFrom, enabledTo);

  return (
    <div className={styles.root}>
      {new Array(12).fill(null).map((_, idx) => {
        const currentYear = idx + startYear;
        const dayAsDate = new Date(currentYear, 0, 1, 0, 0, 0, 0);
        return (
          <Day
            onClick={() => onSelect && onSelect(dayAsDate)}
            onHover={() => withPeriod && setCurrentHover(dayAsDate)}
            isHoverState={Boolean(dateCurrentHover)}
            selected={isSelectedYear(dayAsDate)}
            disabled={disableChange || isDisabled(currentYear)}
            today={today.getFullYear() === currentYear}
            start={isStartYear(dayAsDate)}
            mid={isMidYear(dayAsDate)}
            end={isEndYear(dayAsDate)}
            key={currentYear}
            type="year"
          >
            {currentYear}
          </Day>
        );
      })}
    </div>
  );
};

export default YearsCalendar;
