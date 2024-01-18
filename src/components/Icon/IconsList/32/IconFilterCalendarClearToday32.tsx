import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterCalendarClearToday32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.4 5.4H25.6C26.92 5.4 28 6.48 28 7.8V27C28 28.32 26.92 29.4 25.6 29.4H6.4C5.08 29.4 4 28.32 4 27V7.8C4 6.48 5.08 5.4 6.4 5.4H7.6V3H10V5.4H22V3H24.4V5.4ZM6.39983 27H25.5998V11.4H6.39983V27Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterCalendarClearToday32;
