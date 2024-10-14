import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTextItalic24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M15.032 3H19a1 1 0 1 1 0 2h-3.307l-5.25 14H14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h3.307l5.25-14H10a1 1 0 0 1 0-2h5.032Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTextItalic24;
