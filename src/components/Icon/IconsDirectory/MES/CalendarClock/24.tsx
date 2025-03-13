import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarClock24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1 22.45V2.65h3.3V.45h2.2v2.2h8.8V.45h2.2v2.2h3.3v8.442a7.607 7.607 0 0 0-2.2-.66V9.25H3.2v11h6.93c.128.403.28.788.454 1.155.175.367.38.715.619 1.045H1Zm16.5 1.1c-1.522 0-2.819-.536-3.89-1.61-1.073-1.072-1.61-2.37-1.61-3.89s.536-2.818 1.61-3.89c1.073-1.074 2.37-1.61 3.89-1.61s2.817.536 3.892 1.61c1.074 1.072 1.61 2.37 1.608 3.89-.002 1.52-.539 2.818-1.61 3.892-1.07 1.073-2.367 1.61-3.89 1.608Zm1.843-2.887.77-.77-2.063-2.063v-3.08h-1.1v3.52l2.393 2.393Z"
      />
    </svg>
  );
};

export default IconCalendarClock24;
