import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { hours, minutes, seconds } from '@components/DatePicker/helpers';
import { Day, InfiniteContainer } from '@components/DatePicker/subcomponents';
import { Typography } from '@components/index';
import { set } from 'date-fns';
import { isInteger } from 'lodash';

import { ITimeSelectorProps } from './types';

import styles from './TimeSelector.module.scss';

export const TimeSelector: FC<ITimeSelectorProps> = ({
  withSeconds,
  enabledHourFrom,
  enabledHourTo,
  enabledMinuteFrom,
  enabledMinuteTo,
  disabled,
  selectedTime,
  value,
  onChange,
  innerValue,
  infiniteTimeScroll
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

  const checkSelectedTime = (unit: 'Hours' | 'Minutes' | 'Seconds') => (value: number, selectedTime?: Date) =>
    selectedTime?.[`get${unit}`]() === value;

  const getSelectedHour = checkSelectedTime('Hours');
  const getSelectedMinutes = checkSelectedTime('Minutes');
  const getSelectedSeconds = checkSelectedTime('Seconds');

  return (
    <div className={styles.root}>
      <div className={styles.column} ref={setHoursContainerRef}>
        <div className={styles.columnTitle}>
          <Typography variant="Body1-Medium">чч</Typography>
        </div>
        {!infiniteTimeScroll &&
          enabledHours.map(hour => (
            <Day
              key={hour.value}
              disabled={disabled}
              selected={getSelectedHour(hour.value, selectedTime)}
              onClick={() => handleHourClick(hour.value)}
            >
              {hour.label}
            </Day>
          ))}
        {infiniteTimeScroll && (
          <InfiniteContainer
            values={enabledHours}
            disabled={disabled}
            selectedTime={selectedTime}
            handleMinuteClick={handleHourClick}
            container={hoursContainerRef}
            getSelected={getSelectedHour}
          />
        )}
      </div>
      <div className={styles.column} ref={setMinutesContainerRef}>
        <div className={styles.columnTitle}>
          <Typography variant="Body1-Medium">мм</Typography>
        </div>
        {infiniteTimeScroll && (
          <InfiniteContainer
            values={enabledMinutes}
            disabled={disabled}
            selectedTime={selectedTime}
            handleMinuteClick={handleMinuteClick}
            container={minutesContainerRef}
            getSelected={getSelectedMinutes}
          />
        )}
        {!infiniteTimeScroll &&
          enabledMinutes.map(minute => (
            <Day
              key={minute.value}
              disabled={disabled}
              selected={getSelectedMinutes(minute.value, selectedTime)}
              onClick={() => handleMinuteClick(minute.value)}
            >
              {minute.label}
            </Day>
          ))}
      </div>
      {withSeconds && (
        <div className={styles.column} ref={setSecondsContainerRef}>
          <div className={styles.columnTitle}>
            <Typography variant="Body1-Medium">сс</Typography>
          </div>
          {!infiniteTimeScroll &&
            seconds.map(second => (
              <Day
                key={second.value}
                disabled={disabled}
                selected={getSelectedSeconds(second.value, selectedTime)}
                onClick={() => handleSecondClick(second.value)}
              >
                {second.label}
              </Day>
            ))}
          {infiniteTimeScroll && (
            <InfiniteContainer
              values={seconds}
              disabled={disabled}
              selectedTime={selectedTime}
              handleMinuteClick={handleSecondClick}
              container={secondsContainerRef}
              getSelected={getSelectedSeconds}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TimeSelector;
