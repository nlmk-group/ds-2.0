import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTemperatureFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M16.704 11.475a.75.75 0 0 0-1.5 0v8.097a2.939 2.939 0 0 0 .75 5.778 2.938 2.938 0 0 0 .75-5.778v-8.097Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.949 4.095A4.25 4.25 0 0 1 20.204 7.1v10.476a6.437 6.437 0 1 1-8.5 0V7.1a4.25 4.25 0 0 1 1.245-3.005Zm3.005.255a2.75 2.75 0 0 0-2.75 2.75v10.828a.75.75 0 0 1-.288.591 4.938 4.938 0 1 0 6.077 0 .75.75 0 0 1-.289-.59V7.1a2.75 2.75 0 0 0-2.75-2.75Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTemperatureFilled32;
