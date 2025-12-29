import React, {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { useIMask } from 'react-imask';

import { IconScheduleTimeWatchOutlined24, Input } from '@components/index';
import {
  SIMPLE_TIME_MASK,
  SIMPLE_TIME_WITH_SECONDS_MASK,
  TIME_FORMAT,
  TIME_MASK,
  TIME_WITH_SECONDS_FORMAT,
  TIME_WITH_SECONDS_MASK
} from '@components/TimePicker/helpers';
import clsx from 'clsx';
import { format, isAfter, isValid, parse, set } from 'date-fns';
import IMask from 'imask';
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
      onToggle,
      iconRef,
      ...props
    },
    ref
  ) => {
    const [innerMaskedValue, setInnerMaskedValue] = useState('');
    const [focused, setFocused] = useState(false);
    const periodInputRef = useRef<HTMLInputElement>(null);
    const cursorPosRef = useRef<number | null>(null);
    const isResettingRef = useRef(false);
    const isPendingPeriodUpdateRef = useRef(false);
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

      if (!withPeriod) {
        handleBlurRegular();
        return;
      }

      handleBlurPeriod();
    };

    const handleBlurRegular = () => {
      const isEmpty = !innerMaskedValue || innerMaskedValue === '__:__' || innerMaskedValue === '__:__:__';

      if (isEmpty && value && onReset) {
        isResettingRef.current = true;
        onReset();
        return;
      }

      if (value && innerMaskedValue.includes('_')) {
        const currentFormatted = format(value, isTimeWithSecondsType ? TIME_WITH_SECONDS_FORMAT : TIME_FORMAT);
        if (innerMaskedValue !== currentFormatted) {
          setInnerMaskedValue(currentFormatted);
        }
      } else if (!value && innerMaskedValue.includes('_')) {
        const emptyMask = isTimeWithSecondsType ? '__:__:__' : '__:__';
        setInnerMaskedValue(emptyMask);
      }

      if (!onBlur) return;

      const newDate = computeNewDate() as Date | null;
      onBlur(newDate);
      if (newDate) {
        onChange?.(newDate);
      }
    };

    const handleBlurPeriod = () => {
      const timeParts = innerMaskedValue.split(' — ');
      const emptyTime = isTimePeriodWithSecondsType ? '__:__:__' : '__:__';

      const hasIncompleteInput = timeParts.some(part => part && part.includes('_') && part !== emptyTime);
      const newDate = computeNewDate();

      const isInvalidInput =
        Array.isArray(newDate) &&
        ((newDate[0] === null && timeParts[0] && timeParts[0] !== emptyTime && !timeParts[0].includes('_')) ||
          (newDate[1] === null && timeParts[1] && timeParts[1] !== emptyTime && !timeParts[1].includes('_')));

      if (hasIncompleteInput || isInvalidInput) {
        rollbackPeriodValue(emptyTime);
        if (onBlur) {
          onBlur(valueFrom || null, valueTo || null);
        }
        return;
      }

      if (!onBlur || !Array.isArray(newDate)) return;

      onBlur(newDate[0], newDate[1]);

      const fromChanged = hasDateChanged(newDate[0], valueFrom);
      const toChanged = hasDateChanged(newDate[1], valueTo);

      if (fromChanged || toChanged) {
        isPendingPeriodUpdateRef.current = true;
        onChangeFirst?.(newDate[0] || undefined);
        onChangeSecond?.(newDate[1] || undefined);
      }
    };

    const rollbackPeriodValue = (emptyTime: string) => {
      const formatStr = isTimePeriodWithSecondsType ? TIME_WITH_SECONDS_FORMAT : TIME_FORMAT;
      const formattedFrom = valueFrom ? format(valueFrom, formatStr) : '';
      const formattedTo = valueTo ? format(valueTo, formatStr) : '';

      if (formattedFrom || formattedTo) {
        const newValue = `${formattedFrom || emptyTime} — ${formattedTo || emptyTime}`;
        setInnerMaskedValue(newValue);
      } else {
        setInnerMaskedValue('');
      }
    };

    const hasDateChanged = (newDate: Date | null, oldDate: Date | null | undefined): boolean => {
      if (newDate === null && oldDate !== null && oldDate !== undefined) return true;
      if (newDate !== null && !oldDate) return true;
      if (newDate !== null && oldDate !== null && oldDate !== undefined && newDate.getTime() !== oldDate.getTime())
        return true;
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        const input = e.target as HTMLInputElement;
        const cursorStart = input.selectionStart || 0;
        const cursorEnd = input.selectionEnd || 0;

        // Полное выделение всего текста
        if (cursorStart === 0 && cursorEnd === innerMaskedValue.length) {
          e.preventDefault();

          if (withPeriod) {
            const emptyMask = isTimePeriodWithSecondsType ? '__:__:__ — __:__:__' : '__:__ — __:__';
            setInnerMaskedValue(emptyMask);
            setTimeout(() => {
              input.setSelectionRange(0, 0);
            }, 0);
          } else {
            const emptyMask = isTimeWithSecondsType ? '__:__:__' : '__:__';
            setInnerMaskedValue(emptyMask);
            if (maskRef.current) {
              (maskRef.current as any).value = emptyMask;
            }
            setTimeout(() => {
              input.setSelectionRange(0, 0);
            }, 0);
          }
          return;
        }

        // Частичное выделение в режиме периода - заменяем выделенные цифры на подчеркивания
        if (withPeriod && cursorStart < cursorEnd) {
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
            cursorPosRef.current = cursorStart;
          }
          return;
        }
      }

      if (/^[0-9]$/.test(e.key) && withPeriod) {
        e.preventDefault();

        const input = e.target as HTMLInputElement;
        const cursorPos = input.selectionStart || 0;

        const template = isTimePeriodWithSecondsType ? '__:__:__ — __:__:__' : '__:__ — __:__';

        let targetPos = -1;

        if (cursorPos < template.length && template[cursorPos] === '_') {
          targetPos = cursorPos;
        } else {
          for (let i = cursorPos; i < template.length; i++) {
            if (template[i] === '_' && innerMaskedValue[i] === '_') {
              targetPos = i;
              break;
            }
          }

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
          let posInTime: number;

          if (isTimePeriodWithSecondsType) {
            posInTime = targetPos >= 11 ? targetPos - 11 : targetPos;
          } else {
            posInTime = targetPos >= 8 ? targetPos - 8 : targetPos;
          }

          let currentValue = innerMaskedValue;
          if (currentValue.length < template.length) {
            currentValue = currentValue + template.substring(currentValue.length);
            setInnerMaskedValue(currentValue);
          }

          if (posInTime === 1) {
            const firstHourDigit = currentValue[targetPos - 1];
            if (firstHourDigit === '2' && parseInt(e.key) > 3) {
              return;
            }
          }

          if (posInTime === 0 && parseInt(e.key) > 2) {
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
              return;
            }
          }

          if (posInTime === 3 && parseInt(e.key) >= 6) {
            const nextPos = targetPos + 1;
            if (currentValue[nextPos] !== '_') {
              return;
            } else {
              const newValue =
                currentValue.substring(0, targetPos) + '0' + e.key + currentValue.substring(targetPos + 2);
              let nextCursorPos = targetPos + 2;
              while (nextCursorPos < template.length && template[nextCursorPos] !== '_') {
                nextCursorPos++;
              }
              cursorPosRef.current = nextCursorPos;
              setInnerMaskedValue(newValue);
              return;
            }
          }

          if (posInTime === 6 && isTimePeriodWithSecondsType && parseInt(e.key) >= 6) {
            const nextPos = targetPos + 1;
            if (currentValue[nextPos] !== '_') {
              return;
            } else {
              const newValue =
                currentValue.substring(0, targetPos) + '0' + e.key + currentValue.substring(targetPos + 2);
              let nextCursorPos = targetPos + 2;
              while (nextCursorPos < template.length && template[nextCursorPos] !== '_') {
                nextCursorPos++;
              }
              cursorPosRef.current = nextCursorPos;
              setInnerMaskedValue(newValue);
              return;
            }
          }

          const newValue = currentValue.substring(0, targetPos) + e.key + currentValue.substring(targetPos + 1);

          let nextPos = targetPos + 1;
          while (nextPos < template.length && template[nextPos] !== '_') {
            nextPos++;
          }

          cursorPosRef.current = nextPos;
          setInnerMaskedValue(newValue);
        }

        return;
      }

      if (withPeriod && e.key.length === 1 && !/[0-9]/.test(e.key) && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        return;
      }

      if (withPeriod && (e.key === 'Backspace' || e.key === 'Delete')) {
        const input = e.target as HTMLInputElement;
        const cursorStart = input.selectionStart || 0;
        const cursorEnd = input.selectionEnd || 0;
        const template = isTimePeriodWithSecondsType ? '__:__:__ — __:__:__' : '__:__ — __:__';

        let deletePos: number;
        if (e.key === 'Backspace') {
          deletePos = cursorStart === cursorEnd ? cursorStart - 1 : cursorStart;
        } else {
          deletePos = cursorStart;
        }

        if (deletePos >= 0 && deletePos < template.length) {
          const templateChar = template[deletePos];
          const valueChar = innerMaskedValue[deletePos];

          if (templateChar !== '_') {
            e.preventDefault();
            if (e.key === 'Backspace' && deletePos > 0) {
              setTimeout(() => {
                input.setSelectionRange(deletePos, deletePos);
              }, 0);
            }
            return;
          }

          if (valueChar === '_') {
            e.preventDefault();
            if (e.key === 'Backspace' && deletePos > 0) {
              let newPos = deletePos - 1;
              while (newPos >= 0 && (template[newPos] !== '_' || innerMaskedValue[newPos] === '_')) {
                newPos--;
              }
              const targetPos = newPos >= 0 ? newPos + 1 : 0;
              setTimeout(() => {
                input.setSelectionRange(targetPos, targetPos);
              }, 0);
            }
            return;
          }
        }
      }

      if (e.key === 'Tab' && onTabKeyDown) {
        const newDate = computeNewDate();
        if (Array.isArray(newDate)) {
          onTabKeyDown(newDate[0], newDate[1]);
        } else {
          onTabKeyDown(newDate);
        }
      }
      if (e.key === 'Enter') {
        const isEmpty = !innerMaskedValue || innerMaskedValue === '__:__' || innerMaskedValue === '__:__:__';

        if (!withPeriod && isEmpty && value && onReset) {
          isResettingRef.current = true;
          onReset();
          return;
        } else if (withPeriod) {
          const timeParts = innerMaskedValue.split(' — ');
          const emptyTime = isTimePeriodWithSecondsType ? '__:__:__' : '__:__';

          const hasIncompleteInput = timeParts.some(part => part && part.includes('_') && part !== emptyTime);

          const newDate = computeNewDate();

          const isInvalidInput =
            Array.isArray(newDate) &&
            ((newDate[0] === null && timeParts[0] && timeParts[0] !== emptyTime && !timeParts[0].includes('_')) ||
              (newDate[1] === null && timeParts[1] && timeParts[1] !== emptyTime && !timeParts[1].includes('_')));

          if (hasIncompleteInput || isInvalidInput) {
            const formatStr = isTimePeriodWithSecondsType ? TIME_WITH_SECONDS_FORMAT : TIME_FORMAT;
            const formattedFrom = valueFrom ? format(valueFrom, formatStr) : '';
            const formattedTo = valueTo ? format(valueTo, formatStr) : '';

            if (formattedFrom || formattedTo) {
              const newValue = `${formattedFrom || emptyTime} — ${formattedTo || emptyTime}`;
              setInnerMaskedValue(newValue);
            } else {
              setInnerMaskedValue('');
            }
            return;
          }

          if (Array.isArray(newDate)) {
            const fromChanged =
              (newDate[0] === null && valueFrom !== null && valueFrom !== undefined) ||
              (newDate[0] !== null && !valueFrom);
            const toChanged =
              (newDate[1] === null && valueTo !== null && valueTo !== undefined) || (newDate[1] !== null && !valueTo);

            if (fromChanged || toChanged) {
              onChangeFirst?.(newDate[0] || undefined);
              onChangeSecond?.(newDate[1] || undefined);
            }

            if (onEnterKeyDown) {
              onEnterKeyDown(newDate[0], newDate[1]);
            }
          }
        } else if (onEnterKeyDown) {
          const newDate = computeNewDate();
          if (Array.isArray(newDate)) {
            onEnterKeyDown(newDate[0], newDate[1]);
          } else {
            onEnterKeyDown(newDate);
          }
        }
      }
    };

    useEffect(() => {
      if (!withPeriod) {
        let expectedValue;
        if (!value) {
          expectedValue = isTimeWithSecondsType ? '__:__:__' : '__:__';
        } else {
          expectedValue = format(value, isTimeWithSecondsType ? TIME_WITH_SECONDS_FORMAT : TIME_FORMAT);
        }

        if (isResettingRef.current) {
          if (!value) {
            isResettingRef.current = false;
            setInnerMaskedValue(expectedValue);
            if (maskRef.current) {
              (maskRef.current as any).value = expectedValue;
            }
          }
          return;
        }

        if (innerMaskedValue === expectedValue) {
          return;
        }

        setInnerMaskedValue(expectedValue);

        if (maskRef.current && (maskRef.current as any).value !== expectedValue) {
          (maskRef.current as any).value = expectedValue;
        }

        return;
      }

      if (focused) {
        return;
      }

      const formatStr = isTimePeriodWithSecondsType ? TIME_WITH_SECONDS_FORMAT : TIME_FORMAT;
      const emptyTime = isTimePeriodWithSecondsType ? '__:__:__' : '__:__';

      let expectedValue = '';

      if (!valueFrom && !valueTo) {
        expectedValue = isTimePeriodWithSecondsType ? '__:__:__ — __:__:__' : '__:__ — __:__';
      } else if (valueFrom && valueTo) {
        if (isAfter(valueFrom, valueTo)) {
          onChangeFirst?.(valueTo);
          onChangeSecond?.(valueFrom);
          const formattedFrom = format(valueTo, formatStr);
          const formattedTo = format(valueFrom, formatStr);
          expectedValue = `${formattedFrom} — ${formattedTo}`;
        } else {
          const formattedFrom = format(valueFrom, formatStr);
          const formattedTo = format(valueTo, formatStr);
          expectedValue = `${formattedFrom} — ${formattedTo}`;
        }
      } else if (valueFrom && !valueTo) {
        const formattedFrom = format(valueFrom, formatStr);
        expectedValue = `${formattedFrom} — ${emptyTime}`;
      } else if (!valueFrom && valueTo) {
        const formattedTo = format(valueTo, formatStr);
        expectedValue = `${emptyTime} — ${formattedTo}`;
      }

      if (innerMaskedValue === expectedValue) {
        if (isPendingPeriodUpdateRef.current) {
          isPendingPeriodUpdateRef.current = false;
        }
        return;
      }

      if (isPendingPeriodUpdateRef.current) {
        return;
      }

      setInnerMaskedValue(expectedValue);
    }, [
      isTimeType,
      value,
      isTimeWithSecondsType,
      valueFrom,
      valueTo,
      isTimePeriodType,
      isTimePeriodWithSecondsType,
      withPeriod,
      onChangeFirst,
      onChangeSecond,
      focused
    ]);

    const mask = useMemo(() => {
      if (withPeriod) {
        return isTimePeriodWithSecondsType
          ? `${SIMPLE_TIME_WITH_SECONDS_MASK} — ${SIMPLE_TIME_WITH_SECONDS_MASK}`
          : `${SIMPLE_TIME_MASK} — ${SIMPLE_TIME_MASK}`;
      }
      return isTimeWithSecondsType ? TIME_WITH_SECONDS_MASK : TIME_MASK;
    }, [focused, isTimeType, isTimeWithSecondsType, withPeriod, isTimePeriodWithSecondsType]);

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
            blocks: {
              HH: {
                mask: IMask.MaskedRange,
                from: 0,
                to: 23,
                maxLength: 2,
                autofix: 'pad',
                placeholderChar: '_'
              },
              MM: {
                mask: IMask.MaskedRange,
                from: 0,
                to: 59,
                maxLength: 2,
                autofix: 'pad',
                placeholderChar: '_'
              },
              SS: {
                mask: IMask.MaskedRange,
                from: 0,
                to: 59,
                maxLength: 2,
                autofix: 'pad',
                placeholderChar: '_'
              }
            },
            lazy: false
          },
      {
        onAccept: (value, mask) => {
          if (!withPeriod) {
            const maskedValue = mask.value;
            if (maskedValue !== innerMaskedValue) {
              setInnerMaskedValue(maskedValue);
            }
          }
        }
      }
    );

    useLayoutEffect(() => {
      if (cursorPosRef.current !== null) {
        const inputElement = withPeriod ? periodInputRef.current : (maskRef.current as any)?.input;
        if (inputElement) {
          const pos = cursorPosRef.current;
          inputElement.setSelectionRange(pos, pos);
          cursorPosRef.current = null;
        }
      }
    }, [innerMaskedValue, withPeriod]);

    useEffect(() => {
      if (!ref) return;

      const inputRef = withPeriod ? periodInputRef.current : maskRef.current;

      if (typeof ref === 'function') {
        ref(inputRef as HTMLInputElement | null);
        return;
      }

      (ref as RefObject<HTMLInputElement | null>).current = inputRef as HTMLInputElement | null;
    }, [ref, maskRef, withPeriod]);

    useEffect(() => {
      if (withPeriod) return;

      if (maskedValue !== innerMaskedValue) {
        setMaskedValue(innerMaskedValue);
      }
    }, [innerMaskedValue, withPeriod]);

    const icon = useMemo(() => {
      return withIcon && withPicker ? (
        <div
          ref={iconRef}
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();

            if (withPicker && onToggle) {
              onToggle();
            } else if (withPicker) {
              onFocus?.();
            }
          }}
          className={clsx(styles.clock, !withPicker && styles.cursor)}
        >
          <IconScheduleTimeWatchOutlined24 />
        </div>
      ) : null;
    }, [onFocus, onToggle, withIcon, withPicker, iconRef]);

    const isValueMatchesTheMask = (mask: string, value: string) => {
      const maskPattern = mask.replace(/[HMS]/gi, '_');
      return maskPattern === value;
    };
    const handleResetInput = useCallback(() => {
      if (!withPeriod) {
        const emptyMask = isTimeWithSecondsType ? '__:__:__' : '__:__';
        setInnerMaskedValue(emptyMask);
      } else {
        setInnerMaskedValue('');
      }
      onReset?.();
    }, [onReset, withPeriod, isTimeWithSecondsType]);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const input = e.target as HTMLInputElement;
        const newValue = input.value;
        const prevValue = withPeriod && periodInputRef.current ? innerMaskedValue : innerMaskedValue;

        if (withPeriod) {
          const template = isTimePeriodWithSecondsType ? '__:__:__ — __:__:__' : '__:__ — __:__';

          if (prevValue && newValue.length < prevValue.length) {
            let deletePos = -1;
            for (let i = 0; i < prevValue.length; i++) {
              if (i >= newValue.length || newValue[i] !== prevValue[i]) {
                deletePos = i;
                break;
              }
            }

            if (deletePos >= 0) {
              const deletedChar = prevValue[deletePos];
              const templateChar = template[deletePos];

              if (templateChar !== '_') {
                return;
              }

              if (/[0-9]/.test(deletedChar)) {
                const result = prevValue.substring(0, deletePos) + '_' + prevValue.substring(deletePos + 1);
                cursorPosRef.current = deletePos;
                setInnerMaskedValue(result);
                return;
              }

              cursorPosRef.current = deletePos;
              setInnerMaskedValue(prevValue);
              return;
            }
          }

          const cursorPos = (e.target as HTMLInputElement).selectionStart || 0;
          const trimmedValue = newValue.slice(0, template.length);

          let result = '';
          for (let i = 0; i < template.length; i++) {
            const char = trimmedValue[i];
            const templateChar = template[i];

            if (templateChar === '_') {
              if (char && /[0-9_]/.test(char)) {
                let posInTime: number;

                if (isTimePeriodWithSecondsType) {
                  if (i >= 12) {
                    posInTime = i - 12;
                  } else {
                    posInTime = i;
                  }
                } else {
                  if (i >= 9) {
                    posInTime = i - 9;
                  } else {
                    posInTime = i;
                  }
                }

                let isValid = true;

                if (posInTime === 0 && char !== '_' && parseInt(char) > 2) {
                  isValid = false;
                } else if (posInTime === 1 && char !== '_') {
                  const firstHourDigit = result[i - 1];
                  if (firstHourDigit === '2' && parseInt(char) > 3) {
                    isValid = false;
                  }
                } else if (posInTime === 3 && char !== '_' && parseInt(char) > 5) {
                  isValid = false;
                } else if (posInTime === 6 && isTimePeriodWithSecondsType && char !== '_' && parseInt(char) > 5) {
                  isValid = false;
                }

                result += isValid ? char : '_';
              } else {
                result += '_';
              }
            } else {
              result += templateChar;
            }
          }

          cursorPosRef.current = cursorPos;
          setInnerMaskedValue(result);
          return;
        }

        setInnerMaskedValue(newValue);
      },
      [withPeriod, isTimePeriodWithSecondsType, innerMaskedValue]
    );

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

          const validatedTimes = times.map((time, index) => {
            const part = timeParts[index];

            if (!time || !isValid(time)) {
              if (part && part.includes('_')) {
                return null;
              }
              return null;
            }
            const validated = makeEnabledTimeRangeDate(time);
            return validated;
          });

          if (validatedTimes[0] === null && validatedTimes[1] === null) {
            return [null, null];
          }

          if (validatedTimes[0] && validatedTimes[1] && isAfter(validatedTimes[0], validatedTimes[1])) {
            if (onChangeFirst && onChangeSecond) {
              onChangeFirst(validatedTimes[1]);
              onChangeSecond(validatedTimes[0]);
            }
            return [validatedTimes[1], validatedTimes[0]];
          }

          return [validatedTimes[0] || null, validatedTimes[1] || null];
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

    const hasValue = withPeriod ? Boolean(valueFrom || valueTo) : Boolean(value);

    const shouldShowReset = reset && hasValue;

    return (
      <Input
        inputRef={(withPeriod ? periodInputRef : maskRef) as any}
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
        reset={shouldShowReset}
        onReset={handleResetInput}
        {...props}
      />
    );
  }
);

TimePickerInput.displayName = 'TimePickerInput';

export default TimePickerInput;
