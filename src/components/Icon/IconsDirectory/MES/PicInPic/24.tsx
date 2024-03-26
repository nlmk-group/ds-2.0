import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPicInPic24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path stroke={htmlColor || 'currentColor'} strokeWidth="2" d="M4 4h16v16H4z" />
      <path stroke={htmlColor || 'currentColor'} strokeWidth="2" d="M12 12h8v8h-8z" />
    </svg>
  );
};

export default IconPicInPic24;
