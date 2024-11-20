import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import { useUpdatedValues } from '@components/declaration';
import { ClickAwayListener, PseudoInput } from '@components/index';
import clsx from 'clsx';
import { isEqual } from 'date-fns';

import { TDatePickerProps, TDateValues, TShiftValues } from './types';

import styles from './Datepicker.module.scss';

import { defaultShiftLength } from './helpers';
import { CalendarPanel, DatePickerInput } from './subcomponents';
import { LocaleProvider } from './utils';

/**
 * Компонент DatePicker для выбора даты и времени в различных форматах.
 * @component
 * @param {Object} props - Свойства компонента DatePicker.
 * @param {number|string} [props.id] - Уникальный идентификатор компонента.
 * @param {string} [props.locale='ru'] - Локаль для форматирования дат.
 * @param {TLevel} [props.level='day'] - Уровень детализации выбора даты.
 * @param {'date'|'time'|'seconds'|'period'|'shift'} [props.type='date'] - Тип пикера.
 * @param {string} [props.name] - Имя поля для использования в формах.
 * @param {string} [props.portalContainerId='root'] - ID контейнера для портала.
 * @param {Date} [props.valueFrom] - Начальная дата для периода.
 * @param {Date} [props.valueTo] - Конечная дата для периода.
 * @param {Date} [props.enabledFrom=new Date(1900, 0, 1)] - Минимальная доступная дата.
 * @param {Date} [props.enabledTo=new Date(2100, 11, 31)] - Максимальная доступная дата.
 * @param {function} [props.enabledHourFrom] - Функция для определения минимального доступного часа.
 * @param {function} [props.enabledHourTo] - Функция для определения максимального доступного часа.
 * @param {function} [props.enabledMinuteFrom] - Функция для определения минимальной доступной минуты.
 * @param {function} [props.enabledMinuteTo] - Функция для определения максимальной доступной минуты.
 * @param {Date} [props.value] - Выбранное значение даты.
 * @param {function} [props.onPeriodChange] - Обработчик изменения периода.
 * @param {function} [props.onChange] - Обработчик изменения даты.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {number} [props.shiftFrom] - Начальное значение смены для типа 'shift'.
 * @param {number} [props.shiftTo] - Конечное значение смены для типа 'shift'.
 * @param {2|3} [props.shiftLength=defaultShiftLength] - Длина смены.
 * @param {boolean} [props.disableChange] - Флаг для отключения возможности изменения.
 * @param {boolean} [props.withPortal] - Флаг для рендеринга в портале.
 * @param {boolean} [props.colored] - Флаг для применения цветовых стилей.
 * @param {boolean} [props.pseudo] - Флаг для отображения псевдо-инпута.
 * @param {ReactNode} [props.pseudoChildren] - Содержимое для псевдо-инпута.
 * @param {boolean} [props.disableChangesOnBlur=false] - Флаг для отключения изменений при потере фокуса.
 * @param {boolean} [props.isOpenOnFocus=false] - Флаг для открытия пикера при фокусе.
 * @param {boolean} [props.isHideYear=false] - Флаг для скрытия года.
 * @param {boolean} [props.withoutWeekdays=false] - Флаг для отображения без дней недели.
 * @param {function} [props.onPanelChange] - Обработчик изменения панели.
 * @param {function} [props.onSelect] - Обработчик выбора даты.
 * @param {boolean} [props.infiniteTimeScroll] - Флаг для бесконечной прокрутки времени.
 * @param {boolean} [props.reset=false] - Флаг наличия кнопки сброса.
 * @param {function} [props.onReset] - Обработчик сброса значения.
 * @returns {JSX.Element} Компонент DatePicker.
 */

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
  infiniteTimeScroll,
  reset,
  onReset,
  error,
  helperText,
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
      infiniteTimeScroll={infiniteTimeScroll}
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
        reset={reset}
        onReset={onReset}
        isHideYear={isHideYear}
        error={error}
        helperText={helperText}
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
