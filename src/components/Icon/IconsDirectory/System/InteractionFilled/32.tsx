import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInteractionFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.5 4H9.25C8.012 4 7 5.08 7 6.4v19.2C7 26.92 8.001 28 9.239 28H22.75c1.238 0 2.25-1.08 2.25-2.4V13h-8.5V4Zm-5 12h9v2.4h-9V16Zm0 4.8h9v2.4h-9v-2.4Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M24.813 11 18.5 4.267V11h6.313Z" />
    </svg>
  );
};

export default IconInteractionFilled32;
