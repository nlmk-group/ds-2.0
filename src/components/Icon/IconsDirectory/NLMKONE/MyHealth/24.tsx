import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMyHealth24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M1.084 12c0-6.07 4.93-11 11-11s11 4.93 11 11-4.93 11-11 11-11-4.93-11-11Zm2 0c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9-9 4.04-9 9Zm6-3V6h6v3h3v6h-3v3h-6v-3h-3V9h3Zm4 4h3v-2h-3V8h-2v3h-3v2h3v3h2v-3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMyHealth24;
