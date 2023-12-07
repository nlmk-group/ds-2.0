import React, { FC } from 'react';

import { IRadioProps } from '@components/Radio/types';
import clsx from 'clsx';

import styles from './Radio.module.scss';

export const Radio: FC<IRadioProps> = ({
  checked,
  disabled,
  value,
  onChange,
  className
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      <input
        type="radio"
        disabled={disabled}
        checked={onChange ? checked : undefined}
        defaultChecked={!onChange ? checked : undefined}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Radio;
