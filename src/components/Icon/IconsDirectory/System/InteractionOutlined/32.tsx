import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInteractionOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M18.25 4h-9C8.012 4 7 5.08 7 6.4v19.2C7 26.92 8.001 28 9.239 28H22.75c1.238 0 2.25-1.08 2.25-2.4V11.2L18.25 4Zm2.25 12h-9v2.4h9V16Zm0 4.8h-9v2.4h9v-2.4ZM9.25 25.6h13.5V12.4h-5.625v-6H9.25v19.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInteractionOutlined32;
