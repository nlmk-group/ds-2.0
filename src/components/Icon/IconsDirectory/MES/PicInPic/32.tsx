import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPicInPic32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path stroke={htmlColor || 'currentColor'} strokeWidth="3" d="M3.5 3.5h25v25h-25z" />
      <path stroke={htmlColor || 'currentColor'} strokeWidth="3" d="M17.5 17.5h11v11h-11z" />
    </svg>
  );
};

export default IconPicInPic32;
