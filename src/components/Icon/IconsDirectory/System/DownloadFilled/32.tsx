import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDownloadFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M25.333 16v9.333H6.667V16H4v9.333C4 26.8 5.2 28 6.667 28h18.666C26.8 28 28 26.8 28 25.333V16h-2.667Zm-8-.667h5.334L16 22l-6.667-6.667h5.334V4h2.666v11.333Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDownloadFilled32;
