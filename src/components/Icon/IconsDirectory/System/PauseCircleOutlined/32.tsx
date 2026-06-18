import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPauseCircleOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M14 22h-2.7V10H14v12Zm6.7 0H18V10h2.7v12Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16 2c7.728 0 14 6.272 14 14s-6.272 14-14 14S2 23.728 2 16 8.272 2 16 2Zm0 2.8C9.826 4.8 4.8 9.826 4.8 16c0 6.174 5.026 11.2 11.2 11.2 6.174 0 11.2-5.026 11.2-11.2 0-6.174-5.026-11.2-11.2-11.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPauseCircleOutlined32;
