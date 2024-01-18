import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { hours, minutes, seconds } from '@components/DatePicker/helpers';
import { Day } from '@components/DatePicker/subcomponents';
import { TimeSelectorProps } from '@components/DatePicker/subcomponents/TimeSelector/types';
import { set } from 'date-fns';
import { isInteger } from 'lodash';

import styles from './TimeSelector.module.scss';

export const TimeSelector: FC<TimeSelectorProps> = ({
  withSeconds,
  enabledHourFrom,
  enabledHourTo,
  enabledMinuteFrom,
  enabledMinuteTo,
  disabled,
  selectedTime,
  value,
  onChange,
  innerValue
}) => {
  let hoursFrom = 0,
    hoursTo = 0,
    minutesFrom = 0,
    minutesTo = 0;
  if (enabledHourFrom) {
    hoursFrom = enabledHourFrom(innerValue);
  }
  if (enabledHourTo) {
    hoursTo = enabledHourTo(innerValue);
  }
  if (enabledMinuteFrom) {
    minutesFrom = enabledMinuteFrom(innerValue);
  }
  if (enabledMinuteTo) {
    minutesTo = enabledMinuteTo(innerValue);
  }

  const enabledHours = useMemo(() => {
    if ((hoursFrom || hoursFrom === 0) && !hoursTo) {
      return hours.slice(hoursFrom);
    } else if (hoursTo && !hoursFrom && hoursFrom !== 0) {
      return hours.slice(0, hoursTo + 1);
    } else if ((hoursFrom || hoursFrom === 0) && hoursTo) {
      return hours.slice(hoursFrom, hoursTo + 1);
    } else {
      return hours;
    }
  }, [hoursFrom, hoursTo]);

  const enabledMinutes = useMemo(() => {
    const minutesFromEnabled = minutesFrom && isInteger(minutesFrom) && minutesFrom > 0 ? minutesFrom : 0;
    const minutesToEnabled = minutesTo && isInteger(minutesTo) && minutesTo < 60 ? minutesTo : 59;
    return minutes.slice(minutesFromEnabled, minutesToEnabled + 1);
  }, [minutesFrom, minutesTo]);
  const handleHourClick = useCallback(
    (hours: number) => {
      if (selectedTime && onChange) {
        onChange(set(selectedTime, { hours }));
      }
    },
    [onChange, selectedTime]
  );
  const handleMinuteClick = useCallback(
    (minutes: number) => {
      if (selectedTime && onChange) {
        onChange(set(selectedTime, { minutes }));
      }
    },
    [onChange, selectedTime]
  );

  const handleSecondClick = useCallback(
    (seconds: number) => {
      if (selectedTime && onChange) {
        onChange(set(selectedTime, { seconds }));
      }
    },
    [onChange, selectedTime]
  );
  const [minutesContainerRef, setMinutesContainerRef] = useState<null | HTMLDivElement>(null);
  const [hoursContainerRef, setHoursContainerRef] = useState<null | HTMLDivElement>(null);
  const [secondsContainerRef, setSecondsContainerRef] = useState<null | HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      if (hoursContainerRef) {
        hoursContainerRef.scrollTop = value.getHours() * 40;
      }
      if (minutesContainerRef) {
        minutesContainerRef.scrollTop = value.getMinutes() * 40;
      }
      if (secondsContainerRef) {
        secondsContainerRef.scrollTop = value.getSeconds() * 40;
      }
    }
  }, [secondsContainerRef, hoursContainerRef, minutesContainerRef, value]);

  return (
    <div className={styles.root}>
      <div className={styles.column} ref={setHoursContainerRef}>
        <div className={styles.columnTitle}>чч</div>
        {enabledHours.map(hour => (
          <Day
            key={hour.value}
            disabled={disabled}
            selected={selectedTime && hour.value === selectedTime.getHours()}
            onClick={() => handleHourClick(hour.value)}
          >
            {hour.label}
          </Day>
        ))}
      </div>
      <div className={styles.column} ref={setMinutesContainerRef}>
        <div className={styles.columnTitle}>мм</div>
        {enabledMinutes.map(minute => (
          <Day
            key={minute.value}
            disabled={disabled}
            selected={selectedTime && minute.value === selectedTime.getMinutes()}
            onClick={() => handleMinuteClick(minute.value)}
          >
            {minute.label}
          </Day>
        ))}
      </div>
      {withSeconds && (
        <div className={styles.column} ref={setSecondsContainerRef}>
          <div className={styles.columnTitle}>сс</div>
          {seconds.map(second => (
            <Day
              key={second.value}
              disabled={disabled}
              selected={selectedTime && second.value === selectedTime.getSeconds()}
              onClick={() => handleSecondClick(second.value)}
            >
              {second.label}
            </Day>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeSelector;
