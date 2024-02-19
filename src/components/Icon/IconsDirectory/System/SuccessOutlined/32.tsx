import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSuccessOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14ZM16 27.2c6.186 0 11.2-5.014 11.2-11.2 0-6.186-5.014-11.2-11.2-11.2C9.814 4.8 4.8 9.814 4.8 16c0 6.186 5.014 11.2 11.2 11.2Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m23.418 11.637-9.951 10.1-4.885-4.955 1.994-1.966 2.89 2.932 7.957-8.076 1.995 1.965Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSuccessOutlined32;
