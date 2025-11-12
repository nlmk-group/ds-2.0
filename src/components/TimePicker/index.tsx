import React, { CSSProperties, FC, useCallback, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

import { generateUUID, TWO_DIGIT_FORMAT, useUpdatedValues } from '@components/declaration';
import { useFloatingReferenceSync } from '@components/declaration/hooks';
import { ClickAwayListener, PseudoInput } from '@components/index';
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react';
import clsx from 'clsx';
import { isAfter, isEqual, set } from 'date-fns';

import { ETimePickerType, TDateValues, TTimePickerType } from './types';

import styles from './TimePicker.module.scss';

import { TimePickerInput, TimeSelector } from './subcomponents';

/**
 * Компонент TimePicker для выбора времени в различных форматах.
 * @component
 * @param {Object} props - Свойства компонента TimePicker.
 * @param {number|string} [props.id] - Уникальный идентификатор компонента.
 * @param {ETimePickerType} [props.type=ETimePickerType.time] - Тип пикера времени.
 * @param {string} [props.name] - Имя поля для использования в формах.
 * @param {string} [props.portalContainerId='root'] - ID контейнера для портала.
 * @param {function} [props.enabledHourFrom] - Функция для определения начального доступного часа.
 * @param {function} [props.enabledHourTo] - Функция для определения конечного доступного часа.
 * @param {function} [props.enabledMinuteFrom] - Функция для определения начальной доступной минуты.
 * @param {function} [props.enabledMinuteTo] - Функция для определения конечной доступной минуты.
 * @param {Date} [props.value] - Выбранное значение времени.
 * @param {function} [props.onChange] - Обработчик изменения выбранного времени.
 * @param {Date} [props.valueFrom] - Начальное значение времени для периода.
 * @param {Date} [props.valueTo] - Конечное значение времени для периода.
 * @param {function} [props.onPeriodChange] - Обработчик изменения периода времени.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {boolean} [props.disabledPanel=false] - Флаг блокировки панели выбора.
 * @param {boolean} [props.withPortal=false] - Флаг использования портала для рендеринга.
 * @param {boolean} [props.colored=false] - Флаг применения цветовых стилей.
 * @param {boolean} [props.pseudo=false] - Флаг использования псевдо-инпута.
 * @param {boolean} [props.isOpenOnFocus=false] - Флаг открытия пикера при фокусе.
 * @param {boolean} [props.withIcon=true] - Флаг отображения иконки.
 * @param {boolean} [props.withPicker=true] - Флаг использования всплывающего пикера.
 * @param {string} [props.label=''] - Текст метки (label) для инпута.
 * @param {boolean} [props.reset=false] - Флаг наличия кнопки сброса.
 * @param {function} [props.onReset] - Обработчик сброса значения.
 * @returns {JSX.Element} Компонент TimePicker.
 */
const TimePicker: FC<TTimePickerType> = ({
  id,
  type = ETimePickerType.time,
  name,
  portalContainerId = 'root',
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
  colored = false,
  pseudo = false,
  isOpenOnFocus = false,
  withIcon = true,
  withPicker = true,
  label = '',
  reset,
  onReset,
  ...restInputProps
}) => {
  const isTimeType = useMemo(() => type === ETimePickerType.time, [type]);
  const isTimeWithSecondsType = useMemo(() => type === ETimePickerType.timeWithSeconds, [type]);
  const isTimePeriodType = useMemo(() => type === ETimePickerType.period, [type]);
  const isTimePeriodWithSecondsType = useMemo(() => type === ETimePickerType.periodWithSeconds, [type]);

  const [isOpenOnInputFocus, setOpenOnFocus] = useState<boolean>(isOpenOnFocus);
  const [isOpen, setOpen] = useState(false);
  const [inputRef, setInputRef] = useState<null | HTMLInputElement>(null);
  const [calendarRef, setCalendarRef] = useState<null | HTMLDivElement>(null);
  id = useMemo(() => `TimePicker-${(id && id.toString()) || generateUUID()}`, [id]);

  const [selectedTimeFirst, setSelectedTimeFirst] = useState<Date | undefined>(outerValueFrom);
  const [selectedTimeSecond, setSelectedTimeSecond] = useState<Date | undefined>(outerValueTo);

  const { onChange: innerOnPeriodChange } = useUpdatedValues<TDateValues>(
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
      setSelectedTimeFirst(value);
      setSelectedTimeSecond(value);
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
      outerOnPeriodChange?.(valueFrom, valueTo);
      innerOnPeriodChange({ valueFrom, valueTo });
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

  const [isPositioned, setIsPositioned] = useState(false);

  const { refs, floatingStyles, placement } = useFloating({
    placement: 'bottom-start',
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate
  });

  useFloatingReferenceSync(inputRef, calendarRef, refs, setIsPositioned);

  const handleSetValues = useCallback(
    (isBlur?: boolean) => (date: Date | null, date2?: Date | null) => {
      if (!isBlur) {
        inputRef?.blur();
        if ((isTimePeriodType || isTimePeriodWithSecondsType) && onPeriodChange) {
          if (date && date2 && isAfter(date, date2)) {
            onPeriodChange(date2, date);
          } else {
            onPeriodChange(date || undefined, date2 || undefined);
          }
        } else if (onChange && date) {
          onChange(date);
        }
        setOpen(false);
      }
    },
    [inputRef, onChange, onPeriodChange, isTimePeriodType, isTimePeriodWithSecondsType]
  );

  const handleAccept = useCallback(() => {
    const isPeriodType = isTimePeriodType || isTimePeriodWithSecondsType;

    const updatePeriod = () => {
      if (selectedTimeFirst && selectedTimeSecond) {
        onPeriodChange(
          isAfter(selectedTimeFirst, selectedTimeSecond) ? selectedTimeSecond : selectedTimeFirst,
          isAfter(selectedTimeFirst, selectedTimeSecond) ? selectedTimeFirst : selectedTimeSecond
        );
      }
    };

    const updateTime = () => {
      if (onChange && innerValue) {
        const newDate = set(innerValue, {
          hours: selectedTime.getHours(),
          minutes: selectedTime.getMinutes(),
          ...(isTimeWithSecondsType && { seconds: selectedTime.getSeconds() })
        });
        onChange(newDate);
        setInnerOnChange(newDate);
      }
    };

    if (isPeriodType) {
      updatePeriod();
    } else {
      updateTime();
    }

    handleClose();
  }, [
    onChange,
    selectedTime,
    isTimeWithSecondsType,
    selectedTimeFirst,
    selectedTimeSecond,
    isTimePeriodType,
    isTimePeriodWithSecondsType,
    onPeriodChange
  ]);

  const renderTimePickerPanel = () => (
    <ClickAwayListener
      onClickAway={() => {
        if (!isOpenOnInputFocus) {
          handleAccept();
        }
      }}
    >
      <div
        className={styles.opened}
        ref={setCalendarRef}
        style={{ ...floatingStyles, visibility: (isPositioned ? 'visible' : 'hidden') as CSSProperties['visibility'] }}
        data-popper-placement={placement}
      >
        <TimeSelector
          initialSelectedTimeFirst={selectedTimeFirst}
          initialSelectedTimeSecond={selectedTimeSecond}
          onChangeFirst={setSelectedTimeFirst}
          onChangeSecond={setSelectedTimeSecond}
          selectedTime={selectedTime}
          onChange={setSelectedTime}
          isTimeWithSecondsType={isTimeWithSecondsType}
          isTimePeriodType={isTimePeriodType}
          isTimePeriodWithSecondsType={isTimePeriodWithSecondsType}
          disabled={disabledPanel}
          enabledHourFrom={enabledHourFrom}
          enabledHourTo={enabledHourTo}
          enabledMinuteFrom={enabledMinuteFrom}
          enabledMinuteTo={enabledMinuteTo}
          value={value}
          data-ui-time-selector
        />
      </div>
    </ClickAwayListener>
  );

  const renderTimepicker = () => (
    <div
      className={clsx(styles.root, className, restInputProps.disabled && styles.disabled, isOpen && styles.opened)}
      id={String(id)}
      data-ui-timepicker
    >
      {name && [ETimePickerType.time, ETimePickerType.timeWithSeconds].includes(type as ETimePickerType) && (
        <input type="hidden" name={name} value={value?.toISOString()} />
      )}
      <TimePickerInput
        ref={setInputRef}
        value={outerValue}
        valueFrom={selectedTimeFirst}
        valueTo={selectedTimeSecond}
        onChangeFirst={setSelectedTimeFirst}
        onChangeSecond={setSelectedTimeSecond}
        selectedTimeFirst={selectedTimeFirst}
        selectedTimeSecond={selectedTimeSecond}
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
        colored={colored}
        withIcon={withIcon}
        withPicker={withPicker}
        label={label}
        reset={
          reset && (isTimePeriodType || isTimePeriodWithSecondsType ? !!(outerValueFrom || outerValueTo) : !!value)
        }
        onReset={onReset}
        {...restInputProps}
        data-ui-time-picker-input
      />
      {isOpen &&
        (!withPortal ? (
          <>{renderTimePickerPanel()}</>
        ) : (
          ReactDOM.createPortal(
            <>{renderTimePickerPanel()}</>,
            document.getElementById(portalContainerId) as HTMLElement
          )
        ))}
    </div>
  );

  if (pseudo) return <PseudoInput label={label}>{pseudoTime}</PseudoInput>;

  if (isOpenOnInputFocus)
    return (
      <ClickAwayListener
        onClickAway={() => {
          handleAccept();
        }}
      >
        {renderTimepicker()}
      </ClickAwayListener>
    );
  else return <>{renderTimepicker()}</>;
};

export default TimePicker;
