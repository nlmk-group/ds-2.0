import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import ClickAwayListener from '@components/ClickAwayListener';
import { useUpdatedValues } from '@components/declaration';
import { PseudoInput } from '@components/index';
import clsx from 'clsx';
import { isEqual } from 'date-fns';

import { TDatePickerProps, TDateValues, TShiftValues } from './types';

import styles from './Datepicker.module.scss';

import { defaultShiftLength } from './helpers';
import { CalendarPanel, DatePickerInput } from './subcomponents';
import { LocaleProvider } from './utils';

export const DatePicker: TDatePickerProps = ({
  id,
  locale = 'ru',
  level = 'day',
  type = 'date',
  name,
  portalContainerId = 'root',
  valueFrom: outerValueFrom,
  valueTo: outerValueTo,
  enabledFrom = new Date(1900, 0, 1),
  enabledTo = new Date(2100, 11, 31),
  enabledHourFrom,
  enabledHourTo,
  enabledMinuteFrom,
  enabledMinuteTo,
  value: externalValue,
  onPeriodChange: outerOnPeriodChange,
  onChange: outerOnChange,
  className,
  shiftFrom: outerShiftFrom,
  shiftTo: outerShiftTo,
  shiftLength = defaultShiftLength,
  disableChange,
  withPortal,
  colored,
  pseudo,
  pseudoChildren,
  disableChangesOnBlur = false,
  isOpenOnFocus = false,
  isHideYear = false,
  withoutWeekdays = false,
  onPanelChange,
  onSelect,
  ...restInputProps
}) => {
  const withPeriod = useMemo(() => ['period', 'shift'].includes(type), [type]);
  const withTime = useMemo(() => ['time', 'seconds'].includes(type), [type]);
  const withSeconds = useMemo(() => type === 'seconds', [type]);
  const withShift = useMemo(() => type === 'shift', [type]);
  const [isOpen, setOpen] = useState(false);
  const [inputRef, setInputRef] = useState<null | HTMLInputElement>(null);
  const [calendarRef, setCalendarRef] = useState<null | HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);

  id = useMemo(() => `DatePicker-${id?.toString() ?? performance.now().toString().split('.').join('')}`, [id]);

  const {
    value: { valueFrom, valueTo },
    onChange: innerOnPeriodChange
  } = useUpdatedValues<TDateValues>(
    useMemo(() => ({ valueFrom: outerValueFrom, valueTo: outerValueTo }), [outerValueFrom, outerValueTo]),
    useCallback((a: TDateValues, b: TDateValues) => {
      if (a.valueFrom === undefined || b.valueFrom === undefined) {
        return a.valueFrom === b.valueFrom;
      }
      if (a.valueTo === undefined || b.valueTo === undefined) {
        return a.valueTo === b.valueTo;
      }
      return isEqual(a.valueFrom, b.valueFrom) && isEqual(a.valueTo, b.valueTo);
    }, [])
  );

  const {
    value: { shiftFrom, shiftTo },
    onChange: innerShiftChange
  } = useUpdatedValues<TShiftValues>(
    useMemo(
      () => ({
        shiftFrom: outerShiftFrom,
        shiftTo: outerShiftTo
      }),
      [outerShiftFrom, outerShiftTo]
    )
  );

  const { value, onChange: innerOnChange } = useUpdatedValues<Date | undefined>(externalValue);

  const onChange = useCallback(
    (date: Date) => {
      innerOnChange(date);
      if (outerOnChange) {
        outerOnChange(date);
      }
    },
    [innerOnChange, outerOnChange]
  );

  const onPeriodChange = useCallback(
    (valueFrom?: Date, valueTo?: Date, shiftFrom?: number, shiftTo?: number) => {
      if (outerOnPeriodChange) {
        outerOnPeriodChange(valueFrom, valueTo, shiftFrom, shiftTo);
      }
      if (valueFrom || valueTo) {
        innerOnPeriodChange({ valueFrom, valueTo });
      }
      if (shiftFrom || shiftTo) {
        innerShiftChange({ shiftFrom, shiftTo });
      }
    },
    [innerOnPeriodChange, innerShiftChange, outerOnPeriodChange]
  );

  const outerValue = useMemo(() => {
    return value && new Date(value);
  }, [value, toggle]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleFocus = useCallback(() => {
    setOpen(true);
  }, []);

  const handleReset = useCallback(() => {
    setToggle(s => !s);
    setOpen(false);
  }, []);

  useEffect(() => {
    if (pseudo) {
      handleClose();
    }
  }, [handleClose, pseudo]);

  const { styles: popperStyles, attributes } = usePopper(inputRef, calendarRef, {
    placement: 'bottom-start'
  });

  const handleSetValues = useCallback(
    (isBlur?: boolean) => (date: any, date2: any, shiftFrom: any, shiftTo: any) => {
      if (isOpen && isBlur) {
        return;
      }
      inputRef?.blur();
      if (withPeriod && onPeriodChange) {
        if (withShift) {
          onPeriodChange(date || undefined, date2 || undefined, shiftFrom || undefined, shiftTo || undefined);
        } else {
          onPeriodChange(date || undefined, date2 || undefined);
        }
        setToggle(s => !s);
      } else if (onChange) {
        onChange(date);
      }
      setOpen(false);
    },
    [inputRef, isOpen, onChange, onPeriodChange, withPeriod, withShift]
  );

  const renderCalendarPanel = () => (
    <CalendarPanel
      type={type}
      level={level}
      ref={setCalendarRef}
      withPeriod={withPeriod}
      valueFrom={valueFrom}
      valueTo={valueTo}
      enabledHourFrom={enabledHourFrom}
      enabledHourTo={enabledHourTo}
      enabledMinuteFrom={enabledMinuteFrom}
      enabledMinuteTo={enabledMinuteTo}
      shiftFrom={shiftFrom}
      shiftTo={shiftTo}
      shiftLength={shiftLength}
      value={value}
      onClose={handleClose}
      onReset={handleReset}
      disableChange={disableChange}
      disableChangesOnBlur={disableChangesOnBlur}
      onChange={onChange}
      onPeriodChange={onPeriodChange}
      withTime={withTime}
      enabledTo={enabledTo}
      enabledFrom={enabledFrom}
      style={popperStyles.popper}
      withShift={withShift}
      withSeconds={withSeconds}
      isOpenOnFocus={isOpenOnFocus}
      isHideYear={isHideYear}
      withoutWeekdays={withoutWeekdays}
      onPanelChange={onPanelChange}
      onSelect={onSelect}
      {...attributes.popper}
    />
  );

  const portalContainer = useMemo(() => document.getElementById(portalContainerId) as HTMLElement, [portalContainerId]);

  const renderDatepicker = () => (
    <div
      className={clsx(styles.root, className, restInputProps.disabled && styles.disabled, isOpen && styles.isOpen)}
      id={id as any}
    >
      {name && ['date', 'time', 'seconds'].includes(type) && (
        <input type="hidden" name={name} value={value?.toISOString()} />
      )}
      {name && ['period', 'shift'].includes(type) && (
        <>
          <input type="hidden" name={`${name}-from`} value={valueFrom?.toISOString()} />
          <input type="hidden" name={`${name}-to`} value={valueTo?.toISOString()} />
        </>
      )}
      {name && type === 'shift' && (
        <>
          <input type="hidden" name={`${name}-shift-from`} value={shiftFrom} />
          <input type="hidden" name={`${name}-shift-to`} value={shiftTo} />
        </>
      )}
      <DatePickerInput
        level={level}
        ref={setInputRef}
        showTime={withTime}
        value={outerValue}
        onChange={onChange}
        enabledFrom={enabledFrom}
        enabledTo={enabledTo}
        enabledHourFrom={enabledHourFrom}
        enabledHourTo={enabledHourTo}
        enabledMinuteFrom={enabledMinuteFrom}
        enabledMinuteTo={enabledMinuteTo}
        onFocus={handleFocus}
        withPeriod={withPeriod}
        valueFrom={valueFrom}
        valueTo={valueTo}
        shiftFrom={shiftFrom}
        shiftTo={shiftTo}
        shiftLength={shiftLength}
        withShift={withShift}
        withSeconds={withSeconds}
        isOpenOnFocus={isOpenOnFocus}
        onEnterKeyDown={handleSetValues(false)}
        onTabKeyDown={handleSetValues(false)}
        onBlur={handleSetValues(true)}
        colored={colored}
        isHideYear={isHideYear}
        {...restInputProps}
      />
      {isOpen &&
        (!withPortal ? (
          <>{renderCalendarPanel()}</>
        ) : (
          ReactDOM.createPortal(<>{renderCalendarPanel()}</>, portalContainer)
        ))}
    </div>
  );

  return (
    <LocaleProvider value={locale}>
      {pseudo ? (
        <PseudoInput label={withTime ? 'Дата и время' : 'Дата'}>{pseudoChildren}</PseudoInput>
      ) : (
        (isOpenOnFocus && <ClickAwayListener onClickAway={handleClose}>{renderDatepicker()}</ClickAwayListener>) || (
          <>{renderDatepicker()}</>
        )
      )}
    </LocaleProvider>
  );
};

export default DatePicker;
