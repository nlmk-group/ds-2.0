import React, {FC} from 'react';
import styles from './Control.module.scss';
import clsx from 'clsx';
import Typography from '@components/Typography';
import {ISliderControlProps} from './types';

export const Control: FC<ISliderControlProps> = ({position, value, disabled}) => {
  return (
    <div
      className={clsx(
        styles.control,
        disabled && styles['control-disabled']
      )}
      style={{ left: `${position}%` }}
    >
      <div className={styles['two-sticks']} />
      <div
        className={clsx(
          styles['control-tooltip'],
          disabled && styles['control-tooltip-disabled']
        )}
      >
        <Typography variant="Body2-Medium">{value}</Typography>
      </div>
    </div>
  )
}