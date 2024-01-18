import React, { ChangeEvent, forwardRef, KeyboardEvent, useCallback, useEffect, useMemo, useState } from 'react';

import { IconSchedule24 } from '@components/Icon/IconsList/24';
import { Input } from '@components/index';
import InputMaskCorrect from '@components/InputMaskCorrect';
import {
  timeFormat,
  timeMask,
  timeWithSecondsFormat,
  timeWithSecondsMask
} from '@components/TimePicker/helpers/timeFormat';
import clsx from 'clsx';
import { format, isAfter, isValid, parse, set } from 'date-fns';
import { range } from 'lodash';

import { ITimePickerInputProps } from './types';

import styles from './TimePickerInput.module.scss';

const TimePickerInput = forwardRef<HTMLInputElement | null, ITimePickerInputProps>(
  (
    {
      className,
      disabled,
      onFocus,
      onBlur,
      onEnterKeyDown,
      onTabKeyDown,
      value,
      enabledHourFrom,
      enabledHourTo,
      enabledMinuteFrom,
      enabledMinuteTo,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange,
      isTimeType,
      isTimeWithSecondsType,
      isTimePeriodType,
      isTimePeriodWithSecondsType,
      // todo вернуть после добавления пропса в Input
      // colored,
      isOpenOnFocus,
      withIcon,
      withPicker,
      valueFrom,
      valueTo,
      label = '',
      ...props
    },
    ref
  ) => {
    const [innerMaskedValue, setInnerMaskedValue] = useState('');
    const [focused, setFocused] = useState(false);
    const withPeriod = useMemo(
      () => isTimePeriodWithSecondsType || isTimePeriodType,
      [isTimePeriodType, isTimePeriodWithSecondsType]
    );

    const handleFocus = () => {
      setFocused(true);
      if (onFocus && isOpenOnFocus) {
        onFocus();
      }
    };

    const handleBlur = () => {
      setFocused(false);
      if (onBlur) {
        const newDate = computeNewDate();
        if (Array.isArray(newDate)) {
          onBlur(newDate[0], newDate[1]);
        } else {
          onBlur(newDate);
        }
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInnerMaskedValue(newValue);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.key === 'Tab' && onTabKeyDown) {
        const newDate = computeNewDate();
        if (Array.isArray(newDate)) {
          onTabKeyDown(newDate[0], newDate[1]);
        } else {
          onTabKeyDown(newDate);
        }
      }
      if (e.key === 'Enter' && onEnterKeyDown) {
        const newDate = computeNewDate();
        if (Array.isArray(newDate)) {
          onEnterKeyDown(newDate[0], newDate[1]);
        } else {
          onEnterKeyDown(newDate);
        }
      }
    };

    useEffect(() => {
      if (!withPeriod) {
        if (!value) {
          setInnerMaskedValue('');
          return;
        }
        setInnerMaskedValue(format(value, isTimeWithSecondsType ? timeWithSecondsFormat : timeFormat));
        return;
      }
      if (withPeriod) {
        if (!valueFrom && !valueTo) {
          setInnerMaskedValue('');
          return;
        }
        const formattedValueFrom = valueFrom
          ? format(valueFrom, isTimePeriodWithSecondsType ? timeWithSecondsFormat : timeFormat)
          : '';
        const formattedValueTo = valueTo
          ? format(valueTo, isTimePeriodWithSecondsType ? timeWithSecondsFormat : timeFormat)
          : '';
        setInnerMaskedValue(`${formattedValueFrom} — ${formattedValueTo}`);
      }
    }, [isTimeType, value, isTimeWithSecondsType, valueFrom, valueTo, isTimePeriodType]);

    const mask = useMemo(() => {
      if (withPeriod) {
        return isTimePeriodWithSecondsType
          ? `${timeWithSecondsMask} — ${timeWithSecondsMask}`
          : `${timeMask} — ${timeMask}`;
      }
      return isTimeWithSecondsType ? timeWithSecondsMask : timeMask;
    }, [focused, isTimeType, isTimeWithSecondsType]);

    const icon = useMemo(() => {
      return withIcon ? (
        <div
          onClick={() => {
            if (withPicker) {
              onFocus?.();
            }
          }}
          className={clsx(styles.clock, !withPicker && styles.cursor)}
        >
          <IconSchedule24 />
        </div>
      ) : null;
    }, [onFocus, withIcon, withPicker]);

    const isValueMatchesTheMask = (mask: string, value: string) => mask.replace(/9/gi, '_') === value;

    const computeNewDate = useCallback((): Date | null | (Date | null)[] => {
      const currentDate = new Date();
      const hourFrom = enabledHourFrom ? Number(enabledHourFrom(currentDate)) : 0;
      const hourTo = enabledHourTo ? Number(enabledHourTo(currentDate)) : 23;
      const minuteFrom = enabledMinuteFrom ? Number(enabledMinuteFrom(currentDate)) : 0;
      const minuteTo = enabledMinuteTo ? Number(enabledMinuteTo(currentDate)) : 59;

      const enabledHoursRange = range(hourFrom, hourTo + 1);
      const enabledMinutesRange = range(minuteFrom, minuteTo + 1);

      const makeEnabledTimeRangeDate = (date: Date) => {
        const isEnabledHour = enabledHoursRange.includes(date.getHours());
        const isEnabledMinute = enabledMinutesRange.includes(date.getMinutes());
        return set(date, {
          hours: isEnabledHour ? date.getHours() : enabledHoursRange[0],
          minutes: isEnabledMinute ? date.getMinutes() : enabledMinutesRange[0]
        });
      };

      try {
        if (withPeriod) {
          const timeParts = innerMaskedValue.split(' — ');
          const times = timeParts.map(time =>
            time ? parse(time, isTimePeriodWithSecondsType ? timeWithSecondsFormat : timeFormat, currentDate) : null
          );
          const enabledTimes = times.map(time => (time ? makeEnabledTimeRangeDate(time) : null));
          if (enabledTimes.some(isValid)) {
            if (enabledTimes[0] && enabledTimes[1] && isAfter(enabledTimes[0], enabledTimes[1])) {
              return [enabledTimes[1], enabledTimes[0]];
            }
            return enabledTimes;
          }
        } else if (!innerMaskedValue.includes('_')) {
          const newTime = parse(
            innerMaskedValue,
            isTimeWithSecondsType ? timeWithSecondsFormat : timeFormat,
            currentDate
          );
          const enabledTime = makeEnabledTimeRangeDate(newTime);
          if (isValid(enabledTime)) {
            return enabledTime;
          }
        } else if (
          (isTimeType && isValueMatchesTheMask(timeMask, innerMaskedValue)) ||
          (isTimeWithSecondsType && isValueMatchesTheMask(timeWithSecondsMask, innerMaskedValue))
        ) {
          return value || null;
        }
      } catch (e) {
        return null;
      }
      return null;
    }, [
      enabledHourFrom,
      enabledHourTo,
      enabledMinuteFrom,
      enabledMinuteTo,
      innerMaskedValue,
      value,
      isTimeWithSecondsType,
      isTimeType,
      isTimePeriodWithSecondsType,
      isTimePeriodType,
      valueTo,
      valueFrom
    ]);

    return (
      <InputMaskCorrect
        mask={mask}
        value={innerMaskedValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        formatChars={{ 9: '[0-9]' }}
      >
        {/* todo  add colored={colored} */}
        {() => (
          <Input
            inputRef={ref}
            onKeyDown={handleKeyDown}
            className={clsx(className, styles.input)}
            disabled={disabled}
            label={label}
            icon={icon}
            {...props}
          />
        )}
      </InputMaskCorrect>
    );
  }
);

export default TimePickerInput;
