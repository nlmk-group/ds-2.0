import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFullScreenExitCloseFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M7 0H3v3H0v4h7V0Zm6 0H9v7h7V3h-3V0ZM7 9H0v4h3v3h4V9Zm9 0H9v7h4v-3h3V9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullScreenExitCloseFilled16;
