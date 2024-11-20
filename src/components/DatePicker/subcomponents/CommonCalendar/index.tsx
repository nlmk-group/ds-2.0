import React, { forwardRef } from 'react';

import { locale } from '@components/DatePicker/helpers';
import { Footer, PeriodPicker, ShiftSelector } from '@components/DatePicker/subcomponents';
import { useLocale } from '@components/DatePicker/utils';
import { Divider, Typography } from '@components/index';
import clsx from 'clsx';

import { ICommonCalendarProps } from './types';

import styles from './CommonCalendar.module.scss';

export const CommonCalendar = forwardRef<HTMLDivElement, ICommonCalendarProps>(
  (
    {
      disableContentOfPeriodPicker,
      showFooter,
      onDecline,
      onAccept,
      onRightClick,
      onLeftClick,
      onContentClick,
      children,
      period,
      timeSlot,
      shiftTo,
      shiftFrom,
      shiftLength,
      onChangeShiftFrom,
      onChangeShiftTo,
      withSeconds,
      disableChange,
      showShiftsSelector,
      isHideYear,
      selectedPanel,
      ...props
    },
    ref
  ) => {
    const language = useLocale();

    return (
      <div
        ref={ref}
        className={clsx(styles.root, Boolean(timeSlot) && styles.withTime, Boolean(withSeconds) && styles.withSeconds)}
        {...props}
      >
        <div className={clsx(timeSlot && styles.withTimeSlot, withSeconds && styles.withSecondsSlot)}>
          <PeriodPicker
            disableContent={disableChange || disableContentOfPeriodPicker}
            onLeftClick={onLeftClick}
            onRightClick={onRightClick}
            onContentClick={onContentClick}
            isHideYear={isHideYear}
            selectedPanel={selectedPanel}
          >
            {period}
          </PeriodPicker>
          <div className={styles.calendarPanel}>{children}</div>
          {timeSlot && <div className={styles.timePanel}>{timeSlot}</div>}
        </div>
        {showShiftsSelector && (
          <div className={styles['period-wrapper']}>
            <Divider />
            <div className={styles.period}>
              <div className={styles.periodTitle}>
                <Typography variant="Caption">{locale[language].shiftDescription}</Typography>
              </div>
              <div className={styles.periodSelectors}>
                <ShiftSelector
                  disabled={disableChange}
                  value={shiftFrom}
                  shiftLength={shiftLength}
                  onChange={onChangeShiftFrom}
                />{' '}
                —{' '}
                <ShiftSelector
                  disabled={disableChange}
                  value={shiftTo}
                  shiftLength={shiftLength}
                  onChange={onChangeShiftTo}
                />
              </div>
            </div>
          </div>
        )}
        {showFooter && (
          <Footer onDecline={onDecline} onAccept={onAccept} className={styles.footer} disable={disableChange} />
        )}
      </div>
    );
  }
);


CommonCalendar.displayName = 'CommonCalendar'

export default CommonCalendar;
