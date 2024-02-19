import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPictureInPictureOn32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M26.5 5.5H18v-3h11.5v27h-27V18h3v8.5h11v-10h10v-11Zm0 21h-7v-7h7v7Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M15.56 15.56V4h-3v6.44L5 2.878 2.879 5l7.56 7.56H4v3h11.56Z" />
    </svg>
  );
};

export default IconPictureInPictureOn32;
