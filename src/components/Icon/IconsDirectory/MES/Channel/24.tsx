import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChannel24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M20 16a3 3 0 0 0-1.73.56L13 13V7.82a3 3 0 1 0-2 0V13l-5.27 3.56A3 3 0 0 0 4 16a3 3 0 1 0 3 3 3 3 0 0 0-.12-.8L12 14.765l5.12 3.435A3 3 0 1 0 20 16ZM4 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8-16a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 10.765V13.5v1.265ZM20 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      />
    </svg>
  );
};

export default IconChannel24;
