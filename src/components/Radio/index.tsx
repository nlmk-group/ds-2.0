import React, { FC } from 'react';

import { IRadioProps } from '@components/Radio/types';
import clsx from 'clsx';
import { Typography } from '@components/.'
import styles from './Radio.module.scss';
import { generateUUID } from '@components/declaration';

export const Radio: FC<IRadioProps> = ({
  checked,
  disabled,
  value,
  onChange,
  className,
  label = ''
}) => {
  const radioID = generateUUID();
  return (
    <div className={clsx(styles.root, className)}>
      <input
        type="radio"
        disabled={disabled}
        checked={onChange ? checked : undefined}
        defaultChecked={!onChange ? checked : undefined}
        value={value}
        onChange={onChange}
        name={radioID}
        id={radioID}
      />
      {label.length > 0 && (
        <label
          data-testid='radio-label'
          className={clsx(
            styles.label,
            disabled && styles['label-disabled']
          )}
          htmlFor={radioID}
        >
          <Typography variant='Body1-Medium'>
            {label}
          </Typography>
        </label>
      )}
    </div>
  );
};

export default Radio;
