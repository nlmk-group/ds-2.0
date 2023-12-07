import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMultipleChoice24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M22 6.99993H13V8.99993H22V6.99993ZM22 14.9999H13V16.9999H22V14.9999ZM5.54 10.9999L2 7.45993L3.41 6.04993L5.53 8.16993L9.77 3.92993L11.18 5.33993L5.54 10.9999ZM5.54 18.9999L2 15.4599L3.41 14.0499L5.53 16.1699L9.77 11.9299L11.18 13.3399L5.54 18.9999Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMultipleChoice24;
