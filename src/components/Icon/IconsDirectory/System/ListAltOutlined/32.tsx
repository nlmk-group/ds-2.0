import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListAltOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M28.6 2H3.4C2.622 2 2 2.622 2 3.4v25.2c0 .622.622 1.4 1.4 1.4h25.2c.622 0 1.4-.778 1.4-1.4V3.4c0-.778-.778-1.4-1.4-1.4ZM11.333 8.222h-3.11v3.111h3.11v-3.11Zm12.445 0h-9.334v3.111h9.334v-3.11Zm0 6.222h-9.334v3.112h9.334v-3.112Zm-9.334 6.223h9.334v3.11h-9.334v-3.11Zm-6.222-6.223h3.111v3.112h-3.11v-3.112Zm3.111 6.223h-3.11v3.11h3.11v-3.11Zm-6.222 6.222H26.89V5.11H5.11v21.78Z"
      />
    </svg>
  );
};

export default IconListAltOutlined32;
