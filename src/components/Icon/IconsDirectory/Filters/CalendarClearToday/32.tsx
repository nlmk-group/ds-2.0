import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarClearToday32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.4 5.4h1.2c1.32 0 2.4 1.08 2.4 2.4V27c0 1.32-1.08 2.4-2.4 2.4H6.4C5.08 29.4 4 28.32 4 27V7.8c0-1.32 1.08-2.4 2.4-2.4h1.2V3H10v2.4h12V3h2.4v2.4ZM6.4 27h19.2V11.4H6.4V27Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCalendarClearToday32;
