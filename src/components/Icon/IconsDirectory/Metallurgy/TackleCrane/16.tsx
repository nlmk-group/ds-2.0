import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTackleCrane16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.85 4.65V1h1.3v2.425a2.839 2.839 0 0 1 1.21 4.91l1.562 3.515H15.5v1.3h-14v-1.3h3.578L6.64 8.335a2.84 2.84 0 0 1-.98-2.146h1.3A1.54 1.54 0 1 0 8.5 4.65h-.65Zm2.65 7.2L9.206 8.94a2.844 2.844 0 0 1-1.412 0L6.5 11.85h4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTackleCrane16;
