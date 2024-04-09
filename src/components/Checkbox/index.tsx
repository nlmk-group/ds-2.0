import React, { FC } from 'react';

import Typography from '@components/Typography';
import clsx from 'clsx';

import type { ICheckboxProps } from './types';

import styles from './Checkbox.module.scss';

import { IconDeleteMinusFilled16, IconDoneCheckFilled16 } from '..';

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

  return (
    <label className={clsx(styles.label, className)} htmlFor={id} data-testid="checkbox">
      <input
        type="checkbox"
        id={id}
        checked={onChange ? checked : undefined}
        defaultChecked={!onChange ? checked : undefined}
        disabled={disabled}
        className={clsx(styles.checkbox, colorClassName)}
        onChange={onChange}
        value={value}
        aria-label={label || 'checkbox'}
      />
      <span className={clsx(styles.checkmark, colorClassName)}>
        {multiple ? (
          <IconDeleteMinusFilled16 htmlColor="var(--ac-checkbox-checked-bg)" />
        ) : (
          <IconDoneCheckFilled16 htmlColor="var(--ac-checkbox-checked-bg)" />
        )}
      </span>
      {label && (
        <Typography
          variant="Body1-Medium"
          style={{ color: disabled ? 'var(--text-grey-500)' : 'var(--text-grey-900)' }}
        >
          {label}
        </Typography>
      )}
    </label>
  );
};

export default Checkbox;
