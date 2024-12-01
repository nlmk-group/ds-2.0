import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconColorPaletteOutline16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M4.925 8.15a.975.975 0 1 0 0-1.95.975.975 0 0 0 0 1.95ZM7.85 4.575a.975.975 0 1 1-1.95 0 .975.975 0 0 1 1.95 0ZM10.125 5.55a.975.975 0 1 0 0-1.95.975.975 0 0 0 0 1.95ZM13.05 7.175a.975.975 0 1 1-1.95 0 .975.975 0 0 1 1.95 0Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 14C4.918 14 2 11.082 2 7.5S4.918 1 8.5 1 15 3.626 15 6.85c0 2.152-1.748 3.9-3.9 3.9H9.95a.322.322 0 0 0-.325.325c0 .078.032.15.084.215A1.625 1.625 0 0 1 8.5 14Zm0-11.7a5.207 5.207 0 0 0-5.2 5.2c0 2.867 2.333 5.2 5.2 5.2a.322.322 0 0 0 .325-.325.35.35 0 0 0-.091-.227A1.614 1.614 0 0 1 8.8 9.926a1.625 1.625 0 0 1 1.15-.476h1.15a2.6 2.6 0 0 0 2.6-2.6c0-2.509-2.333-4.55-5.2-4.55Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconColorPaletteOutline16;
