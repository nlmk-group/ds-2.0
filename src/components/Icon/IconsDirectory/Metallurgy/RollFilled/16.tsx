import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRollFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.162 8a2.838 2.838 0 1 1 5.676 0 2.838 2.838 0 0 1-5.676 0ZM9.46 8a1.46 1.46 0 1 1-2.918 0A1.46 1.46 0 0 1 9.46 8Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm0 2.513a3.486 3.486 0 1 0 0 6.973 3.486 3.486 0 0 0 0-6.973Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconRollFilled16;
