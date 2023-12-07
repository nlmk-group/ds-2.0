import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChevronArrowUpFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M19.705 14.546 12.5 7.29l-7.205 7.256 2.15 2.164 5.055-5.092 5.056 5.092 2.149-2.164Z"
      />
    </svg>
  );
};

export default IconChevronArrowUpFilled24;
