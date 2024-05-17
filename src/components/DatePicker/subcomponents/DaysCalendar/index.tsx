import React, { FC, useMemo, useState } from 'react';

import { getCalendar } from '@components/DatePicker/helpers';
import { Day, Weekdays } from '@components/DatePicker/subcomponents';
import {
  useIsDaySelected,
  useIsDisabled,
  useIsEndDay,
  useIsMidDay,
  useIsStartDay,
  useIsToday
} from '@components/DatePicker/subcomponents/DaysCalendar/helpers';
import { CalendarProps } from '@components/DatePicker/subcomponents/DaysCalendar/types';

import styles from './DaysCalendar.module.scss';

export const DaysCalendar: FC<CalendarProps> = ({
  withTime,
  disableChange,
  valueFrom,
  valueTo,
  withPeriod,
  enabledFrom,
  enabledTo,
  panelValue,
  selectedDate,
  withoutWeekdays,
  onSelect
}) => {
  const isToday = useIsToday();
  const dateFrom = useMemo(
    () => valueFrom && new Date(valueFrom.getFullYear(), valueFrom.getMonth(), valueFrom.getDate()),
    [valueFrom]
  );
  const dateTo = useMemo(
    () => valueTo && new Date(valueTo.getFullYear(), valueTo.getMonth(), valueTo.getDate()),
    [valueTo]
  );
  const year = useMemo(() => (panelValue ?? new Date()).getFullYear(), [panelValue]);
  const month = useMemo(() => (panelValue ?? new Date()).getMonth(), [panelValue]);
  const [innerCurrentHover, setCurrentHover] = useState<null | Date>(null);
  const currentHover = useMemo(
    () => (!valueFrom || !valueTo ? innerCurrentHover : null),
    [innerCurrentHover, valueFrom, valueTo]
  );
  const dateCurrentHover = useMemo(
    () => currentHover && new Date(currentHover.getFullYear(), currentHover.getMonth(), currentHover.getDate()),
    [currentHover]
  );

  const isDaySelected = useIsDaySelected({
    dateCurrentHover,
    withPeriod,
    dateFrom,
    dateTo,
    withTime,
    selectedDate
  });
  const isStartDay = useIsStartDay({ dateCurrentHover, withPeriod, dateFrom });
  const isMidDay = useIsMidDay({
    dateCurrentHover,
    withPeriod,
    dateFrom,
    dateTo
  });
  const isEndDay = useIsEndDay({
    dateCurrentHover,
    withPeriod,
    dateFrom,
    dateTo
  });
  const isDisabled = useIsDisabled(enabledFrom, enabledTo);

  return (
    <>
      {!withoutWeekdays && <Weekdays />}
      <div className={styles.content}>
        {getCalendar(year)[year][month].map((day, idx) => {
          const dayAsDate = new Date(year, month, parseInt(day));
          return day ? (
            <Day
              date={dayAsDate}
              onClick={() => onSelect && onSelect(dayAsDate)}
              onHover={() => withPeriod && setCurrentHover(dayAsDate)}
              isHoverState={Boolean(dateCurrentHover)}
              selected={isDaySelected(dayAsDate)}
              disabled={disableChange || isDisabled(dayAsDate)}
              today={isToday(dayAsDate)}
              start={isStartDay(dayAsDate)}
              mid={isMidDay(dayAsDate)}
              end={isEndDay(dayAsDate)}
              key={day}
            >
              {day}
            </Day>
          ) : (
            <div key={`empty-${idx}`} />
          );
        })}
      </div>
    </>
  );
};

export default DaysCalendar;
