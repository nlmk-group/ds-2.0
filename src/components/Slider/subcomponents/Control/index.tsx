import React, { FC } from 'react';

import Typography from '@components/Typography';
import clsx from 'clsx';

import { ISliderControlProps } from './types';

import styles from './Control.module.scss';

import { ESliderThumbValuePosition } from './enums';

export const Control: FC<ISliderControlProps> = ({
  position,
  value,
  disabled,
  hover,
  showValue = true,
  thumbValuePosition = ESliderThumbValuePosition.top
}) => {
  return (
    <div className={clsx(styles.control, disabled && styles['control-disabled'])} style={{ left: `${position}%` }}>
      <div className={styles['two-sticks']}></div>
      {showValue && (
        <div
          className={clsx(
            thumbValuePosition === 'top' && styles['control-tooltip'],
            thumbValuePosition === 'bottom' && styles['control-tooltip-bottom'],
            thumbValuePosition === 'none' && styles['control-tooltip-none'],
            disabled && styles['control-tooltip-disabled']
          )}
        >
          <Typography variant="Body2-Medium">{`${value}%`}</Typography>
        </div>
      )}
      <div className={clsx(!disabled && styles['hover-wrapper'])}>
        <div className={clsx(hover && !disabled && styles['point-hover'])} />
      </div>
    </div>
  );
};
