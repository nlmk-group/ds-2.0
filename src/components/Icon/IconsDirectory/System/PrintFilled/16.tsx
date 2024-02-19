import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPrintFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.833 11.833h7v3.5h-7v-3.5Zm8.4 2.1v-3.5h-9.8v3.5h-1.4a.7.7 0 0 1-.7-.7v-7a.7.7 0 0 1 .7-.7h12.6a.7.7 0 0 1 .7.7v7a.7.7 0 0 1-.7.7h-1.4Zm-9.8-7v1.4h2.1v-1.4h-2.1Zm1.4-5.6h7a.7.7 0 0 1 .7.7v2.1h-8.4v-2.1a.7.7 0 0 1 .7-.7Z"
      />
    </svg>
  );
};

export default IconPrintFilled16;
