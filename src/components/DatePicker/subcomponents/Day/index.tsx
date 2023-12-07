import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { DayProps } from '@components/DatePicker/subcomponents/Day/types';
import clsx from 'clsx';

import styles from './Day.module.scss';

export const Day: FC<DayProps & PropsWithChildren> = ({
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
  disableTimeChange
}) => {
  return (
    <div
      onClick={
        !disabled
          ? (onClick as MouseEventHandler<HTMLDivElement> | undefined)
          : undefined
      }
      className={clsx(styles.root, {
        [styles.selected]: selected,
        [styles.disabled]: disabled,
        [styles.today]: today,
        [styles.start]: start,
        [styles.mid]: mid,
        [styles.end]: end,
        [styles[type]]: type,
        [styles.hoverState]: isHoverState,
        [styles.disableTimeChange]: disableTimeChange
      })}
      onMouseOver={!disabled ? onHover : undefined}
      {...{ 'data-testid': selected ? 'selected' : undefined }}
    >
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default Day;
