import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatListOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.333 2.353H14v1.412H5.333V2.353ZM2 2h2v2.118H2V2Zm0 4.941h2V9.06H2V6.94Zm0 4.941h2V14H2v-2.118Zm3.333-4.588H14v1.412H5.333V7.294Zm0 4.941H14v1.412H5.333v-1.412Z"
      />
    </svg>
  );
};

export default IconFormatListOutlined16;
