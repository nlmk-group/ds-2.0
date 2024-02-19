import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSaveOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M5.111 2h18.667L30 8.222V26.89A3.12 3.12 0 0 1 26.889 30H5.11A3.11 3.11 0 0 1 2 26.889V5.11A3.11 3.11 0 0 1 5.111 2Zm0 24.889H26.89V9.513l-4.402-4.402H5.11V26.89ZM16 16a4.66 4.66 0 0 0-4.667 4.667A4.66 4.66 0 0 0 16 25.333a4.66 4.66 0 0 0 4.667-4.666A4.66 4.66 0 0 0 16 16Zm4.667-9.333h-14v6.222h14V6.667Z"
      />
    </svg>
  );
};

export default IconSaveOutlined32;
