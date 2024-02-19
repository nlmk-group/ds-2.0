import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFullScreenOpenFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M7 0H0v7h4V4h3V0Zm9 0H9v4h3v3h4V0ZM4 9H0v7h7v-4H4V9Zm12 0h-4v3H9v4h7V9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullScreenOpenFilled16;
