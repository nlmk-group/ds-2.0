import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDragIndicatorDotsFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.8.5c-1.253 0-2.3.998-2.3 2.25S4.547 5 5.8 5s2.3-.998 2.3-2.25S7.053.5 5.8.5Zm5.4 0c-1.253 0-2.3.998-2.3 2.25S9.947 5 11.2 5s2.3-.998 2.3-2.25S12.453.5 11.2.5ZM5.8 5.75c-1.253 0-2.3.998-2.3 2.25s1.047 2.25 2.3 2.25S8.1 9.252 8.1 8 7.053 5.75 5.8 5.75Zm5.4 0c-1.253 0-2.3.998-2.3 2.25s1.047 2.25 2.3 2.25 2.3-.998 2.3-2.25-1.047-2.25-2.3-2.25ZM5.8 11c-1.253 0-2.3.998-2.3 2.25s1.047 2.25 2.3 2.25 2.3-.998 2.3-2.25S7.053 11 5.8 11Zm5.4 0c-1.253 0-2.3.998-2.3 2.25s1.047 2.25 2.3 2.25 2.3-.998 2.3-2.25S12.453 11 11.2 11Z"
      />
    </svg>
  );
};

export default IconDragIndicatorDotsFilled16;
