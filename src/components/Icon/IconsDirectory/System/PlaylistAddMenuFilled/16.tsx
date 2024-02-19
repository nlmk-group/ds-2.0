import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlaylistAddMenuFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3Zm6.225 1.27h-7.35v1.208h7.35V3.27Zm0 2.417h-7.35v1.209h7.35v-1.21Zm1.225 0h1.225v2.417h2.45v1.21h-2.45v2.417H10.45V9.313H8V8.104h2.45V5.687ZM1.875 9.313h4.9V8.104h-4.9v1.21Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPlaylistAddMenuFilled16;
