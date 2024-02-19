import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDeleteBinOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M23.5 7H31v3h-3v19.5a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 4 29.5V10H1V7h7.5V2.5A1.5 1.5 0 0 1 10 1h12a1.5 1.5 0 0 1 1.5 1.5V7Zm1.5 3H7v18h18V10ZM11.5 4v3h9V4h-9Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M11.5 12.5v13H13v-13h-1.5Zm4 0v13H17v-13h-1.5Zm4 0v13H21v-13h-1.5Z" />
    </svg>
  );
};

export default IconDeleteBinOutlined32;
