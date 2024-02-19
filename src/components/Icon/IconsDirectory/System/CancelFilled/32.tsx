import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCancelFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 16C2 8.258 8.258 2 16 2s14 6.258 14 14-6.258 14-14 14S2 23.742 2 16Zm19.026 7L23 21.026 17.974 16 23 10.974 21.026 9 16 14.026 10.974 9 9 10.974 14.026 16 9 21.026 10.974 23 16 17.974 21.026 23Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCancelFilled32;
