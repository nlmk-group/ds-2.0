import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInfoOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15.986 2C8.258 2 2 8.272 2 16s6.258 14 13.986 14C23.728 30 30 23.728 30 16S23.728 2 15.986 2Zm1.414 9.8h-2.8V9h2.8v2.8Zm0 11.198h-2.8v-8.4h2.8v8.4Zm-12.6-7c0 6.188 5.012 11.2 11.2 11.2s11.2-5.012 11.2-11.2c0-6.187-5.012-11.2-11.2-11.2S4.8 9.812 4.8 15.999Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInfoOutlined32;
