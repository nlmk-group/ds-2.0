import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconShare24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M18.085 14a4 4 0 0 0-3.08 1.48l-5.1-2.35a3.64 3.64 0 0 0 0-2.26l5.1-2.35a4 4 0 1 0-.85-1.81l-5.28 2.43a4 4 0 1 0 0 5.72l5.28 2.43a4.165 4.165 0 0 0-.07.71 4 4 0 1 0 4-4Zm0-10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-12 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm12 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconShare24;
