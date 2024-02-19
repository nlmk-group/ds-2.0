import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterSortOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4v1.333h12V4H2Zm0 8h4v-1.333H2V12Zm8-3.333H2V7.333h8v1.334Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterSortOutlined16;
