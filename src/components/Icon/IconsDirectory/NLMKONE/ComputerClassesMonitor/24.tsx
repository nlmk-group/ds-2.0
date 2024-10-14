import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconComputerClassesMonitor24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M5 15c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4.41c.88.39 1.57 1 2 1.74V5c0-1.66-1.34-3-3-3H5C3.34 2 2 3.34 2 5v9c0 1.66 1.34 3 3 3h3v2h3.12c.33-1.58 1.04-3.2 2.38-4H5Zm3.67-7.09L7.33 9.4l3.26 2.95 5.08-4.61-1.34-1.48-3.74 3.39-1.92-1.74ZM21 14a3 3 0 0 1-1.02 2.25c1.76.61 3.02 2.28 3.02 4.25V22c0 .55-.45 1-1 1h-8c-.55 0-1-.45-1-1v-1.5c0-1.97 1.26-3.64 3.02-4.25A2.966 2.966 0 0 1 15 14c0-1.66 1.34-3 3-3s3 1.34 3 3Zm-2 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1Zm-4 6.5v.5h6v-.5a2.5 2.5 0 0 0-2.5-2.5h-1a2.5 2.5 0 0 0-2.5 2.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconComputerClassesMonitor24;
