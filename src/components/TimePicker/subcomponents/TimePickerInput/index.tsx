import React, {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useIMask } from 'react-imask';

import { IconScheduleTimeWatchOutlined24, Input } from '@components/index';
import {
  TIME_FORMAT,
  TIME_MASK,
  TIME_WITH_SECONDS_FORMAT,
  TIME_WITH_SECONDS_MASK
} from '@components/TimePicker/helpers';
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
      selectedTimeFirst,
      selectedTimeSecond,
      onChangeFirst,
      onChangeSecond,
      onEnterKeyDown,
      onTabKeyDown,
      value,
      enabledHourFrom,
      enabledHourTo,
      enabledMinuteFrom,
      enabledMinuteTo,
      onChange,
      isTimeType,
      isTimeWithSecondsType,
      isTimePeriodType,
      isTimePeriodWithSecondsType,
      colored,
      isOpenOnFocus,
      withIcon,
      withPicker,
      valueFrom,
      valueTo,
      label = '',
      reset,
      onReset,
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
          if (newDate) {
            onChange?.(newDate);
          }
        }
      }
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
        setInnerMaskedValue(format(value, isTimeWithSecondsType ? TIME_WITH_SECONDS_FORMAT : TIME_FORMAT));
        return;
      }
      if (withPeriod && !selectedTimeFirst && !selectedTimeSecond) {
        setInnerMaskedValue('');
        return;
      }
      if (withPeriod && selectedTimeFirst && selectedTimeSecond) {
        if (isAfter(selectedTimeFirst, selectedTimeSecond)) {
          onChangeFirst?.(selectedTimeFirst);
          onChangeSecond?.(selectedTimeSecond);

          const formattedValueFrom = format(
            selectedTimeFirst,
            isTimePeriodWithSecondsType ? TIME_WITH_SECONDS_FORMAT : TIME_FORMAT
          );

          setInnerMaskedValue(`${formattedValueFrom} — ${undefined}`);
        } else {
          const formattedValueFrom = format(
            selectedTimeFirst,
            isTimePeriodWithSecondsType ? TIME_WITH_SECONDS_FORMAT : TIME_FORMAT
          );
          const formattedValueTo = format(
            selectedTimeSecond,
            isTimePeriodWithSecondsType ? TIME_WITH_SECONDS_FORMAT : TIME_FORMAT
          );
          setInnerMaskedValue(`${formattedValueFrom} — ${formattedValueTo}`);
        }
      }
    }, [isTimeType, value, isTimeWithSecondsType, valueFrom, valueTo, isTimePeriodType]);

    const mask = useMemo(() => {
      if (withPeriod) {
        return isTimePeriodWithSecondsType
          ? `${TIME_WITH_SECONDS_MASK} — ${TIME_WITH_SECONDS_MASK}`
          : `${TIME_MASK} — ${TIME_MASK}`;
      }
      return isTimeWithSecondsType ? TIME_WITH_SECONDS_MASK : TIME_MASK;
    }, [focused, isTimeType, isTimeWithSecondsType, withPeriod, isTimePeriodWithSecondsType]);

    const {
      ref: maskRef,
      value: maskedValue,
      setValue: setMaskedValue
    } = useIMask(
      {
        mask: mask,
        definitions: { '9': /[0-9]/ },
        lazy: false
      },
      {
        onAccept: value => {
          setInnerMaskedValue(value);
        }
      }
    );

    useEffect(() => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(maskRef.current as HTMLInputElement | null);
        return;
      }

      (ref as RefObject<HTMLInputElement | null>).current = maskRef.current as HTMLInputElement | null;
    }, [ref, maskRef]);

    useEffect(() => {
      if (maskedValue !== innerMaskedValue) {
        setMaskedValue(innerMaskedValue);
      }
    }, [innerMaskedValue, maskedValue, setMaskedValue]);

    const icon = useMemo(() => {
      return withIcon && withPicker ? (
        <div
          onClick={() => {
            if (withPicker) {
              onFocus?.();
            }
          }}
          className={clsx(styles.clock, !withPicker && styles.cursor)}
        >
          <IconScheduleTimeWatchOutlined24 />
        </div>
      ) : null;
    }, [onFocus, withIcon, withPicker]);

    const isValueMatchesTheMask = (mask: string, value: string) => mask.replace(/9/gi, '_') === value;
    const handleResetInput = useCallback(() => {
      setInnerMaskedValue('');
    }, [onReset]);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setInnerMaskedValue(newValue);
    }, []);

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
            time ? parse(time, isTimePeriodWithSecondsType ? TIME_WITH_SECONDS_FORMAT : TIME_FORMAT, currentDate) : null
          );
          const enabledTimes = times.map(time => (time ? makeEnabledTimeRangeDate(time) : null));
          if (times.some(time => !time || !isValid(time))) {
            setInnerMaskedValue('');
            return null;
          }
          if (enabledTimes.some(isValid)) {
            if (enabledTimes[0] && enabledTimes[1] && isAfter(enabledTimes[0], enabledTimes[1])) {
              if (onChangeFirst && onChangeSecond) {
                onChangeFirst(enabledTimes[1]);
                onChangeSecond(enabledTimes[0]);
              }
              return [enabledTimes[1], enabledTimes[0]];
            }
            return enabledTimes;
          }
        } else if (!innerMaskedValue.includes('_')) {
          const newTime = parse(
            innerMaskedValue,
            isTimeWithSecondsType ? TIME_WITH_SECONDS_FORMAT : TIME_FORMAT,
            currentDate
          );
          const enabledTime = makeEnabledTimeRangeDate(newTime);
          if (isValid(enabledTime)) {
            return enabledTime;
          }
        } else if (
          (isTimeType && isValueMatchesTheMask(TIME_MASK, innerMaskedValue)) ||
          (isTimeWithSecondsType && isValueMatchesTheMask(TIME_WITH_SECONDS_MASK, innerMaskedValue))
        ) {
          return value || null;
        }
      } catch {
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
      valueFrom,
      onChangeFirst,
      onChangeSecond,
      withPeriod
    ]);

    return (
      <Input
        inputRef={maskRef as any}
        value={innerMaskedValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={clsx(className, styles.input)}
        disabled={disabled}
        label={label}
        icon={icon}
        colored={colored}
        reset={reset}
        onReset={handleResetInput}
        {...props}
      />
    );
  }
);

TimePickerInput.displayName = 'TimePickerInput';

export default TimePickerInput;
