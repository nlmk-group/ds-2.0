import React, { forwardRef, RefObject, useCallback, useEffect, useMemo, useRef } from 'react';

import { TimeType } from '@components/declaration/enums';
import { Typography } from '@components/index';
import { TIME_UNITS } from '@components/TimePicker/helpers';
import clsx from 'clsx';
import { set } from 'date-fns';

import { ITimeSelectorProps } from './types';

import styles from './TimeSelector.module.scss';

import MeasureUnit from '../MeasureUnit';

const TimeSelector = forwardRef<HTMLDivElement, ITimeSelectorProps>(
  (
    {
      selectedTime,
      initialSelectedTimeFirst,
      initialSelectedTimeSecond,
      onChangeFirst,
      onChange,
      onChangeSecond,
      innerValue,
      disabled,
      isTimeWithSecondsType,
      isTimePeriodType,
      isTimePeriodWithSecondsType,
      enabledHourFrom,
      enabledHourTo,
      enabledMinuteFrom,
      enabledMinuteTo
    },
    ref
  ) => {
    const enabledHours = useMemo(() => {
      const start = enabledHourFrom ? enabledHourFrom(innerValue) : 0;
      const end = enabledHourTo ? enabledHourTo(innerValue) : 23;
      return Array.from({ length: (end || 23) - (start || 0) + 1 }, (_, i) => i + (start || 0));
    }, [enabledHourFrom, enabledHourTo, innerValue]);

    const enabledMinutes = useMemo(() => {
      const start = enabledMinuteFrom ? enabledMinuteFrom(innerValue) : 0;
      const end = enabledMinuteTo ? enabledMinuteTo(innerValue) : 59;
      return Array.from({ length: (end || 59) - (start || 0) + 1 }, (_, i) => i + (start || 0));
    }, [enabledMinuteFrom, enabledMinuteTo, innerValue]);

    const isHourDisabled = useCallback(
      (hour: number) => {
        if (!initialSelectedTimeFirst) return false;
        const firstHour = initialSelectedTimeFirst.getHours();
        return hour < firstHour;
      },
      [initialSelectedTimeFirst]
    );

    const isMinuteDisabled = useCallback(
      (hour: number, minute: number) => {
        if (!initialSelectedTimeFirst) return false;
        const firstHour = initialSelectedTimeFirst.getHours();
        const firstMinute = initialSelectedTimeFirst.getMinutes();

        return hour === firstHour && minute < firstMinute;
      },
      [initialSelectedTimeFirst]
    );
    const handleTimeClick = useCallback(
      (type: TimeType, value: number) => {
        if (selectedTime && onChange) {
          const updatedTime = set(selectedTime, { [type]: value });
          onChange(updatedTime);
        }
      },
      [onChange, selectedTime]
    );
    const handleTimeClickFirst = useCallback(
      (type: TimeType, value: number) => {
        if (initialSelectedTimeFirst && onChangeFirst) {
          const updatedTime = set(initialSelectedTimeFirst, { [type]: value });
          onChangeFirst(updatedTime);
        }
      },
      [onChangeFirst, initialSelectedTimeFirst]
    );
    const handleTimeClickSecond = useCallback(
      (type: TimeType, value: number) => {
        if (initialSelectedTimeSecond && onChangeSecond) {
          const updatedTime = set(initialSelectedTimeSecond, { [type]: value });
          onChangeSecond(updatedTime);
        }
      },
      [onChangeSecond, initialSelectedTimeSecond]
    );

    const firstHoursContainerRef = useRef<HTMLDivElement | null>(null);
    const firstMinutesContainerRef = useRef<HTMLDivElement | null>(null);
    const firstSecondsContainerRef = useRef<HTMLDivElement | null>(null);

    const secondHoursContainerRef = useRef<HTMLDivElement | null>(null);
    const secondMinutesContainerRef = useRef<HTMLDivElement | null>(null);
    const secondSecondsContainerRef = useRef<HTMLDivElement | null>(null);

    const scrollToTime = useCallback(
      (time: Date | null | undefined, refs: [HTMLDivElement | null, HTMLDivElement | null, HTMLDivElement | null]) => {
        if (time) {
          refs[0]?.scrollTo(0, time.getHours() * 40);
          refs[1]?.scrollTo(0, time.getMinutes() * 40);
          refs[2]?.scrollTo(0, time.getSeconds() * 40);
        }
      },
      []
    );

    useEffect(() => {
      scrollToTime(selectedTime, [
        firstHoursContainerRef.current,
        firstMinutesContainerRef.current,
        firstSecondsContainerRef.current
      ]);
    }, [selectedTime, firstHoursContainerRef, firstMinutesContainerRef, firstSecondsContainerRef]);

    useEffect(() => {
      scrollToTime(initialSelectedTimeFirst, [
        firstHoursContainerRef.current,
        firstMinutesContainerRef.current,
        firstSecondsContainerRef.current
      ]);
    }, [initialSelectedTimeFirst, firstHoursContainerRef, firstMinutesContainerRef, firstSecondsContainerRef]);

    useEffect(() => {
      scrollToTime(initialSelectedTimeSecond, [
        secondHoursContainerRef.current,
        secondMinutesContainerRef.current,
        secondSecondsContainerRef.current
      ]);
    }, [initialSelectedTimeSecond, secondHoursContainerRef, secondMinutesContainerRef, secondSecondsContainerRef]);

    const renderColumn = (
      title: string,
      items: number[],
      selectedValue: number | undefined,
      scrollRef: RefObject<HTMLDivElement>,
      onClick: (value: number) => void,
      disableCondition?: (value: number) => boolean
    ) => (
      <div className={styles['selector-column']} ref={scrollRef}>
        <div className={styles['selector-column-title']}>
          <Typography variant="Body1-Medium" color="var(--steel-70)">
            {title}
          </Typography>
        </div>
        {items.map(item => (
          <MeasureUnit
            key={item}
            disabled={disableCondition?.(item) || disabled}
            selected={selectedValue === item}
            onClick={() => onClick(item)}
          >
            {item.toString().padStart(2, '0')}
          </MeasureUnit>
        ))}
      </div>
    );

    return (
      <div style={{ display: 'flex', gap: '12px' }}>
        <div
          ref={ref}
          className={clsx(styles.selector, {
            [styles['selector-single']]: !isTimePeriodType && !isTimePeriodWithSecondsType,
            [styles['selector-with-seconds']]: isTimeWithSecondsType || isTimePeriodWithSecondsType
          })}
        >
          {(isTimePeriodType || isTimePeriodWithSecondsType) && (
            <div
              className={clsx(
                isTimePeriodWithSecondsType ? styles['title-start-period-with-seconds'] : styles['title-start-period']
              )}
            >
              <Typography variant="Body1-Medium">Начало</Typography>
            </div>
          )}
          {renderColumn(
            TIME_UNITS.hh,
            enabledHours,
            initialSelectedTimeFirst?.getHours(),
            firstHoursContainerRef,
            hour => {
              handleTimeClickFirst(TimeType.HOURS, hour);
              handleTimeClick(TimeType.HOURS, hour);
            }
          )}
          {renderColumn(
            TIME_UNITS.mm,
            enabledMinutes,
            initialSelectedTimeFirst?.getMinutes(),
            firstMinutesContainerRef,
            minute => {
              handleTimeClickFirst(TimeType.MINUTES, minute);
              handleTimeClick(TimeType.MINUTES, minute);
            }
          )}
          {(isTimeWithSecondsType || isTimePeriodWithSecondsType) &&
            renderColumn(
              TIME_UNITS.ss,
              Array.from({ length: 60 }, (_, i) => i),
              initialSelectedTimeFirst?.getSeconds(),
              firstSecondsContainerRef,
              second => {
                handleTimeClickFirst(TimeType.SECONDS, second);
                handleTimeClick(TimeType.SECONDS, second);
              }
            )}
        </div>
        {(isTimePeriodType || isTimePeriodWithSecondsType) && (
          <div
            className={clsx(styles.selector, {
              [styles['selector-with-seconds']]: isTimeWithSecondsType || isTimePeriodWithSecondsType
            })}
          >
            <div className={styles['title-end-period']}>
              <Typography variant="Body1-Medium">Окончание</Typography>
            </div>
            {renderColumn(
              TIME_UNITS.hh,
              enabledHours,
              initialSelectedTimeSecond?.getHours(),
              secondHoursContainerRef,
              hour => handleTimeClickSecond(TimeType.HOURS, hour),
              isHourDisabled
            )}
            {renderColumn(
              TIME_UNITS.mm,
              enabledMinutes,
              initialSelectedTimeSecond?.getMinutes(),
              secondMinutesContainerRef,
              minute => handleTimeClickSecond(TimeType.MINUTES, minute),
              minute => isMinuteDisabled(initialSelectedTimeSecond?.getHours() || 0, minute)
            )}
            {isTimePeriodWithSecondsType &&
              renderColumn(
                TIME_UNITS.ss,
                Array.from({ length: 60 }, (_, i) => i),
                initialSelectedTimeSecond?.getSeconds(),
                secondSecondsContainerRef,
                second => handleTimeClickSecond(TimeType.SECONDS, second)
              )}
          </div>
        )}
      </div>
    );
  }
);

TimeSelector.displayName = 'TimeSelector';

export default TimeSelector;
