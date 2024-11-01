import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';

import ClickAwayListener from '@components/ClickAwayListener';
import {
  getLastValue,
  LEVEL_MAPPING_ENUM,
  locale,
  panelToCalendarMapping,
  yearsAfterCurrent,
  yearsBeforeCurrent
} from '@components/DatePicker/helpers';
import { CommonCalendar, TimeSelector } from '@components/DatePicker/subcomponents';
import { ICalendarPanelProps } from '@components/DatePicker/subcomponents/CalendarPanel/types';
import { TLevel } from '@components/DatePicker/types';
import { useLocale } from '@components/DatePicker/utils';
import { set } from 'date-fns';

export const CalendarPanel = forwardRef<HTMLDivElement, ICalendarPanelProps>(
  (
    {
      level,
      value,
      onChange,
      onPeriodChange,
      disableChange,
      withPeriod,
      withShift,
      withTime,
      withSeconds,
      valueTo,
      valueFrom,
      shiftFrom,
      shiftTo,
      shiftLength,
      enabledTo,
      enabledFrom,
      enabledHourFrom,
      enabledHourTo,
      enabledMinuteFrom,
      enabledMinuteTo,
      onClose,
      onReset,
      disableChangesOnBlur,
      isOpenOnFocus,
      isHideYear,
      withoutWeekdays,
      onPanelChange,
      onSelect,
      infiniteTimeScroll,
      ...props
    },
    ref
  ) => {
    const language = useLocale();
    const [selectedPanel, setSelectedPanel] = useState<TLevel>('day');
    const [innerValue, innerOnChange] = useState(withPeriod ? valueFrom : value);
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [innerPeriodValue, innerPeriodOnChange] = useState<{
      valueFrom?: Date;
      valueTo?: Date;
    }>({
      valueFrom,
      valueTo
    });
    const [panelValue, setPanelValue] = useState((withPeriod ? valueFrom : value) || new Date());
    const [innerShiftFrom, setInnerShiftFrom] = useState(shiftFrom ?? 1);
    const [innerShiftTo, setInnerShiftTo] = useState(shiftTo ?? 1);

    const isChangeOnBlur = useMemo(() => {
      return (
        disableChangesOnBlur ||
        (withPeriod && (!innerPeriodValue.valueFrom || !innerPeriodValue.valueTo)) ||
        (!withPeriod && !innerValue)
      );
    }, [disableChangesOnBlur, innerPeriodValue, innerValue, withPeriod]);

    useEffect(() => {
      setSelectedPanel(level);
    }, [level]);

    useEffect(() => {
      setInnerShiftFrom(shiftFrom ?? 1);
      setInnerShiftTo(shiftTo ?? 1);
    }, [shiftFrom, shiftTo]);

    useEffect(() => {
      if (!withPeriod) {
        if (value) {
          innerOnChange(value);
          if (withTime) {
            setSelectedTime(value);
          }
        }
      }
    }, [value, withPeriod, withTime]);

    const period = useMemo(() => {
      if (!panelValue) {
        return '';
      }

      const months = locale[language]?.months;
      const month = panelValue.getMonth();
      const year = panelValue.getFullYear();

      if (months && typeof month === 'number' && typeof year === 'number') {
        if (selectedPanel === LEVEL_MAPPING_ENUM.day) {
          return `${months[month]}, ${year}`;
        }
      }

      if (selectedPanel === LEVEL_MAPPING_ENUM.month || selectedPanel === LEVEL_MAPPING_ENUM.quarter) {
        return panelValue.getFullYear();
      }
      const currentYear: number = panelValue.getFullYear();
      return `${currentYear - yearsBeforeCurrent} — ${currentYear + yearsAfterCurrent}`;
    }, [panelValue, selectedPanel]);

    const handleAccept = useCallback(() => {
      if (!innerValue || !onChange) {
        return;
      }

      if (withPeriod && onPeriodChange) {
        const valueFrom = innerPeriodValue.valueFrom;
        const valueTo = getLastValue(level, innerPeriodValue.valueTo, valueFrom, locale[language].quarters);
        const withShiftFunc = (shift: number) => (withShift ? shift : undefined);
        const [shiftFrom, shiftTo] = [withShiftFunc(innerShiftFrom), withShiftFunc(innerShiftTo)];
        onPeriodChange(valueFrom, valueTo, shiftFrom, shiftTo);
      }

      if (!withTime || !selectedTime) {
        onChange(innerValue);
        onClose();
        return;
      }

      let newValue = set(innerValue, {
        hours: selectedTime.getHours(),
        minutes: selectedTime.getMinutes()
      });

      if (withSeconds) {
        newValue = set(newValue, { seconds: selectedTime.getSeconds() });
      }

      onChange(newValue);
      onClose();
    }, [
      innerPeriodValue.valueFrom,
      innerPeriodValue.valueTo,
      innerShiftFrom,
      innerShiftTo,
      innerValue,
      level,
      onChange,
      onClose,
      onPeriodChange,
      selectedTime,
      withPeriod,
      withSeconds,
      withShift,
      withTime
    ]);

    const handleDecline = useCallback(() => {
      onReset();
    }, [onReset]);

    const handleSelect = useCallback(
      (date: Date) => {
        onSelect && onSelect(date);

        if (selectedPanel === LEVEL_MAPPING_ENUM.day) {
          innerOnChange(date);
        }

        if (!withPeriod || !(level === LEVEL_MAPPING_ENUM.year)) {
          setPanelValue(date);
        }

        if (selectedPanel === LEVEL_MAPPING_ENUM.month && level === LEVEL_MAPPING_ENUM.day) {
          setSelectedPanel('day');
        }
        if (selectedPanel === LEVEL_MAPPING_ENUM.year && level === LEVEL_MAPPING_ENUM.quarter) {
          setSelectedPanel('quarter');
        }
        if (
          selectedPanel === LEVEL_MAPPING_ENUM.year &&
          (level === LEVEL_MAPPING_ENUM.month || level === LEVEL_MAPPING_ENUM.day)
        ) {
          setSelectedPanel('month');
        }

        if (!withPeriod && !withTime && level === selectedPanel) {
          onChange && onChange(date);
          onClose();
          return;
        }

        if (withPeriod) {
          innerPeriodOnChange(prev => {
            const prevStart = prev.valueFrom;
            const prevEnd = prev.valueTo;

            if (!prevStart && level === selectedPanel) {
              return {
                valueFrom: date
              };
            }
            if (prevStart && !prevEnd) {
              const valueFrom = +prevStart - +date > 0 ? date : prevStart;
              const valueTo = +prevStart - +date > 0 ? prevStart : date;
              return {
                valueFrom,
                valueTo
              };
            }
            if (prevStart && prevEnd && level === selectedPanel) {
              return {
                valueFrom: date
              };
            }
            return {};
          });
        }
      },
      [selectedPanel, level, onChange, onClose, withPeriod, withTime]
    );

    const dateAdjustments = {
      [LEVEL_MAPPING_ENUM.day]: (date: Date) => set(date, { month: date.getMonth() - 1 }),
      [LEVEL_MAPPING_ENUM.quarter]: (date: Date) => set(date, { year: date.getFullYear() - 1 }),
      [LEVEL_MAPPING_ENUM.month]: (date: Date) => set(date, { year: date.getFullYear() - 1 }),
      [LEVEL_MAPPING_ENUM.year]: (date: Date) => set(date, { year: date.getFullYear() - 12 })
    };

    const onLeftArrowClick = useCallback(() => {
      setPanelValue((prevPanel: Date) => {
        if (!prevPanel) return prevPanel;

        const adjustDate = dateAdjustments[selectedPanel];
        const newDate = adjustDate ? adjustDate(prevPanel) : prevPanel;

        onPanelChange?.(newDate);
        return newDate;
      });
    }, [selectedPanel, onPanelChange]);

    const onRightArrowClick = useCallback(() => {
      setPanelValue((prevPanel: Date) => {
        if (!prevPanel) return prevPanel;

        const adjustDate = {
          [LEVEL_MAPPING_ENUM.day]: (date: Date) => set(date, { month: date.getMonth() + 1 }),
          [LEVEL_MAPPING_ENUM.quarter]: (date: Date) => set(date, { year: date.getFullYear() + 1 }),
          [LEVEL_MAPPING_ENUM.month]: (date: Date) => set(date, { year: date.getFullYear() + 1 }),
          [LEVEL_MAPPING_ENUM.year]: (date: Date) => set(date, { year: date.getFullYear() + 12 })
        }[selectedPanel];

        const newDate = adjustDate ? adjustDate(prevPanel) : prevPanel;

        onPanelChange?.(newDate);
        return newDate;
      });
    }, [selectedPanel, onPanelChange]);

    const onContentClick = useCallback(() => {
      switch (selectedPanel) {
        case LEVEL_MAPPING_ENUM.day: {
          setSelectedPanel('month');
          break;
        }
        case LEVEL_MAPPING_ENUM.month: {
          setSelectedPanel('year');
          break;
        }
        case LEVEL_MAPPING_ENUM.quarter: {
          setSelectedPanel('year');
          break;
        }
      }
    }, [selectedPanel]);

    const CalendarComponent = panelToCalendarMapping[selectedPanel];

    const renderCalendarPanel = () => (
      <CommonCalendar
        ref={ref}
        timeSlot={
          withTime ? (
            <TimeSelector
              innerValue={innerValue}
              disabled={disableChange}
              enabledHourFrom={enabledHourFrom}
              enabledHourTo={enabledHourTo}
              enabledMinuteFrom={enabledMinuteFrom}
              enabledMinuteTo={enabledMinuteTo}
              withSeconds={withSeconds}
              value={value}
              selectedTime={selectedTime}
              onChange={setSelectedTime}
              infiniteTimeScroll={infiniteTimeScroll}
            />
          ) : undefined
        }
        period={period}
        withSeconds={withSeconds}
        onLeftClick={onLeftArrowClick}
        disableContentOfPeriodPicker={selectedPanel === LEVEL_MAPPING_ENUM.year}
        onContentClick={onContentClick}
        onRightClick={onRightArrowClick}
        onAccept={handleAccept}
        onDecline={handleDecline}
        disableChange={disableChange}
        showFooter={withTime || withShift || withSeconds || withPeriod}
        showShiftsSelector={withShift && selectedPanel === LEVEL_MAPPING_ENUM.day}
        shiftFrom={innerShiftFrom}
        shiftTo={innerShiftTo}
        shiftLength={shiftLength}
        onChangeShiftFrom={setInnerShiftFrom}
        onChangeShiftTo={setInnerShiftTo}
        level={level}
        isHideYear={isHideYear}
        selectedPanel={selectedPanel}
        {...props}
      >
        <CalendarComponent
          valueFrom={innerPeriodValue.valueFrom}
          valueTo={innerPeriodValue.valueTo}
          withPeriod={withPeriod}
          withTime={withTime}
          selectedDate={innerValue}
          disableChange={disableChange}
          onSelect={handleSelect}
          enabledFrom={enabledFrom}
          enabledTo={enabledTo}
          panelValue={panelValue}
          withoutWeekdays={withoutWeekdays}
        />
      </CommonCalendar>
    );

    return isOpenOnFocus ? (
      <>{renderCalendarPanel()}</>
    ) : (
      <ClickAwayListener onClickAway={() => (isChangeOnBlur ? onClose() : handleAccept())}>
        {renderCalendarPanel()}
      </ClickAwayListener>
    );
  }
);

export default CalendarPanel;
