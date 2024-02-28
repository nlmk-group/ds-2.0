import React, { FC } from 'react';

import clsx from 'clsx';

import type { ICheckboxProps } from './types';

import styles from './Checkbox.module.scss';
import {
  IconDeleteMinusFilled16,
  IconDoneCheckFilled16
} from '..';

const Checkbox: FC<ICheckboxProps> = ({
  id,
  label,
  checked,
  disabled = false,
  color = 'default',
  multiple = false,
  onChange,
  value,
  className
}) => {
  const colorClassName = styles[color as keyof typeof styles];

  const Checkmark = () => (
    <div className={clsx(
      styles['checkbox-wrapper'],
      styles[`checkmark-${color}`],
      multiple ? styles['checkmark-multiple'] : styles['checkmark-single'])}>
      {multiple ? <IconDeleteMinusFilled16 /> :<IconDoneCheckFilled16 />}
    </div>
  )
  
  return (
    <div className={clsx(styles['label-wrapper'], className)}>
      <label htmlFor={id}>
        <div className={styles['input-wrapper']}>
          <input
            type="checkbox"
            id={id}
            checked={onChange ? checked : undefined}
            defaultChecked={!onChange ? checked : undefined}
            disabled={disabled}
            className={clsx(styles.checkbox, colorClassName)}
            onChange={onChange}
            value={value}
            aria-label={label ? undefined : 'checkbox'}
          />
          <div className={clsx(styles.checkmark, colorClassName)}>
            <Checkmark />
          </div>
          <span className={styles['hover-circle']}/>
        </div>
        {label && <span className={clsx(styles.text, disabled && styles.disabled)}>{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
