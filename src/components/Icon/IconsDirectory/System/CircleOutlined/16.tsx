import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCircleOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M1 8c0-3.864 3.136-7 7-7s7 3.136 7 7-3.136 7-7 7-7-3.136-7-7Zm1.4 0c0 3.087 2.513 5.6 5.6 5.6 3.087 0 5.6-2.513 5.6-5.6 0-3.087-2.513-5.6-5.6-5.6A5.607 5.607 0 0 0 2.4 8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCircleOutlined16;
