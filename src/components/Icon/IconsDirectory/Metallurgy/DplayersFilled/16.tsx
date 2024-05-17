import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDplayersFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10 1a1 1 0 0 1 1 1v1.5l2 7h1a1 1 0 0 1 0 2h-1l-.749 1.871a1 1 0 0 1-.928.629H4.677a1 1 0 0 1-.928-.629L3 12.5H2a1 1 0 0 1 0-2h1l2-7V2a1 1 0 0 1 1-1h4ZM9 4.531a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4.25a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.281ZM6 8.063a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V7.75a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.313Zm0 3.974a.5.5 0 0 1-.5-.5v-.287a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v.287a.5.5 0 0 1-.5.5H6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDplayersFilled16;
