import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPauseFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M3 14h3.429V2H3v12ZM9.857 2v12h3.429V2H9.857Z" />
    </svg>
  );
};

export default IconPauseFilled16;
