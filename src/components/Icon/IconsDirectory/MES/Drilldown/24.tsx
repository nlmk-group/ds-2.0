import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDrilldown24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9 12c0-1.3-.84-2.4-2-2.82V6.82C8.16 6.4 9 5.3 9 4a3 3 0 1 0-6 0c0 1.3.84 2.4 2 2.82v2.37C3.84 9.6 3 10.7 3 12s.84 2.4 2 2.82v2.36C3.84 17.6 3 18.7 3 20a3 3 0 0 0 6 0c0-1.3-.84-2.4-2-2.82v-2.36C8.16 14.4 9 13.3 9 12ZM6 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM11 3h10v2H11V3ZM11 11h10v2H11v-2ZM11 19h10v2H11v-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDrilldown24;
