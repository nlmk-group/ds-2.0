import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMnemoOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 5h24v7.2h-2.4v8.4H28v7.2h-7.2v-7.2h2.4v-8.4H8.8v8.4h2.4v7.2H4v-7.2h2.4v-8.4H4V5Zm21.6 2.4v2.4H6.4V7.4h19.2Zm-19.2 18V23h2.4v2.4H6.4ZM23.2 23v2.4h2.4V23h-2.4Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M19.6 14.6h-7.2v7.2h7.2v-7.2Zm-4.8 4.8V17h2.4v2.4h-2.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMnemoOutlined32;
