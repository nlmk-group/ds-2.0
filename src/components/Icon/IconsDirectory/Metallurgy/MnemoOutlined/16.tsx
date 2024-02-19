import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMnemoOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 2h12v3.6h-1.2v4.2H14v3.6h-3.6V9.8h1.2V5.6H4.4v4.2h1.2v3.6H2V9.8h1.2V5.6H2V2Zm10.8 1.2v1.2H3.2V3.2h9.6Zm-9.6 9V11h1.2v1.2H3.2Zm8.4-1.2v1.2h1.2V11h-1.2Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9.8 6.8H6.2v3.6h3.6V6.8ZM7.4 9.2V8h1.2v1.2H7.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMnemoOutlined16;
