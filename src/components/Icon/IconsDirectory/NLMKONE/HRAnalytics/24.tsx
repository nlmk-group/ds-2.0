import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHRAnalytics24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M19 21V3H5v18h14Zm2-18a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3ZM9 10h6v2H9v-2Zm-2 4h10v2H7v-2Zm10 3H7v2h10v-2ZM12 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHRAnalytics24;
