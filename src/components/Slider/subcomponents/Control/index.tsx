import React, { FC } from 'react';

import Typography from '@components/Typography';
import clsx from 'clsx';

import { ISliderControlProps } from './types';

import styles from './Control.module.scss';

export const Control: FC<ISliderControlProps> = ({ position, value, disabled }) => {
  return (
    <div className={clsx(styles.control, disabled && styles['control-disabled'])} style={{ left: `${position}%` }}>
      <div className={styles['two-sticks']} />
      <div className={clsx(styles['control-tooltip'], disabled && styles['control-tooltip-disabled'])}>
        <Typography variant="Body2-Medium">{value}</Typography>
      </div>
    </div>
  );
};
