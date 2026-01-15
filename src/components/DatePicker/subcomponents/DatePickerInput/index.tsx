import React, {
  ChangeEvent,
  forwardRef,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { useIMask } from 'react-imask';

import {
  dateFormat,
  dateFormatByLevel,
  dateFormatWithoutYear,
  dateMask,
  dateMaskWithoutYear,
  dateTimeFormat,
  dateTimeFormatWithoutYear,
  dateTimeMask,
  dateTimeMaskWithoutYear,
  dateTimeSecondsFormat,
  dateTimeSecondsFormatWithoutYear,
  dateTimeSecondsMask,
  dateTimeSecondsMaskWithoutYear,
  defaultShiftLength,
  isEqualDatesAfterLevel,
  LEVEL_MAPPING_ENUM,
  locale,
  monthAndYearFormat,
  monthAndYearMask,
  numberedDateByLevel,
  onlyYearFormat,
  onlyYearMask,
  periodDefaultMask,
  periodInnerMaskByLevel,
  periodMaskByLevel,
  periodMaskByLeveWithOneDate,
  periodWithShiftsMaskCustom,
  periodWithShiftsMaskDefault,
  quarterAndYearMask,
  quarterFormatInput,
  quarterMonthKeys
} from '@components/DatePicker/helpers';
import { useLocale } from '@components/DatePicker/utils';
import { customInputColors, sizesMappingInput } from '@components/declaration';
import { CalendarSvgIcon } from '@components/Icon/IconsInternal';
import { Input } from '@components/index';
import clsx from 'clsx';
import { format, isValid, parse, set } from 'date-fns';

import { IDatePickerInputProps } from './types';

import styles from './DatePickerInput.module.scss';

export const DatePickerInput = forwardRef<HTMLInputElement | null, IDatePickerInputProps>(
  (
    {
      withPeriod,
      valueFrom,
      valueTo,
      className,
      disabled,
      showTime,
      onFocus,
      onBlur,
      onEnterKeyDown,
      onTabKeyDown,
      value,
      enabledTo,
      enabledFrom,
      enabledHourFrom,
      enabledHourTo,
      enabledMinuteFrom,
      enabledMinuteTo,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange,
      withShift,
      withSeconds,
      shiftTo,
      shiftFrom,
      shiftLength,
      level,
      isOpenOnFocus,
      isHideYear,
      disableChangesOnBlur,
      reset,
      onReset,
      error,
      helperText,
      ...props
    },
    ref
  ) => {
    const language = useLocale();
    const [innerMaskedValue, setInnerMaskedValue] = useState('');
    const [focused, setFocused] = React.useState(false);
    const _inputRef = useRef<HTMLInputElement>(null);
    const prevValueRef = useRef<string>('');
    const cursorPosRef = useRef<number | null>(null);
    const isEnterPressedRef = useRef<boolean>(false);

    const getEmptyMaskForLevel = useCallback(() => {
      if (level === LEVEL_MAPPING_ENUM.quarter) {
        return `_ квартал ____`;
      }
      if (level === LEVEL_MAPPING_ENUM.year) {
        return '____';
      }
      if (level === LEVEL_MAPPING_ENUM.month) {
        return '__.____';
      }
      if (showTime) {
        if (withSeconds) {
          return isHideYear ? '__.__  __:__:__' : '__.__.____  __:__:__';
        }
        return isHideYear ? '__.__  __:__' : '__.__.____  __:__';
      }
      return isHideYear ? '__.__' : '__.__.____';
    }, [level, showTime, withSeconds, isHideYear]);

    const getEmptyMask = useCallback(() => {
      return periodInnerMaskByLevel(locale[language].quarterTranslation)[level];
    }, [level, language]);

    const getEmptyMaskForPeriod = useCallback(() => {
      const emptyMask = getEmptyMask();
      const separator = withShift ? '/' : ' — ';

      if (withShift) {
        return `${emptyMask}/_${separator}${emptyMask}/_`;
      }
      return `${emptyMask}${separator}${emptyMask}`;
    }, [getEmptyMask, withShift]);

    const onInputFocus = () => {
      setFocused(true);

      if (!withPeriod && !value && !innerMaskedValue) {
        const emptyMask = getEmptyMaskForLevel();
        setInnerMaskedValue(emptyMask);
        prevValueRef.current = emptyMask;
      } else if (withPeriod && !valueFrom && !valueTo && !innerMaskedValue) {
        const emptyMask = getEmptyMaskForPeriod();
        setInnerMaskedValue(emptyMask);
        prevValueRef.current = emptyMask;
      }

      if (onFocus && isOpenOnFocus) {
        onFocus();
      }
    };
    const onInputBlur = () => setFocused(false);

    useEffect(() => {
      let newValue = '';

      if (!withPeriod) {
        if (!value) {
          newValue = '';
        } else {
          if (level === LEVEL_MAPPING_ENUM.month || level === LEVEL_MAPPING_ENUM.year) {
            const dateFormat = dateFormatByLevel[level];
            newValue = format(value, dateFormat);
          } else if (level === LEVEL_MAPPING_ENUM.quarter) {
            const quarter = Math.floor((value.getMonth() + 3) / 3);
            const year = value.getFullYear();
            newValue = `${quarter} квартал ${year}`;
          } else {
            const dateFormatMask = isHideYear ? dateFormatWithoutYear : dateFormat;
            const dateTimeFormatMask = isHideYear ? dateTimeFormatWithoutYear : dateTimeFormat;
            const dateTimeSecondsFormatMask = isHideYear ? dateTimeSecondsFormatWithoutYear : dateTimeSecondsFormat;
            const withSecondsCondition = () => {
              return withSeconds ? dateTimeSecondsFormatMask : dateTimeFormatMask;
            };

            const defaultFormat = showTime ? withSecondsCondition() : dateFormatMask;

            newValue = format(value, defaultFormat);
          }
        }
      }

      if (withPeriod) {
        const emptyMask = getEmptyMask();
        const valueFromFormatted = valueFrom ? format(valueFrom, dateFormatByLevel[level]) : '';
        const valueToFormatted = valueTo ? format(valueTo, dateFormatByLevel[level]) : '';

        if (!valueFromFormatted && !valueToFormatted) {
          newValue = '';
        } else {
          const shiftFromValue = valueFromFormatted ? shiftFrom ?? '_' : '_';
          const shiftToValue = valueToFormatted ? shiftTo ?? '_' : '_';
          const periodSeparator = ' — ';

          let formattedValue = '';

          if (withShift) {
            formattedValue = `${valueFromFormatted || emptyMask}/${shiftFromValue}${periodSeparator}${
              valueToFormatted || emptyMask
            }/${shiftToValue}`;
          } else if (valueFrom && valueTo && level === LEVEL_MAPPING_ENUM.quarter) {
            formattedValue = `${quarterFormatInput(valueFrom)}${periodSeparator}${quarterFormatInput(valueTo)}`;
          } else {
            formattedValue = `${valueFromFormatted || emptyMask}${periodSeparator}${valueToFormatted || emptyMask}`;
          }

          newValue = formattedValue;
        }
      }

      setInnerMaskedValue(newValue);
      prevValueRef.current = newValue;
    }, [level, shiftFrom, shiftTo, showTime, value, valueFrom, valueTo, withPeriod, withSeconds, withShift]);

    const mask = useMemo(() => {
      let valueFromFormatted = '';

      if (valueFrom) {
        valueFromFormatted =
          level === LEVEL_MAPPING_ENUM.quarter
            ? quarterFormatInput(valueFrom)
            : format(valueFrom, dateFormatByLevel[level]);
      }

      const oneDateMask = periodMaskByLeveWithOneDate(locale[language].quarterTranslation)[level];
      const periodMask = periodMaskByLevel(locale[language].quarterTranslation)[level];

      const dateTimeMaskValue = isHideYear ? dateTimeMaskWithoutYear : dateTimeMask;
      const dateTimeSecondsMaskValue = isHideYear ? dateTimeSecondsMaskWithoutYear : dateTimeSecondsMask;

      const periodWithShiftsMaskDefaultValue =
        shiftLength === defaultShiftLength ? periodWithShiftsMaskDefault : periodWithShiftsMaskCustom;

      const periodInnerMask = periodInnerMaskByLevel(locale[language].quarterTranslation)[level];

      if (level !== LEVEL_MAPPING_ENUM.day && !withPeriod) {
        return oneDateMask;
      }
      if (withPeriod) {
        if (withShift) {
          return periodWithShiftsMaskDefaultValue;
        }
        if (!focused && valueFrom && valueTo && isEqualDatesAfterLevel(level, valueFrom, valueTo)) {
          return oneDateMask;
        }
        if (focused && valueFrom && valueTo && isEqualDatesAfterLevel(level, valueFrom, valueTo)) {
          setInnerMaskedValue(`${valueFromFormatted} — ${periodInnerMask}`);
          return periodMask;
        } else {
          return periodMask;
        }
      }
      if (showTime) {
        if (withSeconds) {
          return dateTimeSecondsMaskValue;
        }
        return dateTimeMaskValue;
      }
      return isHideYear ? dateMaskWithoutYear : dateMask;
    }, [focused, level, shiftLength, showTime, valueFrom, valueTo, withPeriod, withSeconds, withShift]);

    const {
      ref: maskRef,
      value: maskedValue,
      setValue: setMaskedValue
    } = useIMask(
      withPeriod
        ? {
            mask: false as any,
            lazy: false
          }
        : {
            mask: mask,
            definitions: {
              '9': /[0-9]/,
              '3': /[0-3]/,
              '2': /[0-2]/
            },
            lazy: false
          },
      {
        onAccept: value => {
          if (!withPeriod) {
            setInnerMaskedValue(value);
            prevValueRef.current = value;
          }
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
      if (!withPeriod && maskedValue !== innerMaskedValue) {
        setMaskedValue(innerMaskedValue);
      }
    }, [innerMaskedValue, maskedValue, setMaskedValue, withPeriod]);

    const isValueMatchesTheMask = (mask: string, value: string) => mask.replace(/9/gi, '_') === value;

    const applyIfEnabled: (
      dateFrom?: Date | null,
      dateTo?: Date | null,
      shiftFrom?: number,
      shiftTo?: number
    ) => [any, any, any, any] = (dateFrom: Date | null = null, dateTo: Date | null = null, shiftFrom, shiftTo) => {
      const args = [shiftFrom, shiftTo];
      const hourFrom = enabledHourFrom && Number(enabledHourFrom(new Date()));
      const hourTo = enabledHourTo && Number(enabledHourTo(new Date()));
      const minuteFrom = enabledMinuteFrom && Number(enabledMinuteFrom(new Date()));
      const minuteTo = enabledMinuteTo && Number(enabledMinuteTo(new Date()));
      const withHoursRange = Boolean(enabledHourFrom || enabledHourTo || enabledHourFrom === 0);
      const withMinutesRange = Boolean(enabledMinuteFrom || enabledMinuteFrom === 0 || enabledMinuteTo);
      const enabledHoursRange = Array.from(
        { length: (hourTo || 23) - (hourFrom || 0) + 1 },
        (_, i) => (hourFrom || 0) + i
      );
      const enabledMinutesRange = Array.from(
        {
          length:
            (minuteTo && Number.isInteger(minuteTo) && minuteTo < 60 ? minuteTo + 1 : 60) -
            (minuteFrom && Number.isInteger(minuteFrom) && minuteFrom > 0 ? minuteFrom : 0)
        },
        (_, i) => (minuteFrom && Number.isInteger(minuteFrom) && minuteFrom > 0 ? minuteFrom : 0) + i
      );
      const makeEnabledTimeRangeDate = (date: Date) => {
        const isEnabledHour = date && enabledHoursRange.includes(new Date(date).getHours());
        const isEnabledMinute = date && enabledMinutesRange.includes(new Date(date).getMinutes());
        return (
          date &&
          set(new Date(date), {
            hours: isEnabledHour ? date && new Date(date).getHours() : enabledHoursRange[0],
            minutes: isEnabledMinute ? date && new Date(date).getMinutes() : enabledMinutesRange[0]
          })
        );
      };
      if (enabledFrom && !enabledTo) {
        if (!dateFrom) {
          if (withPeriod) {
            return [
              dateFrom ? new Date(dateFrom) : null,
              dateTo ? new Date(dateTo) : null,
              args[0] as any,
              args[1] as any
            ];
          } else if (withHoursRange || withMinutesRange) {
            return [null, null, null, null];
          } else {
            return [dateFrom ? new Date(dateFrom) : null, null, null, null];
          }
        }
        if (
          (dateFrom && numberedDateByLevel(dateFrom, level) >= numberedDateByLevel(enabledFrom, level)) ||
          (dateTo && numberedDateByLevel(dateTo, level) >= numberedDateByLevel(enabledFrom, level))
        ) {
          if (withPeriod) {
            return [
              dateFrom ? new Date(dateFrom) : null,
              dateTo ? new Date(dateTo) : null,
              args[0] as any,
              args[1] as any
            ];
          } else if (withHoursRange || withMinutesRange) {
            return [makeEnabledTimeRangeDate(dateFrom), null, args[0] as any, args[1] as any];
          } else {
            return [dateFrom ? new Date(dateFrom) : null, null, args[0] as any, args[1] as any];
          }
        } else {
          if (withPeriod) {
            return [
              valueFrom ? new Date(valueFrom) : null,
              valueTo ? new Date(valueTo) : null,
              args[0] as any,
              args[1] as any
            ];
          } else if (withHoursRange || withMinutesRange) {
            return [value ? makeEnabledTimeRangeDate(value) : null, null, args[0] as any, args[1] as any];
          } else {
            return [value ? new Date(value) : null, null, args[0] as any, args[1] as any];
          }
        }
      }
      if (!enabledFrom && enabledTo) {
        if (!dateFrom) {
          if (withPeriod) {
            return [
              dateFrom ? new Date(dateFrom) : null,
              dateTo ? new Date(dateTo) : null,
              args[0] as any,
              args[1] as any
            ];
          } else if (withHoursRange || withMinutesRange) {
            return [null, null, null, null];
          } else {
            return [dateFrom ? new Date(dateFrom) : null, null, null, null];
          }
        }
        if (
          (dateFrom && numberedDateByLevel(dateFrom, level) <= numberedDateByLevel(enabledTo, level)) ||
          (dateTo && numberedDateByLevel(dateTo, level) <= numberedDateByLevel(enabledTo, level))
        ) {
          if (withPeriod) {
            return [
              dateFrom ? new Date(dateFrom) : null,
              dateTo ? new Date(dateTo) : null,
              args[0] as any,
              args[1] as any
            ];
          } else if (withHoursRange || withMinutesRange) {
            return [makeEnabledTimeRangeDate(dateFrom), null, null, null];
          } else {
            return [dateFrom ? new Date(dateFrom) : null, null, null, null];
          }
        } else {
          if (withPeriod) {
            return [
              valueFrom ? new Date(valueFrom) : null,
              valueTo ? new Date(valueTo) : null,
              args[0] as any,
              args[1] as any
            ];
          } else if (withHoursRange || withMinutesRange) {
            return [value ? makeEnabledTimeRangeDate(value) : null, null, null, null];
          } else {
            return [value ? new Date(value) : null, null, null, null];
          }
        }
      }
      if (enabledFrom && enabledTo) {
        if (!dateFrom) {
          if (withPeriod) {
            return [
              dateFrom ? new Date(dateFrom) : null,
              dateTo ? new Date(dateTo) : null,
              args[0] as any,
              args[1] as any
            ];
          } else if (withHoursRange || withMinutesRange) {
            return [null, null, null, null];
          } else {
            return [dateFrom ? new Date(dateFrom) : null, null, null, null];
          }
        }
        if (
          ((dateFrom && numberedDateByLevel(dateFrom, level) >= numberedDateByLevel(enabledFrom, level)) ||
            (dateTo && numberedDateByLevel(dateTo, level) >= numberedDateByLevel(enabledFrom, level))) &&
          ((dateFrom && numberedDateByLevel(dateFrom, level) <= numberedDateByLevel(enabledTo, level)) ||
            (dateTo && numberedDateByLevel(dateTo, level) <= numberedDateByLevel(enabledTo, level)))
        ) {
          if (withPeriod) {
            return [
              dateFrom ? new Date(dateFrom) : null,
              dateTo ? new Date(dateTo) : null,
              args[0] as any,
              args[1] as any
            ];
          } else if (withHoursRange || withMinutesRange) {
            return [makeEnabledTimeRangeDate(dateFrom), null, null, null];
          } else {
            return [dateFrom ? new Date(dateFrom) : null, null, null, null];
          }
        } else {
          if (withPeriod) {
            return [
              valueFrom ? new Date(valueFrom) : null,
              valueTo ? new Date(valueTo) : null,
              args[0] as any,
              args[1] as any
            ];
          } else if (withHoursRange || withMinutesRange) {
            return [value ? makeEnabledTimeRangeDate(value) : null, null, null, null];
          } else {
            return [value ? new Date(value) : null, null, null, null];
          }
        }
      }
      if (!enabledFrom && !enabledTo) {
        if (withPeriod) {
          return [
            dateFrom ? new Date(dateFrom) : null,
            dateTo ? new Date(dateTo) : null,
            args[0] as any,
            args[1] as any
          ];
        } else if (withHoursRange || withMinutesRange) {
          return [dateFrom ? makeEnabledTimeRangeDate(dateFrom) : null, null, null, null];
        } else {
          return [dateFrom ? new Date(dateFrom) : null, null, null, null];
        }
      }
      return [
        dateFrom ? new Date(dateFrom) : dateFrom,
        dateTo ? new Date(dateTo) : dateTo,
        args[0] as any,
        args[1] as any
      ];
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const computeNewDate: () => [Date | null, Date | null, number | undefined, number | undefined] = useCallback(() => {
      try {
        if (!withPeriod) {
          const numOfPlaceholders = innerMaskedValue.match(/_/gi);
          if (!numOfPlaceholders && innerMaskedValue) {
            let newDate: Date | null;

            if (level === LEVEL_MAPPING_ENUM.quarter) {
              const [quarter, , year] = innerMaskedValue.split(' ');
              newDate = new Date(+year, quarterMonthKeys[quarter as unknown as keyof typeof quarterMonthKeys]);
            } else {
              const formats = {
                date: isHideYear ? dateFormatWithoutYear : dateFormat,
                dateTime: isHideYear ? dateTimeFormatWithoutYear : dateTimeFormat,
                dateTimeSeconds: isHideYear ? dateTimeSecondsFormatWithoutYear : dateTimeSecondsFormat
              };

              let format = formats.date;

              if (level === LEVEL_MAPPING_ENUM.year) {
                format = onlyYearFormat;
              } else if (level === LEVEL_MAPPING_ENUM.month) {
                format = monthAndYearFormat;
              } else if (showTime) {
                format = withSeconds ? formats.dateTimeSeconds : formats.dateTime;
              }

              newDate = parse(innerMaskedValue, format, new Date());
            }

            if (isValid(newDate)) {
              return [newDate, null, undefined, undefined];
            } else {
              return [value || null, null, undefined, undefined];
            }
          }

          const levelMasks = {
            year: onlyYearMask,
            month: monthAndYearMask,
            quarter: quarterAndYearMask(locale[language].quarterTranslation)
          };
          const withSecondsCondition = withSeconds ? dateTimeSecondsMask : dateTimeMask;
          const mask = showTime ? withSecondsCondition : dateMask;
          const maskForMatching = levelMasks[level as keyof typeof levelMasks] || mask;
          const isValueMatchingMask = isValueMatchesTheMask(maskForMatching, innerMaskedValue);

          if (isValueMatchingMask) {
            return [null, null, undefined, undefined];
          }

          if (numOfPlaceholders) {
            return [value === undefined || value === null ? null : value, undefined, undefined, undefined];
          }
        } else {
          let [maskedValueFrom, maskedValueTo] = innerMaskedValue.split(' — ');
          let shiftFrom, shiftTo;

          if (withShift) {
            [maskedValueFrom, shiftFrom] = maskedValueFrom.split('/');
            [maskedValueTo, shiftTo] = maskedValueTo.split('/');
          }

          const fromPlaceholders = maskedValueFrom.match(/_/gi);
          const toPlaceholders = maskedValueTo.match(/_/gi);
          const shiftToInt = shiftTo ? parseInt(shiftTo, 10) : undefined;

          if (!fromPlaceholders && maskedValueFrom && !toPlaceholders && maskedValueTo) {
            let parsedFrom, parsedTo;

            if (level === LEVEL_MAPPING_ENUM.quarter) {
              const [quarterFrom, , yearFrom] = maskedValueFrom.split(' ');
              const [quarterTo, , yearTo] = maskedValueTo.split(' ');

              parsedFrom = new Date(
                +yearFrom,
                quarterMonthKeys[quarterFrom as unknown as keyof typeof quarterMonthKeys]
              );
              parsedTo = new Date(+yearTo, quarterMonthKeys[quarterTo as unknown as keyof typeof quarterMonthKeys]);
            } else {
              const dateFormat = dateFormatByLevel[level];
              parsedFrom = parse(maskedValueFrom, dateFormat, new Date());
              parsedTo = parse(maskedValueTo, dateFormat, new Date());
            }

            if (isValid(parsedFrom) && isValid(parsedTo)) {
              const [dateFrom, dateTo] = +parsedFrom > +parsedTo ? [parsedTo, parsedFrom] : [parsedFrom, parsedTo];
              const shiftFromInt = shiftFrom ? parseInt(shiftFrom, 10) : undefined;

              return [dateFrom, dateTo, shiftFromInt, shiftToInt];
            }

            const dateFrom = valueFrom ? new Date(valueFrom) : null;
            const dateTo = valueTo ? new Date(valueTo) : null;
            const shiftFromInt = shiftFrom ? parseInt(shiftFrom, 10) : undefined;

            return [dateFrom, dateTo, shiftFromInt, shiftToInt];
          }

          if (!fromPlaceholders && maskedValueFrom && toPlaceholders) {
            const dateFormat = dateFormatByLevel[level];
            const parsedFrom = parse(maskedValueFrom, dateFormat, new Date());

            if (isValid(parsedFrom)) {
              const shiftFromInt = shiftFrom ? parseInt(shiftFrom, 10) : undefined;

              return [parsedFrom, null, shiftFromInt, shiftToInt];
            }

            const dateFrom = valueFrom ? new Date(valueFrom) : null;
            const dateTo = valueTo ? new Date(valueTo) : null;
            const shiftFromInt = shiftFrom ? parseInt(shiftFrom, 10) : undefined;

            return [dateFrom, dateTo, shiftFromInt, shiftToInt];
          }

          if (!toPlaceholders && maskedValueTo && fromPlaceholders) {
            const dateFormat = dateFormatByLevel[level];
            const parsedTo = parse(maskedValueTo, dateFormat, new Date());

            if (isValid(parsedTo)) {
              const shiftFromInt = shiftFrom ? parseInt(shiftFrom, 10) : undefined;

              return [null, parsedTo, shiftFromInt, shiftToInt];
            }

            const dateFrom = valueFrom ? new Date(valueFrom) : null;
            const dateTo = valueTo ? new Date(valueTo) : null;
            const shiftFromInt = shiftFrom ? parseInt(shiftFrom, 10) : undefined;

            return [dateFrom, dateTo, shiftFromInt, shiftToInt];
          }

          if (innerMaskedValue.replace(/_/gi, '9') === periodDefaultMask) {
            return [null, null, undefined, undefined];
          }
        }
      } catch (e) {
        console.error(e);
      }
      return [null, null, undefined, undefined];
    }, [innerMaskedValue, level, showTime, value, valueFrom, valueTo, withPeriod, withSeconds, withShift]);

    const rollbackPeriodValue = useCallback(() => {
      const emptyMask = getEmptyMask();
      const valueFromFormatted = valueFrom ? format(valueFrom, dateFormatByLevel[level]) : '';
      const valueToFormatted = valueTo ? format(valueTo, dateFormatByLevel[level]) : '';

      if (valueFromFormatted || valueToFormatted) {
        const periodSeparator = ' — ';
        let newValue = '';

        if (withShift) {
          const shiftFromValue = valueFromFormatted ? shiftFrom ?? '_' : '_';
          const shiftToValue = valueToFormatted ? shiftTo ?? '_' : '_';
          newValue = `${valueFromFormatted || emptyMask}/${shiftFromValue}${periodSeparator}${
            valueToFormatted || emptyMask
          }/${shiftToValue}`;
        } else if (level === LEVEL_MAPPING_ENUM.quarter) {
          newValue = `${valueFrom ? quarterFormatInput(valueFrom) : ''}${periodSeparator}${
            valueTo ? quarterFormatInput(valueTo) : ''
          }`;
        } else {
          newValue = `${valueFromFormatted || emptyMask}${periodSeparator}${valueToFormatted || emptyMask}`;
        }

        setInnerMaskedValue(newValue);
        prevValueRef.current = newValue;
      } else {
        setInnerMaskedValue('');
        prevValueRef.current = '';
      }
    }, [valueFrom, valueTo, level, withShift, shiftFrom, shiftTo, getEmptyMask]);

    useLayoutEffect(() => {
      if (cursorPosRef.current !== null) {
        const inputElement = (maskRef.current as any)?.input || maskRef.current;
        if (inputElement) {
          const pos = cursorPosRef.current;
          inputElement.setSelectionRange(pos, pos);
          cursorPosRef.current = null;
        }
      }
    });

    const isPartFullyEmpty = useCallback((part: string): boolean => {
      if (!part) return true;
      const digitsOnly = part.replace(/[^0-9_]/g, '');
      return digitsOnly === '' || /^_+$/.test(digitsOnly);
    }, []);

    const hasIncompleteInput = useCallback(
      (dateParts: string[]): boolean => {
        return dateParts.some(part => {
          if (!part) return false;
          return part.includes('_') && !isPartFullyEmpty(part);
        });
      },
      [isPartFullyEmpty]
    );

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        const prevValue = prevValueRef.current;

        if (withPeriod && prevValue && newValue.length < prevValue.length) {
          let deleteStart = -1;
          let deleteEnd = -1;

          for (let i = 0; i < prevValue.length; i++) {
            if (i >= newValue.length || newValue[i] !== prevValue[i]) {
              deleteStart = i;
              break;
            }
          }

          if (deleteStart >= 0) {
            let prevIdx = prevValue.length - 1;
            let newIdx = newValue.length - 1;

            while (prevIdx > deleteStart && newIdx >= deleteStart) {
              if (prevValue[prevIdx] !== newValue[newIdx]) {
                break;
              }
              prevIdx--;
              newIdx--;
            }

            deleteEnd = prevIdx + 1;

            let result = prevValue;
            let hasDigitDeleted = false;

            for (let i = deleteStart; i < deleteEnd; i++) {
              if (/[0-9]/.test(result[i])) {
                result = result.substring(0, i) + '_' + result.substring(i + 1);
                hasDigitDeleted = true;
              }
            }

            if (hasDigitDeleted) {
              cursorPosRef.current = deleteStart;
            } else {
              const input = e.target as HTMLInputElement;
              setTimeout(() => {
                input.setSelectionRange(deleteStart, deleteStart);
              }, 0);
            }

            setInnerMaskedValue(result);
            prevValueRef.current = result;
            return;
          }
        }

        setInnerMaskedValue(newValue);
        prevValueRef.current = newValue;
      },
      [withPeriod]
    );

    const hasValue = withPeriod ? Boolean(valueFrom || valueTo) : Boolean(value);

    const shouldShowReset = reset && hasValue;

    return (
      <Input
        inputRef={maskRef as any}
        value={innerMaskedValue}
        onChange={handleChange}
        onFocus={() => {
          onInputFocus();
        }}
        onBlur={() => {
          if (isEnterPressedRef.current) {
            isEnterPressedRef.current = false;
            onInputBlur();
            return;
          }

          if (!disableChangesOnBlur) {
            if (!withPeriod) {
              if (!value) {
                setInnerMaskedValue('');
              }
            } else {
              const periodParts = innerMaskedValue.split(' — ');

              const dateParts = periodParts.map(part => {
                if (withShift) {
                  return part.split('/')[0] || '';
                }
                return part;
              });

              const newDates = computeNewDate();

              const isInvalidInput =
                Array.isArray(newDates) &&
                ((newDates[0] === null &&
                  dateParts[0] &&
                  !isPartFullyEmpty(dateParts[0]) &&
                  !dateParts[0].includes('_')) ||
                  (newDates[1] === null &&
                    dateParts[1] &&
                    !isPartFullyEmpty(dateParts[1]) &&
                    !dateParts[1].includes('_')));

              if (isInvalidInput) {
                rollbackPeriodValue();
                if (onBlur) {
                  onBlur(valueFrom || null, valueTo || null, shiftFrom, shiftTo);
                }
                onInputBlur();
                return;
              }

              const [newFrom, newTo] = Array.isArray(newDates) ? newDates : [null, null];

              if (!newFrom && !newTo) {
                setInnerMaskedValue('');
              }
            }
          }

          if (onBlur) {
            const computedDate = computeNewDate();
            const appliedDate = applyIfEnabled(...computedDate);
            onBlur(...appliedDate);
          }
          onInputBlur();
        }}
        onKeyDown={(e: any) => {
          if ((e.key === 'Backspace' || e.key === 'Delete') && withPeriod) {
            const input = e.target as HTMLInputElement;
            const cursorStart = input.selectionStart || 0;
            const cursorEnd = input.selectionEnd || 0;

            // Полное выделение всего текста
            if (cursorStart === 0 && cursorEnd === innerMaskedValue.length) {
              e.preventDefault();
              const emptyMask = getEmptyMaskForPeriod();
              setInnerMaskedValue(emptyMask);
              prevValueRef.current = emptyMask;
              setTimeout(() => {
                input.setSelectionRange(0, 0);
              }, 0);
              return;
            }

            // Частичное выделение - заменяем выделенные цифры на подчеркивания
            if (cursorStart < cursorEnd) {
              e.preventDefault();

              const selectedText = innerMaskedValue.substring(cursorStart, cursorEnd);
              const hasDigits = /\d/.test(selectedText);

              if (hasDigits) {
                // Заменяем выделенные цифры на подчеркивания, сохраняя структуру
                let newValue = innerMaskedValue;
                for (let i = cursorStart; i < cursorEnd; i++) {
                  if (/\d/.test(newValue[i])) {
                    newValue = newValue.substring(0, i) + '_' + newValue.substring(i + 1);
                  }
                }

                setInnerMaskedValue(newValue);
                prevValueRef.current = newValue;
                cursorPosRef.current = cursorStart;
              }
              return;
            }
          }

          // Обработка ввода цифр в режиме периода
          if (/^[0-9]$/.test(e.key) && withPeriod) {
            e.preventDefault();

            const input = e.target as HTMLInputElement;
            const cursorPos = input.selectionStart || 0;

            const template = getEmptyMaskForPeriod();

            // Находим первую доступную позицию для ввода
            let targetPos = -1;

            // Сначала проверяем текущую позицию
            if (cursorPos < template.length && template[cursorPos] === '_') {
              targetPos = cursorPos;
            } else {
              // Ищем вперёд от курсора
              for (let i = cursorPos; i < template.length; i++) {
                if (template[i] === '_' && innerMaskedValue[i] === '_') {
                  targetPos = i;
                  break;
                }
              }

              // Если не нашли, ищем с начала
              if (targetPos === -1) {
                for (let i = 0; i < cursorPos; i++) {
                  if (template[i] === '_' && innerMaskedValue[i] === '_') {
                    targetPos = i;
                    break;
                  }
                }
              }
            }

            if (targetPos !== -1) {
              let currentValue = innerMaskedValue;
              if (currentValue.length < template.length) {
                currentValue = currentValue + template.substring(currentValue.length);
                setInnerMaskedValue(currentValue);
              }

              // Определяем позицию в дате (для валидации)
              // Для формата DD.MM.YYYY: позиции 0,1 - день, 3,4 - месяц, 6,7,8,9 - год
              const separator = withShift ? '/' : ' — ';
              const separatorIndex = currentValue.indexOf(separator);

              let posInDate: number;
              if (targetPos < separatorIndex) {
                // Левая дата
                posInDate = targetPos;
              } else {
                // Правая дата - вычитаем длину левой части с разделителем
                posInDate = targetPos - separatorIndex - separator.length;
              }

              // Нормализуем позицию относительно формата даты (убираем точки)
              const dotsBeforePos = currentValue.substring(0, targetPos).split('.').length - 1;
              const normalizedPos = posInDate - dotsBeforePos;

              // Валидация для дня (позиции 0-1)
              if (normalizedPos === 0 && parseInt(e.key) > 3) {
                // Первая цифра дня > 3, добавляем 0 перед ней
                const nextPos = targetPos + 1;
                if (currentValue[nextPos] === '_') {
                  const newValue =
                    currentValue.substring(0, targetPos) + '0' + e.key + currentValue.substring(targetPos + 2);
                  let nextCursorPos = targetPos + 2;
                  while (nextCursorPos < template.length && template[nextCursorPos] !== '_') {
                    nextCursorPos++;
                  }
                  cursorPosRef.current = nextCursorPos;
                  setInnerMaskedValue(newValue);
                  prevValueRef.current = newValue;
                  return;
                }
              }

              if (normalizedPos === 1) {
                // Вторая цифра дня - проверяем первую
                const firstDayDigit = currentValue[targetPos - 1];
                if (firstDayDigit === '3' && parseInt(e.key) > 1) {
                  // День не может быть больше 31
                  return;
                }
                if (firstDayDigit === '0' && e.key === '0') {
                  // День не может быть 00
                  return;
                }
              }

              // Валидация для месяца (позиции 2-3 после нормализации)
              if (normalizedPos === 2 && parseInt(e.key) > 1) {
                // Первая цифра месяца > 1, добавляем 0 перед ней
                const nextPos = targetPos + 1;
                if (currentValue[nextPos] === '_') {
                  const newValue =
                    currentValue.substring(0, targetPos) + '0' + e.key + currentValue.substring(targetPos + 2);
                  let nextCursorPos = targetPos + 2;
                  while (nextCursorPos < template.length && template[nextCursorPos] !== '_') {
                    nextCursorPos++;
                  }
                  cursorPosRef.current = nextCursorPos;
                  setInnerMaskedValue(newValue);
                  prevValueRef.current = newValue;
                  return;
                }
              }

              if (normalizedPos === 3) {
                // Вторая цифра месяца - проверяем первую
                const firstMonthDigit = currentValue[targetPos - 1];
                if (firstMonthDigit === '1' && parseInt(e.key) > 2) {
                  // Месяц не может быть больше 12
                  return;
                }
                if (firstMonthDigit === '0' && e.key === '0') {
                  // Месяц не может быть 00
                  return;
                }
              }

              // Вставляем цифру
              const newValue = currentValue.substring(0, targetPos) + e.key + currentValue.substring(targetPos + 1);

              // Находим следующую позицию для курсора
              let nextPos = targetPos + 1;
              while (nextPos < template.length && template[nextPos] !== '_') {
                nextPos++;
              }

              cursorPosRef.current = nextPos;
              setInnerMaskedValue(newValue);
              prevValueRef.current = newValue;
            }

            return;
          }

          // Блокируем ввод нецифровых символов в режиме периода
          if (withPeriod && e.key.length === 1 && !/[0-9]/.test(e.key) && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            return;
          }

          if (e.key === 'Tab' && onTabKeyDown) {
            if (withPeriod) {
              // Для периода всегда разделяем по ' — '
              const periodParts = innerMaskedValue.split(' — ');

              // Извлекаем только даты (без смен) для проверки
              const dateParts = periodParts.map(part => {
                if (withShift) {
                  // Для смен формат: DD.MM.YYYY/S, берём только дату
                  return part.split('/')[0] || '';
                }
                return part;
              });

              const hasIncomplete = hasIncompleteInput(dateParts);
              const newDates = computeNewDate();

              const isInvalidInput =
                Array.isArray(newDates) &&
                ((newDates[0] === null &&
                  dateParts[0] &&
                  !isPartFullyEmpty(dateParts[0]) &&
                  !dateParts[0].includes('_')) ||
                  (newDates[1] === null &&
                    dateParts[1] &&
                    !isPartFullyEmpty(dateParts[1]) &&
                    !dateParts[1].includes('_')));

              if (hasIncomplete || isInvalidInput) {
                rollbackPeriodValue();
                return;
              }
            }
            onTabKeyDown(...applyIfEnabled(...computeNewDate()));
          }
          if (e.key === 'Enter' && onEnterKeyDown) {
            if (withPeriod) {
              const periodParts = innerMaskedValue.split(' — ');

              const dateParts = periodParts.map(part => {
                if (withShift) {
                  return part.split('/')[0] || '';
                }
                return part;
              });

              const hasIncomplete = hasIncompleteInput(dateParts);
              const newDates = computeNewDate();

              const isInvalidInput =
                Array.isArray(newDates) &&
                ((newDates[0] === null &&
                  dateParts[0] &&
                  !isPartFullyEmpty(dateParts[0]) &&
                  !dateParts[0].includes('_')) ||
                  (newDates[1] === null &&
                    dateParts[1] &&
                    !isPartFullyEmpty(dateParts[1]) &&
                    !dateParts[1].includes('_')));

              if (hasIncomplete || isInvalidInput) {
                rollbackPeriodValue();
                return;
              }
            }

            isEnterPressedRef.current = true;

            const computedDate = computeNewDate();
            const appliedDate = applyIfEnabled(...computedDate);
            onEnterKeyDown(...appliedDate);
          }
        }}
        className={clsx(className, styles.input)}
        disabled={disabled}
        label={locale[language].label[showTime ? 'showtime' : 'default']}
        icon={
          <div className={styles.calendar}>
            <CalendarSvgIcon
              className={clsx(props.size === sizesMappingInput.xs && styles['icon-xs'])}
              onClick={onFocus}
            />
          </div>
        }
        reset={shouldShowReset}
        onReset={onReset}
        helperText={helperText}
        color={error ? customInputColors.error : customInputColors.default}
        {...props}
      />
    );
  }
);

DatePickerInput.displayName = 'DatePickerInput';

export default DatePickerInput;
