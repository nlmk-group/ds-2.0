import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBlitzTests24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5.55 19 2 15.45l1.4-1.4 2.125 2.125 4.25-4.25 1.4 1.425L5.55 19Zm0-8L2 7.45l1.4-1.4 2.125 2.125 4.25-4.25 1.4 1.425L5.55 11ZM13 17v-2h9v2h-9Zm0-8V7h9v2h-9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBlitzTests24;
