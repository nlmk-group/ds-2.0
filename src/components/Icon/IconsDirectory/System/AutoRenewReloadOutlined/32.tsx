import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAutoRenewReloadOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16 12.182V8.364c-4.137 0-7.5 3.423-7.5 7.636a7.58 7.58 0 0 0 .875 3.564L7.55 21.422A10.228 10.228 0 0 1 6 16c0-5.626 4.475-10.182 10-10.182V2l5 5.09-5 5.092Zm6.625.254 1.825-1.858A10.228 10.228 0 0 1 26 16c0 5.625-4.475 10.182-10 10.182V30l-5-5.091 5-5.09v3.817c4.137 0 7.5-3.423 7.5-7.636a7.77 7.77 0 0 0-.875-3.564Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAutoRenewReloadOutlined32;
