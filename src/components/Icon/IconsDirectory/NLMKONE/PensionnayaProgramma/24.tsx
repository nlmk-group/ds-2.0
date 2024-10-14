import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPensionnayaProgramma24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4 8h3V6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v-2H4V8Zm7 0v3h2a1.5 1.5 0 0 0 0-3h-2Zm7.293 0a5.486 5.486 0 0 0-1.05-2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5v-2h5V8h-1.707ZM9 6h4a3.5 3.5 0 1 1 0 7h-2v1h3v2h-3v2H9v-2H7v-2h2v-1H7v-2h2V6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPensionnayaProgramma24;
