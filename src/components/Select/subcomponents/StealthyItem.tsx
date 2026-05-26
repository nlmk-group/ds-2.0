import React, { FC } from 'react';

import Typography from '@components/Typography';
import clsx from 'clsx';

import styles from '../Select.module.scss';

import { getLabel } from '../helpers';
import { IStealthyItem } from '../types';

const StealthyItem: FC<IStealthyItem> = ({ option, size, displayValue, multiple, label, activeSelectedValue }) => {
  const selectOneOption = 'Select option';
  const selectMultiOption = `${selectOneOption}s`;
  const masterLabel = multiple ? displayValue || label || selectMultiOption : option?.label || label || selectOneOption;

  return (
    <div
      className={clsx(
        styles['inconspicuous-item'],
        styles[`inconspicuous-${size}`],
        activeSelectedValue && styles['inconspicuous-active']
      )}
      title={getLabel(masterLabel)}
    >
      {!multiple && option?.iconLeft && (
        <div className={styles['inconspicuous-left-wrapper']}>
          <div className={styles['inconspicuous-item-icon']} data-testid="inconspicuous-left-icon">
            {option?.iconLeft}
          </div>
        </div>
      )}
      <div className={styles['text-container']}>
        <div className={styles.content}>
          <Typography variant="Body1-Medium" className={clsx(styles.label, styles['multiple-label'])}>
            {masterLabel}
          </Typography>
        </div>
      </div>
      {!multiple && option?.iconRight && (
        <div className={styles['inconspicuous-right-wrapper']}>
          <div className={styles['inconspicuous-item-icon']} data-testid="inconspicuous-right-icon">
            {option?.iconRight}
          </div>
        </div>
      )}
    </div>
  );
};

export default StealthyItem;
