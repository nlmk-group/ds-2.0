import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRedoArrowFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M24.25 13.8c-2.442-2.147-5.61-3.467-9.106-3.467-6.137 0-11.323 4.04-13.144 9.627L5.114 21c1.386-4.253 5.345-7.333 10.03-7.333 2.573 0 4.922.96 6.756 2.506L17.123 21H29V9l-4.75 4.8Z"
      />
    </svg>
  );
};

export default IconRedoArrowFilled32;
