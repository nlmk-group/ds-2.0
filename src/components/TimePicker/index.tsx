import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import { generateUUID, useUpdatedValues } from '@components/declaration';
import { TWO_DIGIT_FORMAT } from '@components/declaration';
import { ClickAwayListener, PseudoInput } from '@components/index';
import TimePickerInput from '@components/TimePicker/subcomponents/TimePickerInput';
import TimeSelector from '@components/TimePicker/subcomponents/TimeSelector';
import clsx from 'clsx';
import { isEqual, set } from 'date-fns';

import { TDateValues, TTimePickerType } from './types';

import styles from './TimePicker.module.scss';

const TimePicker: FC<TTimePickerType> = ({
  id,
  type = 'time',
  name,
  enabledHourFrom,
  enabledHourTo,
  enabledMinuteFrom,
  enabledMinuteTo,
  value: externalValue,
  onChange: outerOnChange,
  valueFrom: outerValueFrom,
  valueTo: outerValueTo,
  onPeriodChange: outerOnPeriodChange,
  className,
  disabledPanel = false,
  withPortal = false,
  // todo добавить colored после добавления в Input
  // colored = false,
  pseudo = false,
  isOpenOnFocus = false,
  withIcon = true,
  withPicker = true,
  label = '',
  ...restInputProps
}) => {
  const isTimeType = useMemo(() => type === 'time', [type]);
  const isTimeWithSecondsType = useMemo(() => type === 'timeWithSeconds', [type]);
  const isTimePeriodType = useMemo(() => type === 'period', [type]);
  const isTimePeriodWithSecondsType = useMemo(() => type === 'periodWithSeconds', [type]);

  const [isOpenOnInputFocus, setOpenOnFocus] = useState<boolean>(isOpenOnFocus);
  const [isOpen, setOpen] = useState(false);
  const [inputRef, setInputRef] = useState<null | HTMLInputElement>(null);
  const [calendarRef, setCalendarRef] = useState<null | HTMLDivElement>(null);
  id = useMemo(() => `TimePicker-${(id && id.toString()) || generateUUID()}`, [id]);
  const effectiveWithPicker = isTimePeriodType || isTimePeriodWithSecondsType ? false : withPicker;

  const {
    value: { valueFrom, valueTo },
    onChange: innerOnPeriodChange
  } = useUpdatedValues<TDateValues>(
    useMemo(() => ({ valueFrom: outerValueFrom, valueTo: outerValueTo }), [outerValueFrom, outerValueTo]),
    useCallback((a: TDateValues, b: TDateValues) => {
      if (!a.valueFrom || !b.valueFrom) {
        return a.valueFrom === b.valueFrom;
      }
      if (!a.valueTo || !b.valueTo) {
        return a.valueTo === b.valueTo;
      }
      return isEqual(a.valueFrom, b.valueFrom) && isEqual(a.valueTo, b.valueTo);
    }, [])
  );

  const { value, onChange: innerOnChange } = useUpdatedValues<Date | undefined>(externalValue);

  const [innerValue, setInnerOnChange] = useState(value);
  const [selectedTime, setSelectedTime] = useState(new Date());

  useEffect(() => {
    if (value) {
      setInnerOnChange(value);
      setSelectedTime(value);
    }
  }, [value]);

  useEffect(() => {
    if (isOpenOnFocus || !withIcon) {
      setOpenOnFocus(true);
    }
  }, [isOpenOnFocus, withIcon]);

  const onChange = useCallback(
    (date: Date) => {
      innerOnChange(date);
      outerOnChange?.(date);
    },
    [innerOnChange, outerOnChange]
  );

  const onPeriodChange = useCallback(
    (valueFrom?: Date, valueTo?: Date) => {
      if (outerOnPeriodChange) {
        outerOnPeriodChange(valueFrom, valueTo);
      }
      if (valueFrom || valueTo) {
        innerOnPeriodChange({ valueFrom, valueTo });
      }
    },
    [innerOnPeriodChange, outerOnPeriodChange]
  );

  const outerValue = useMemo(() => {
    return value && new Date(value);
  }, [value]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleFocus = useCallback(() => {
    setOpen(true);
  }, []);

  const pseudoTime = useMemo(() => {
    if (!value) return '';

    const timeOptions: Intl.DateTimeFormatOptions = isTimeWithSecondsType
      ? { hour: TWO_DIGIT_FORMAT, minute: TWO_DIGIT_FORMAT, second: TWO_DIGIT_FORMAT }
      : { hour: TWO_DIGIT_FORMAT, minute: TWO_DIGIT_FORMAT };

    return value.toLocaleTimeString([], timeOptions);
  }, [value, isTimeWithSecondsType]);

  const { styles: popperStyles, attributes } = usePopper(inputRef, calendarRef, {
    placement: 'bottom-start'
  });

  const handleSetValues = useCallback(
    (isBlur?: boolean) => (date: any, date2: any) => {
      if (isOpen && isBlur) {
        return;
      }
      inputRef?.blur();
      if ((isTimePeriodType || isTimePeriodWithSecondsType) && onPeriodChange) {
        onPeriodChange(date || undefined, date2 || undefined);
      } else if (onChange) {
        onChange(date);
      }
      setOpen(false);
    },
    [inputRef, isOpen, onChange, onPeriodChange, isTimePeriodType]
  );

  const handleAccept = useCallback(() => {
    if (onChange && innerValue) {
      const newDate = set(innerValue, {
        hours: selectedTime.getHours(),
        minutes: selectedTime.getMinutes(),
        ...(isTimeWithSecondsType && { seconds: selectedTime.getSeconds() })
      });
      onChange(newDate);
    }
    handleClose();
    return;
  }, [onChange, innerValue, selectedTime, isTimeWithSecondsType]);

  const renderTimePickerPanel = () => (
    <ClickAwayListener
      onClickAway={() => {
        if (!isOpenOnInputFocus) {
          handleAccept();
        }
      }}
    >
      <div className={styles.opened} ref={setCalendarRef} style={popperStyles.popper} {...attributes.popper}>
        <TimeSelector
          isTimeWithSecondsType={isTimeWithSecondsType}
          disabled={disabledPanel}
          enabledHourFrom={enabledHourFrom}
          enabledHourTo={enabledHourTo}
          enabledMinuteFrom={enabledMinuteFrom}
          enabledMinuteTo={enabledMinuteTo}
          value={value}
          selectedTime={selectedTime}
          onChange={setSelectedTime}
        />
      </div>
    </ClickAwayListener>
  );

  const renderTimepicker = () => (
    <div
      className={clsx(styles.root, className, restInputProps.disabled && styles.disabled, isOpen && styles.opened)}
      id={id as string}
    >
      {name && ['time', 'timeWithSeconds'].includes(type) && (
        <input type="hidden" name={name} value={value?.toISOString()} />
      )}
      {/*todo добавить colored после добавления в Input*/}
      <TimePickerInput
        ref={setInputRef}
        value={outerValue}
        valueFrom={valueFrom}
        valueTo={valueTo}
        isTimeType={isTimeType}
        isTimeWithSecondsType={isTimeWithSecondsType}
        isTimePeriodType={isTimePeriodType}
        isTimePeriodWithSecondsType={isTimePeriodWithSecondsType}
        onChange={onChange}
        enabledHourFrom={enabledHourFrom}
        enabledHourTo={enabledHourTo}
        enabledMinuteFrom={enabledMinuteFrom}
        enabledMinuteTo={enabledMinuteTo}
        isOpenOnFocus={isOpenOnInputFocus}
        onEnterKeyDown={handleSetValues(false)}
        onTabKeyDown={handleSetValues(false)}
        onBlur={handleSetValues(true)}
        onFocus={handleFocus}
        // colored={colored}
        withIcon={withIcon}
        withPicker={effectiveWithPicker}
        label={label}
        {...restInputProps}
      />
      {isOpen &&
        effectiveWithPicker &&
        (!withPortal ? (
          <>{renderTimePickerPanel()}</>
        ) : (
          ReactDOM.createPortal(<>{renderTimePickerPanel()}</>, document.getElementById('root') as HTMLElement)
        ))}
    </div>
  );

  return pseudo ? (
    <PseudoInput label={label}>{pseudoTime}</PseudoInput>
  ) : isOpenOnInputFocus ? (
    <ClickAwayListener
      onClickAway={() => {
        handleAccept();
      }}
    >
      {renderTimepicker()}
    </ClickAwayListener>
  ) : (
    <>{renderTimepicker()}</>
  );
};

export default TimePicker;
