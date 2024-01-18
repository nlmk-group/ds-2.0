import React, { FC } from 'react';

import { shifts } from '@components/DatePicker/helpers';
import { ShiftSelectorProps } from '@components/DatePicker/subcomponents/ShiftSelector/types';
import clsx from 'clsx';

import styles from './ShiftSelector.module.scss';

export const ShiftSelector: FC<ShiftSelectorProps> = ({ value, shiftLength = 2, onChange, disabled = false }) => {
  const handleClick = (shift: number) => {
    if (!disabled) {
      onChange(shift);
    }
  };
  return (
    <div className={styles.root}>
      {shifts[shiftLength].map(shift => (
        <div
          key={shift}
          className={clsx(styles.shift, {
            [styles.disabled]: disabled,
            [styles.selected]: value === shift && !disabled,
            [styles.selectedDisabled]: value === shift && disabled
          })}
          onClick={() => handleClick(shift)}
        >
          {shift}
        </div>
      ))}
    </div>
  );
};

export default ShiftSelector;
