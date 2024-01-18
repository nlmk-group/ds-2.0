import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconWarningFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M1 28.9091H31L16 3L1 28.9091ZM17.3636 24.8182H14.6364V22.0909H17.3636V24.8182ZM17.3636 19.3636H14.6364V13.9091H17.3636V19.3636Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWarningFilled32;
