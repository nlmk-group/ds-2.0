import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKedo24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M20 7h-7.37c.44.55.71 1.24.71 2H20V7Zm0 4h-6.87c.76.49 1.38 1.18 1.76 2H20v-2Zm0 4h-4.66v2H20v-2Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M2 5h20v14H2V5ZM0 5c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5Zm8.5 1c-1.66 0-3 1.34-3 3 0 .9.39 1.7 1.02 2.25A4.493 4.493 0 0 0 3.5 15.5V17h10v-1.5c0-1.97-1.26-3.64-3.02-4.25.63-.55 1.02-1.35 1.02-2.25 0-1.66-1.34-3-3-3Zm-1 3c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1ZM9 13a2.5 2.5 0 0 1 2.45 2h-5.9A2.5 2.5 0 0 1 8 13h1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKedo24;
