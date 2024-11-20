import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';

import { TimeType } from '@components/declaration/enums';
import { Typography } from '@components/index';
import { TimeUnits } from '@components/TimePicker/helpers';
import clsx from 'clsx';
import { set } from 'date-fns';

import { ITimeSelectorProps } from './types';

import styles from './TimeSelector.module.scss';

import MeasureUnit from '../MeasureUnit';

const TimeSelector = forwardRef<HTMLDivElement, ITimeSelectorProps>(
  (
    {
      selectedTime,
      onChange,
      value,
      innerValue,
      disabled,
      isTimeWithSecondsType,
      enabledHourFrom,
      enabledHourTo,
      enabledMinuteFrom,
      enabledMinuteTo,
      ...props
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

    const handleTimeClick = useCallback(
      (type: TimeType, value: number) => {
        if (selectedTime && onChange) {
          const updatedTime = set(selectedTime, { [type]: value });
          onChange(updatedTime);
        }
      },
      [onChange, selectedTime]
    );

    const [hoursContainerRef, setHoursContainerRef] = useState<null | HTMLDivElement>(null);
    const [minutesContainerRef, setMinutesContainerRef] = useState<null | HTMLDivElement>(null);
    const [secondsContainerRef, setSecondsContainerRef] = useState<null | HTMLDivElement>(null);

    useEffect(() => {
      if (value) {
        hoursContainerRef?.scrollTo(0, value.getHours() * 40);
        minutesContainerRef?.scrollTo(0, value.getMinutes() * 40);
        secondsContainerRef?.scrollTo(0, value.getSeconds() * 40);
      }
    }, [value, hoursContainerRef, minutesContainerRef, secondsContainerRef]);

    return (
      <div
        ref={ref}
        className={clsx(styles.selector, { [styles['selector-with-seconds']]: isTimeWithSecondsType })}
        {...props}
      >
        <div className={styles['selector-column']} ref={setHoursContainerRef}>
          <div className={styles['selector-column-title']}>
            <Typography variant="Body1-Medium" color="var(--steel-70)">
              {TimeUnits.hh}
            </Typography>
          </div>
          {enabledHours.map(hour => (
            <MeasureUnit
              key={hour}
              disabled={disabled}
              selected={selectedTime?.getHours() === hour}
              onClick={() => handleTimeClick(TimeType.HOURS, hour)}
            >
              {hour.toString().padStart(2, '0')}
            </MeasureUnit>
          ))}
        </div>
        <div className={styles['selector-column']} ref={setMinutesContainerRef}>
          <div className={styles['selector-column-title']}>
            <Typography variant="Body1-Medium" color="var(--steel-70)">
              {TimeUnits.mm}
            </Typography>
          </div>
          {enabledMinutes.map(minute => (
            <MeasureUnit
              key={minute}
              disabled={disabled}
              selected={selectedTime?.getMinutes() === minute}
              onClick={() => handleTimeClick(TimeType.MINUTES, minute)}
            >
              {minute.toString().padStart(2, '0')}
            </MeasureUnit>
          ))}
        </div>
        {isTimeWithSecondsType && (
          <div className={styles['selector-column']} ref={setSecondsContainerRef}>
            <Typography variant="Body1-Medium" className={styles['selector-column-title']}>
              {TimeUnits.ss}
            </Typography>
            {Array.from({ length: 60 }, (_, i) => i).map(second => (
              <MeasureUnit
                key={second}
                disabled={disabled}
                selected={selectedTime?.getSeconds() === second}
                onClick={() => handleTimeClick(TimeType.SECONDS, second)}
              >
                {second.toString().padStart(2, '0')}
              </MeasureUnit>
            ))}
          </div>
        )}
      </div>
    );
  }
);

TimeSelector.displayName = 'TimeSelector';

export default TimeSelector;
