import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPicInPic16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path stroke={htmlColor || 'currentColor'} strokeWidth="1.5" d="M1.75 1.75h12.5v12.5H1.75z" />
      <path stroke={htmlColor || 'currentColor'} strokeWidth="1.5" d="M7.75 7.75h6.5v6.5h-6.5z" />
    </svg>
  );
};

export default IconPicInPic16;
