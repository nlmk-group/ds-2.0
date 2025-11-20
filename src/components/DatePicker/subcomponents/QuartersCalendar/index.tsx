import React, { FC, useMemo, useState } from 'react';

import {
  locale,
  useIsDisabled,
  useIsEnd,
  useIsMid,
  useIsSelected,
  useIsStart,
  useIsToday
} from '@components/DatePicker/helpers';
import { Day } from '@components/DatePicker/subcomponents';
import { useLocale } from '@components/DatePicker/utils';

import { IQuartersCalendarProps } from './types';

import styles from './QuarterCalendar.module.scss';

export const QuartersCalendar: FC<IQuartersCalendarProps> = ({
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
  const isTodayQuarter = useIsToday('quarter', panelValue);
  const dateFrom = useMemo(() => valueFrom && new Date(valueFrom.getFullYear(), valueFrom.getMonth()), [valueFrom]);
  const dateTo = useMemo(() => valueTo && new Date(valueTo.getFullYear(), valueTo.getMonth()), [valueTo]);
  const [innerCurrentHover, setCurrentHover] = useState<null | Date>(null);
  const currentHover = useMemo(
    () => (!valueFrom || !valueTo ? innerCurrentHover : null),
    [innerCurrentHover, valueFrom, valueTo]
  );
  const dateCurrentHover = useMemo(
    () => currentHover && new Date(currentHover.getFullYear(), currentHover.getMonth(), 1, 0, 0, 0, 0),
    [currentHover]
  );

  const isSelectedQuarter = useIsSelected(
    {
      dateCurrentHover,
      withPeriod,
      dateFrom,
      dateTo,
      selectedDate,
      panelValue
    },
    'quarter'
  );
  const isStartQuarter = useIsStart(
    {
      dateCurrentHover,
      withPeriod,
      dateFrom,
      dateTo
    },
    'quarter'
  );
  const isMidQuarter = useIsMid(
    {
      dateCurrentHover,
      withPeriod,
      dateFrom,
      dateTo
    },
    'quarter'
  );
  const isEndQuarter = useIsEnd(
    {
      dateCurrentHover,
      withPeriod,
      dateTo,
      dateFrom
    },
    'quarter'
  );
  const isDisabled = useIsDisabled(enabledFrom, enabledTo, 'quarter');

  return (
    <div className={styles.root}>
      {locale[language].quarters.map((quarter, idx) => {
        const dayAsDate = new Date((panelValue || new Date()).getFullYear(), quarter.month);
        return (
          <Day
            onClick={() => onSelect && onSelect(dayAsDate)}
            onHover={() => withPeriod && setCurrentHover(dayAsDate)}
            isHoverState={Boolean(dateCurrentHover)}
            selected={isSelectedQuarter(dayAsDate, quarter)}
            disabled={disableChange || isDisabled(panelValue?.getFullYear(), quarter.month)}
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
