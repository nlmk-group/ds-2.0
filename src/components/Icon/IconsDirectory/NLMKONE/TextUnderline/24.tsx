import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTextUnderline24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M7 4a1 1 0 0 0-2 0v6a7 7 0 1 0 14 0V4a1 1 0 1 0-2 0v6a5 5 0 1 1-10 0V4ZM4 19a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTextUnderline24;
