import React, { FC, useMemo, useState } from 'react';

import {
  normalizeDate,
  useIsDisabled,
  useIsEnd,
  useIsMid,
  useIsSelected,
  useIsStart
} from '@components/DatePicker/helpers';
import { Day } from '@components/DatePicker/subcomponents';

import { IYearsCalendarProps } from './types';

import styles from './YearsCalendar.module.scss';

export const YearsCalendar: FC<IYearsCalendarProps> = ({
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
  const startYear = useMemo(() => (panelValue ?? new Date()).getFullYear() - 6, [panelValue]);
  const dateFrom = useMemo(() => valueFrom && normalizeDate(valueFrom, 'year'), [valueFrom]);
  const dateTo = useMemo(() => valueTo && normalizeDate(valueTo, 'year'), [valueTo]);
  const [innerCurrentHover, setCurrentHover] = useState<null | Date>(null);
  const currentHover = useMemo(
    () => (!valueFrom || !valueTo ? innerCurrentHover : null),
    [innerCurrentHover, valueFrom, valueTo]
  );
  const dateCurrentHover = useMemo(
    () => currentHover && new Date(currentHover.getFullYear(), currentHover.getMonth(), 1, 0, 0, 0, 0),
    [currentHover]
  );

  const isSelectedYear = useIsSelected(
    {
      dateCurrentHover,
      withPeriod,
      dateFrom,
      dateTo,
      selectedDate
    },
    'year'
  );
  const isStartYear = useIsStart(
    {
      dateCurrentHover,
      withPeriod,
      dateFrom,
      dateTo
    },
    'year'
  );
  const isMidYear = useIsMid(
    {
      dateCurrentHover,
      withPeriod,
      dateFrom,
      dateTo
    },
    'year'
  );
  const isEndYear = useIsEnd(
    {
      dateCurrentHover,
      withPeriod,
      dateTo,
      dateFrom
    },
    'year'
  );
  const isDisabled = useIsDisabled(enabledFrom, enabledTo, 'year');

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
