import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPrintOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.133 13.233h-2.1a.7.7 0 0 1-.7-.7v-7a.7.7 0 0 1 .7-.7h2.1v-2.8a.7.7 0 0 1 .7-.7h7a.7.7 0 0 1 .7.7v2.8h2.1a.7.7 0 0 1 .7.7v7a.7.7 0 0 1-.7.7h-2.1v1.4a.7.7 0 0 1-.7.7h-7a.7.7 0 0 1-.7-.7v-1.4Zm0-1.4v-.7a.7.7 0 0 1 .7-.7h7a.7.7 0 0 1 .7.7v.7h1.4v-5.6h-11.2v5.6h1.4Zm1.4-9.1v2.1h5.6v-2.1h-5.6Zm0 9.1v2.1h5.6v-2.1h-5.6Zm-2.1-4.9h2.1v1.4h-2.1v-1.4Z"
      />
    </svg>
  );
};

export default IconPrintOutlined16;
