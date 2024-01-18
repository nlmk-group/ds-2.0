import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconWarningFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M1 14.0909H15L8 2L1 14.0909ZM8.63636 12.1818H7.36364V10.9091H8.63636V12.1818ZM8.63636 9.63636H7.36364V7.09091H8.63636V9.63636Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWarningFilled16;
