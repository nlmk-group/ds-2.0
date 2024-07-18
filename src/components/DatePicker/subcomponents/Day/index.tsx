import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { Typography } from '@components/.';
import { DayProps } from '@components/DatePicker/subcomponents/Day/types';
import clsx from 'clsx';
import { format } from 'date-fns';

import styles from './Day.module.scss';

export const Day: FC<DayProps & PropsWithChildren> = ({
  id,
  isHoverState,
  onHover,
  onClick,
  type = 'day',
  selected,
  disabled,
  today,
  start,
  mid,
  end,
  children,
  disableTimeChange,
  date,
  infiniteTimeScroll
}) => {
  const dateId = date ? format(date, 'dd-MM-yyyy') : undefined;
  return (
    <div
      id={`${dateId ?? ''}${id ?? ''}`}
      onClick={!disabled ? (onClick as MouseEventHandler<HTMLDivElement> | undefined) : undefined}
      className={clsx(styles.root, {
        [styles.selected]: selected,
        [styles.disabled]: disabled,
        [styles.today]: today,
        [styles.start]: start,
        [styles.mid]: mid,
        [styles.end]: end,
        [styles[type]]: type,
        [styles.hoverState]: isHoverState,
        [styles.disableTimeChange]: disableTimeChange,
        [styles.infiniteTimeScroll]: infiniteTimeScroll
      })}
      onMouseOver={!disabled ? onHover : undefined}
      {...{ 'data-testid': selected ? 'selected' : undefined }}
    >
      <div className={styles.wrapper}>
        <Typography variant="Body1-Medium">{children}</Typography>
      </div>
    </div>
  );
};

export default Day;
