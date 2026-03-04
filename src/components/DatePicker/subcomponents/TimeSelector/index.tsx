import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { hours, minutes, seconds } from '@components/DatePicker/helpers';
import { Day, InfiniteContainer } from '@components/DatePicker/subcomponents';
import { Typography } from '@components/index';
import { set } from 'date-fns';

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
  const referenceDate = innerValue || value || new Date();
  const hoursFrom: number = enabledHourFrom ? enabledHourFrom(referenceDate) : 0;
  const hoursTo: number = enabledHourTo ? enabledHourTo(referenceDate) : 23;
  const minutesFrom: number = enabledMinuteFrom ? enabledMinuteFrom(referenceDate) : 0;
  const minutesTo: number = enabledMinuteTo ? enabledMinuteTo(referenceDate) : 59;

  const enabledHours = useMemo(() => {
    return hoursFrom <= hoursTo
      ? hours.slice(hoursFrom, hoursTo + 1)
      : hours.filter(hour => hour.value >= hoursFrom || hour.value <= hoursTo);
  }, [hoursFrom, hoursTo]);

  const enabledMinutes = useMemo(() => {
    return minutesFrom <= minutesTo
      ? minutes.slice(minutesFrom, minutesTo + 1)
      : minutes.filter(minute => minute.value >= minutesFrom || minute.value <= minutesTo);
  }, [minutesFrom, minutesTo]);

  const handleTimeChange = useCallback(
    (unit: 'hours' | 'minutes' | 'seconds') => (value: number) => {
      if (selectedTime && onChange) {
        onChange(set(selectedTime, { [unit]: value }));
      }
    },
    [onChange, selectedTime]
  );

  const useContainerRef = () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    return [ref, setRef] as const;
  };

  const [hoursContainerRef, setHoursContainerRef] = useContainerRef();
  const [minutesContainerRef, setMinutesContainerRef] = useContainerRef();
  const [secondsContainerRef, setSecondsContainerRef] = useContainerRef();

  useEffect(() => {
    if (!value) return;

    const scrollContainers = [
      { ref: hoursContainerRef, getValue: () => value.getHours() },
      { ref: minutesContainerRef, getValue: () => value.getMinutes() },
      { ref: secondsContainerRef, getValue: () => value.getSeconds() }
    ];

    scrollContainers.forEach(({ ref, getValue }) => {
      if (ref) {
        ref.scrollTop = getValue() * 40;
      }
    });
  }, [value, hoursContainerRef, minutesContainerRef, secondsContainerRef]);

  const checkSelectedTime = useCallback(
    (unit: 'Hours' | 'Minutes' | 'Seconds') => (value: number, selectedTime?: Date) =>
      selectedTime?.[`get${unit}`]() === value,
    []
  );

  const getSelectedHour = useMemo(() => checkSelectedTime('Hours'), [checkSelectedTime]);
  const getSelectedMinutes = useMemo(() => checkSelectedTime('Minutes'), [checkSelectedTime]);
  const getSelectedSeconds = useMemo(() => checkSelectedTime('Seconds'), [checkSelectedTime]);

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
              onClick={() => handleTimeChange('hours')(hour.value)}
            >
              {hour.label}
            </Day>
          ))}
        {infiniteTimeScroll && (
          <InfiniteContainer
            values={enabledHours}
            disabled={disabled}
            selectedTime={selectedTime}
            handleTimeClick={handleTimeChange('hours')}
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
            handleTimeClick={handleTimeChange('minutes')}
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
              onClick={() => handleTimeChange('minutes')(minute.value)}
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
                onClick={() => handleTimeChange('seconds')(second.value)}
              >
                {second.label}
              </Day>
            ))}
          {infiniteTimeScroll && (
            <InfiniteContainer
              values={seconds}
              disabled={disabled}
              selectedTime={selectedTime}
              handleTimeClick={handleTimeChange('seconds')}
              container={secondsContainerRef}
              getSelected={getSelectedSeconds}
            />
          )}
        </div>
      )}
    </div>
  );
};

TimeSelector.displayName = 'TimeSelector';

export default TimeSelector;
