import React, { FC, useMemo, useState } from 'react';

import { locale } from '@components/DatePicker/helpers';
import { Day } from '@components/DatePicker/subcomponents';
import {
  useIsDisabledQuarter,
  useIsEndQuarter,
  useIsMidQuarter,
  useIsSelectedQuarter,
  useIsStartQuarter,
  useIsTodayQuarter
} from '@components/DatePicker/subcomponents/QuartersCalendar/helpers';
import { QuartersCalendarProps } from '@components/DatePicker/subcomponents/QuartersCalendar/types';
import { useLocale } from '@components/DatePicker/utils';

import styles from './QuarterCalendar.module.scss';

export const QuartersCalendar: FC<QuartersCalendarProps> = ({
  panelValue,
  disableChange,
  withPeriod,
  valueFrom,
  valueTo,
  enabledTo,
  enabledFrom,
  selectedDate,
  onSelect
}) => {
  const language = useLocale();
  const isTodayQuarter = useIsTodayQuarter({ panelValue });
  const dateFrom = useMemo(
    () => valueFrom && new Date(valueFrom.getFullYear(), valueFrom.getMonth()),
    [valueFrom]
  );
  const dateTo = useMemo(
    () => valueTo && new Date(valueTo.getFullYear(), valueTo.getMonth()),
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

  const isSelectedQuarter = useIsSelectedQuarter({
    dateCurrentHover,
    withPeriod,
    dateFrom,
    dateTo,
    selectedDate,
    panelValue
  });
  const isStartQuarter = useIsStartQuarter({
    dateCurrentHover,
    withPeriod,
    dateFrom
  });
  const isMidQuarter = useIsMidQuarter({
    dateCurrentHover,
    withPeriod,
    dateFrom,
    dateTo
  });
  const isEndQuarter = useIsEndQuarter({
    dateCurrentHover,
    withPeriod,
    dateTo,
    dateFrom
  });
  const isDisabled = useIsDisabledQuarter(enabledFrom, enabledTo);

  return (
    <div className={styles.root}>
      {locale[language].quarters.map((quarter, idx) => {
        const dayAsDate = new Date(
          (panelValue || new Date()).getFullYear(),
          quarter.month
        );
        return (
          <Day
            onClick={() => onSelect && onSelect(dayAsDate)}
            onHover={() => withPeriod && setCurrentHover(dayAsDate)}
            isHoverState={Boolean(dateCurrentHover)}
            selected={isSelectedQuarter(dayAsDate, quarter)}
            disabled={
              disableChange ||
              isDisabled(panelValue?.getFullYear(), quarter.month)
            }
            today={isTodayQuarter(idx)}
            start={isStartQuarter(dayAsDate)}
            mid={isMidQuarter(dayAsDate)}
            end={isEndQuarter(dayAsDate)}
            key={quarter.month}
            type="quarter"
          >
            {quarter.name}
          </Day>
        );
      })}
    </div>
  );
};

export default QuartersCalendar;
