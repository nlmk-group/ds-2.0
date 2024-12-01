import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSameEndOfOperation32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M18.769 2l6.222 6-6.222 6V9.5H3.999v-3h14.77V2Z" fill={htmlColor || 'currentColor'} />
      <path fillRule="evenodd" clipRule="evenodd" d="M25 14V2h3v12h-3Z" fill={htmlColor || 'currentColor'} />
      <path d="M18.769 18l6.222 6-6.222 6v-4.5H3.999v-3h14.77V18Z" fill={htmlColor || 'currentColor'} />
      <path fillRule="evenodd" clipRule="evenodd" d="M25 30V18h3v12h-3Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconSameEndOfOperation32;
