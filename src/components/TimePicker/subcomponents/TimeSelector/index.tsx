import React, { forwardRef, RefObject, useCallback, useEffect, useMemo, useRef } from 'react';

import { TimeType } from '@components/declaration/enums';
import { Typography } from '@components/index';
import { TIME_UNITS } from '@components/TimePicker/helpers';
import clsx from 'clsx';
import { set } from 'date-fns';

import { ITimeSelectorProps } from './types';

import styles from './TimeSelector.module.scss';

import MeasureUnit from '../MeasureUnit';

/** Высота одного элемента времени в списке (px) */
const ITEM_HEIGHT = 40;

/** Смещение для центрирования выбранного элемента. */
const CENTER_OFFSET = 3 * ITEM_HEIGHT;

/** Минимальное значение часа */
const MIN_HOUR = 0;

/** Максимальное значение часа */
const MAX_HOUR = 23;

/** Минимальное значение минуты/секунды */
const MIN_MINUTE = 0;

/** Максимальное значение минуты/секунды */
const MAX_MINUTE = 59;

const TimeSelector = forwardRef<HTMLDivElement, ITimeSelectorProps>(
  (
    {
      selectedTime,
      selectedParts,
      initialSelectedTimeFirst,
      initialSelectedTimeSecond,
      onChangeFirst,
      onChange,
      onPartsChange,
      onChangeSecond,
      selectedPartsFirst,
      selectedPartsSecond,
      onPartsChangeFirst,
      onPartsChangeSecond,
      innerValue,
      value,
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
      const start = enabledHourFrom ? enabledHourFrom(innerValue) : MIN_HOUR;
      const end = enabledHourTo ? enabledHourTo(innerValue) : MAX_HOUR;
      return Array.from({ length: (end || MAX_HOUR) - (start || MIN_HOUR) + 1 }, (_, i) => i + (start || MIN_HOUR));
    }, [enabledHourFrom, enabledHourTo, innerValue]);

    const enabledMinutes = useMemo(() => {
      const start = enabledMinuteFrom ? enabledMinuteFrom(innerValue) : MIN_MINUTE;
      const end = enabledMinuteTo ? enabledMinuteTo(innerValue) : MAX_MINUTE;
      return Array.from(
        { length: (end || MAX_MINUTE) - (start || MIN_MINUTE) + 1 },
        (_, i) => i + (start || MIN_MINUTE)
      );
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
        const newParts = { ...selectedParts };
        if (type === TimeType.HOURS) newParts.hours = value;
        if (type === TimeType.MINUTES) newParts.minutes = value;
        if (type === TimeType.SECONDS) newParts.seconds = value;

        if (onPartsChange) {
          onPartsChange(newParts);
        }

        if (onChange && newParts.hours !== undefined && newParts.minutes !== undefined) {
          const baseTime = selectedTime || new Date();
          const updatedTime = set(baseTime, {
            hours: newParts.hours,
            minutes: newParts.minutes,
            seconds: newParts.seconds ?? 0
          });
          onChange(updatedTime);
        }
      },
      [onChange, onPartsChange, selectedTime, selectedParts]
    );
    const handleTimeClickFirst = useCallback(
      (type: TimeType, value: number) => {
        const newParts = { ...selectedPartsFirst };
        if (type === TimeType.HOURS) newParts.hours = value;
        if (type === TimeType.MINUTES) newParts.minutes = value;
        if (type === TimeType.SECONDS) newParts.seconds = value;

        if (onPartsChangeFirst) {
          onPartsChangeFirst(newParts);
        }

        if (onChangeFirst && newParts.hours !== undefined && newParts.minutes !== undefined) {
          const baseTime = initialSelectedTimeFirst || new Date();
          const updatedTime = set(baseTime, {
            hours: newParts.hours,
            minutes: newParts.minutes,
            seconds: newParts.seconds ?? 0
          });
          onChangeFirst(updatedTime);
        }
      },
      [onChangeFirst, onPartsChangeFirst, initialSelectedTimeFirst, selectedPartsFirst]
    );

    const handleTimeClickSecond = useCallback(
      (type: TimeType, value: number) => {
        const newParts = { ...selectedPartsSecond };
        if (type === TimeType.HOURS) newParts.hours = value;
        if (type === TimeType.MINUTES) newParts.minutes = value;
        if (type === TimeType.SECONDS) newParts.seconds = value;

        if (onPartsChangeSecond) {
          onPartsChangeSecond(newParts);
        }

        if (onChangeSecond && newParts.hours !== undefined && newParts.minutes !== undefined) {
          const baseTime = initialSelectedTimeSecond || new Date();
          const updatedTime = set(baseTime, {
            hours: newParts.hours,
            minutes: newParts.minutes,
            seconds: newParts.seconds ?? 0
          });
          onChangeSecond(updatedTime);
        }
      },
      [onChangeSecond, onPartsChangeSecond, initialSelectedTimeSecond, selectedPartsSecond]
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
          refs[0]?.scrollTo(0, Math.max(0, time.getHours() * ITEM_HEIGHT - CENTER_OFFSET));
          refs[1]?.scrollTo(0, Math.max(0, time.getMinutes() * ITEM_HEIGHT - CENTER_OFFSET));
          refs[2]?.scrollTo(0, Math.max(0, time.getSeconds() * ITEM_HEIGHT - CENTER_OFFSET));
        }
      },
      []
    );

    useEffect(() => {
      const timeToScroll = value || new Date();
      scrollToTime(timeToScroll, [
        firstHoursContainerRef.current,
        firstMinutesContainerRef.current,
        firstSecondsContainerRef.current
      ]);
    }, [value, scrollToTime]);

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
      scrollRef: RefObject<HTMLDivElement | null>,
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
          data-ui-time-selector
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
            isTimePeriodType || isTimePeriodWithSecondsType ? selectedPartsFirst?.hours : selectedParts?.hours,
            firstHoursContainerRef,
            hour => {
              if (isTimePeriodType || isTimePeriodWithSecondsType) {
                handleTimeClickFirst(TimeType.HOURS, hour);
              } else {
                handleTimeClick(TimeType.HOURS, hour);
              }
            }
          )}
          {renderColumn(
            TIME_UNITS.mm,
            enabledMinutes,
            isTimePeriodType || isTimePeriodWithSecondsType ? selectedPartsFirst?.minutes : selectedParts?.minutes,
            firstMinutesContainerRef,
            minute => {
              if (isTimePeriodType || isTimePeriodWithSecondsType) {
                handleTimeClickFirst(TimeType.MINUTES, minute);
              } else {
                handleTimeClick(TimeType.MINUTES, minute);
              }
            }
          )}
          {(isTimeWithSecondsType || isTimePeriodWithSecondsType) &&
            renderColumn(
              TIME_UNITS.ss,
              Array.from({ length: MAX_MINUTE + 1 }, (_, i) => i),
              isTimePeriodType || isTimePeriodWithSecondsType ? selectedPartsFirst?.seconds : selectedParts?.seconds,
              firstSecondsContainerRef,
              second => {
                if (isTimePeriodType || isTimePeriodWithSecondsType) {
                  handleTimeClickFirst(TimeType.SECONDS, second);
                } else {
                  handleTimeClick(TimeType.SECONDS, second);
                }
              }
            )}
        </div>
        {(isTimePeriodType || isTimePeriodWithSecondsType) && (
          <div
            className={clsx(styles.selector, {
              [styles['selector-with-seconds']]: isTimeWithSecondsType || isTimePeriodWithSecondsType
            })}
            data-ui-time-selector
          >
            <div className={styles['title-end-period']}>
              <Typography variant="Body1-Medium">Окончание</Typography>
            </div>
            {renderColumn(
              TIME_UNITS.hh,
              enabledHours,
              selectedPartsSecond?.hours,
              secondHoursContainerRef,
              hour => handleTimeClickSecond(TimeType.HOURS, hour),
              isHourDisabled
            )}
            {renderColumn(
              TIME_UNITS.mm,
              enabledMinutes,
              selectedPartsSecond?.minutes,
              secondMinutesContainerRef,
              minute => handleTimeClickSecond(TimeType.MINUTES, minute),
              minute => isMinuteDisabled(selectedPartsSecond?.hours || 0, minute)
            )}
            {isTimePeriodWithSecondsType &&
              renderColumn(
                TIME_UNITS.ss,
                Array.from({ length: MAX_MINUTE + 1 }, (_, i) => i),
                selectedPartsSecond?.seconds,
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
