import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCompany24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M8 11a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V11Zm-2 1v9H3v-9h3Zm17 3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-7Zm-2 1v5h-3v-5h3Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M6.293 2.293A1 1 0 0 1 7 2h10a1 1 0 0 1 1 1v19a1 1 0 0 1-1 1H7v-2h9V4H8v12.5H6V3a1 1 0 0 1 .293-.707Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M10 9h4V7h-4v2Zm0 4h4v-2h-4v2Zm0 4h4v-2h-4v2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCompany24;
