import React, { ChangeEvent, forwardRef, useCallback, useEffect, useMemo, useState } from 'react';

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
import { DatePickerInputProps } from '@components/DatePicker/subcomponents/DatePickerInput/types';
import { useLocale } from '@components/DatePicker/utils';
import { CalendarSvgIcon } from '@components/Icon/icons_internal';
import { Input } from '@components/index';
import InputMaskCorrect from '@components/InputMaskCorrect';
import clsx from 'clsx';
import { format, isValid, parse, set } from 'date-fns';
import { isInteger, range } from 'lodash';

import styles from './DatePickerInput.module.scss';

export const DatePickerInput = forwardRef<HTMLInputElement | null, DatePickerInputProps>(
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
      ...props
    },
    ref
  ) => {
    const language = useLocale();
    const [innerMaskedValue, setInnerMaskedValue] = useState('');
    const [focused, setFocused] = React.useState(false);
    const onInputFocus = () => {
      setFocused(true);
      if (onFocus && isOpenOnFocus) {
        onFocus();
      }
    };
    const onInputBlur = () => setFocused(false);

    useEffect(() => {
      if (!withPeriod) {
        if (!value) {
          // Очищаем значение маски, если оно не задано
          setInnerMaskedValue('');
        } else {
          // Добавляем отступы и разбиваем на блоки условия, чтобы лучше читать код
          if (level === LEVEL_MAPPING_ENUM.month || level === LEVEL_MAPPING_ENUM.year) {
            // Извлекаем формат даты, основываясь на пропсе level
            const dateFormat = dateFormatByLevel[level];
            setInnerMaskedValue(format(value, dateFormat));
          } else if (level === LEVEL_MAPPING_ENUM.quarter) {
            // Формируем строку для квартала
            const quarter = Math.floor((value.getMonth() + 3) / 3);
            const year = value.getFullYear();
            setInnerMaskedValue(`${quarter} квартал ${year}`);
          } else {
            // Извлекаем формат даты или времени, основываясь на настройках
            const dateFormatMask = isHideYear ? dateFormatWithoutYear : dateFormat;
            const dateTimeFormatMask = isHideYear ? dateTimeFormatWithoutYear : dateTimeFormat;
            const dateTimeSecondsFormatMask = isHideYear ? dateTimeSecondsFormatWithoutYear : dateTimeSecondsFormat;
            const withSecondsCondition  = () => {
              return withSeconds
                ? dateTimeSecondsFormatMask
                : dateTimeFormatMask;
            }
              
            const defaultFormat = showTime
              ? withSecondsCondition()
              : dateFormatMask;

            setInnerMaskedValue(format(value, defaultFormat));
          }
        }
      }

      if (withPeriod) {
        const valueFromFormatted = valueFrom ? format(valueFrom, dateFormatByLevel[level]) : '';
        const valueToFormatted = valueTo ? format(valueTo, dateFormatByLevel[level]) : '';

        if (!valueFromFormatted && !valueToFormatted) {
          setInnerMaskedValue('');
          return;
        }

        const shiftFromValue = shiftFrom ?? '_';
        const shiftToValue = shiftTo ?? '_';
        const periodSeparator = withShift ? '/' : ' — ';

        let formattedValue = `${valueFromFormatted}${periodSeparator}${valueToFormatted}`;

        if (withShift) {
          formattedValue = `${valueFromFormatted}/${shiftFromValue}${periodSeparator}${valueToFormatted}/${shiftToValue}`;
        } else if (valueFrom && valueTo && level === LEVEL_MAPPING_ENUM.quarter) {
          formattedValue = `${quarterFormatInput(valueFrom)}${periodSeparator}${quarterFormatInput(valueTo)}`;
        }

        setInnerMaskedValue(formattedValue);
      }
    }, [level, shiftFrom, shiftTo, showTime, value, valueFrom, valueTo, withPeriod, withSeconds, withShift]);

    const mask = useMemo(() => {
      // Форматирование значения valueFrom для использования в маске
      let valueFromFormatted = '';

      if (valueFrom) {
        valueFromFormatted =
          level === LEVEL_MAPPING_ENUM.quarter
            ? quarterFormatInput(valueFrom)
            : format(valueFrom, dateFormatByLevel[level]);
      }

      // Маски для разных уровней даты/времени с одной датой или периодом
      const oneDateMask = periodMaskByLeveWithOneDate(locale[language].quarterTranslation)[level];
      const periodMask = periodMaskByLevel(locale[language].quarterTranslation)[level];

      // Маски со временем для скрытия года
      const dateTimeMaskValue = isHideYear ? dateTimeMaskWithoutYear : dateTimeMask;
      const dateTimeSecondsMaskValue = isHideYear ? dateTimeSecondsMaskWithoutYear : dateTimeSecondsMask;

      // Маски для периодов со сменой
      const periodWithShiftsMaskDefaultValue =
        shiftLength === defaultShiftLength ? periodWithShiftsMaskDefault : periodWithShiftsMaskCustom;

      // Маски для периодов с внутренней маской
      const periodInnerMask = periodInnerMaskByLevel(locale[language].quarterTranslation)[level];

      // Установка маски в зависимости от настроек
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
      const enabledHoursRange = range(hourFrom || 0, (hourTo || 23) + 1);
      const enabledMinutesRange = range(
        minuteFrom && isInteger(minuteFrom) && minuteFrom > 0 ? minuteFrom : 0,
        minuteTo && isInteger(minuteTo) && minuteTo < 60 ? minuteTo + 1 : 60
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
              // Форматы со временем для скрытия года
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

          if (!fromPlaceholders && maskedValueFrom) {
            const dateFormat = dateFormatByLevel[level];
            const parsedFrom = parse(maskedValueFrom, dateFormat, new Date());

            if (isValid(parsedFrom)) {
              const shiftFromInt = shiftFrom ? parseInt(shiftFrom, 10) : undefined;

              return [parsedFrom, parsedFrom, shiftFromInt, shiftToInt];
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

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInnerMaskedValue(newValue);
    }, []);

    return (
      <InputMaskCorrect
        mask={mask}
        value={innerMaskedValue}
        onChange={handleChange}
        onFocus={() => {
          onInputFocus();
        }}
        onBlur={() => {
          if ((!value && !withPeriod) || (!valueFrom && !valueTo && withPeriod)) {
            setInnerMaskedValue('');
          }
          if (onBlur) {
            onBlur(...applyIfEnabled(...computeNewDate()));
          }
          onInputBlur();
        }}
        disabled={disabled}
        formatChars={{
          9: '[0-9]',
          3: '[0-3]',
          2: '[0-2]'
        }}
      >
        {() => (
          <Input
            inputRef={ref}
            onKeyDown={(e: any) => {
              if (e.key === 'Tab' && onTabKeyDown) {
                onTabKeyDown(...applyIfEnabled(...computeNewDate()));
              }
              if (e.key === 'Enter' && onEnterKeyDown) {
                onEnterKeyDown(...applyIfEnabled(...computeNewDate()));
              }
            }}
            className={clsx(className, styles.input)}
            disabled={disabled}
            label={showTime ? locale[language].label.showtime : locale[language].label.default}
            icon={
              <div className={styles.calendar}>
                <CalendarSvgIcon onClick={onFocus} />
              </div>
            }
            {...props}
          />
        )}
      </InputMaskCorrect>
    );
  }
);

export default DatePickerInput;
