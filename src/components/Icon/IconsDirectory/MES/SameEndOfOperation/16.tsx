import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSameEndOfOperation16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M9.389 1 12.5 4 9.389 7V4.75H2.004v-1.5h7.385V1Z" fill={htmlColor || 'currentColor'} />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.505 7V1h1.5v6h-1.5Z" fill={htmlColor || 'currentColor'} />
      <path d="m9.389 9 3.111 3-3.111 3v-2.25H2.004v-1.5H9.39V9Z" fill={htmlColor || 'currentColor'} />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.505 15V9h1.5v6h-1.5Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconSameEndOfOperation16;
