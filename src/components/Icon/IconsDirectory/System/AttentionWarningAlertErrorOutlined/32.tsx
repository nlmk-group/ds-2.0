import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAttentionWarningAlertErrorOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15.986 2C8.258 2 2 8.272 2 16s6.258 14 13.986 14C23.728 30 30 23.728 30 16S23.728 2 15.986 2ZM17.4 17.4V9h-2.8v8.4h2.8Zm0 5.6v-2.8h-2.8V23h2.8ZM4.8 16c0 6.188 5.012 11.2 11.2 11.2S27.2 22.188 27.2 16 22.188 4.8 16 4.8 4.8 9.812 4.8 16Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAttentionWarningAlertErrorOutlined32;
