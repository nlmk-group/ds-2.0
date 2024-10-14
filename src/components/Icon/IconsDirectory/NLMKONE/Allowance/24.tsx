import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAllowance24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M21 5H3v14h18V5ZM3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm7 6h9V7h-9v2ZM8 9H5V7h3v2Zm2 4h9v-2h-9v2Zm-2 0H5v-2h3v2Zm2 2h9v2h-9v-2Zm-2 2H5v-2h3v2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAllowance24;
