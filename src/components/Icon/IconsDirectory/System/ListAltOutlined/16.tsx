import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListAltOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M14.3 1H1.7c-.389 0-.7.311-.7.7v12.6c0 .311.311.7.7.7h12.6c.311 0 .7-.389.7-.7V1.7c0-.389-.389-.7-.7-.7ZM5.667 4.111H4.11v1.556h1.556V4.11Zm6.222 0H7.222v1.556h4.667V4.11Zm0 3.111H7.222v1.556h4.667V7.222Zm-4.667 3.111h4.667v1.556H7.222v-1.556Zm-3.11-3.11h1.555v1.555H4.11V7.222Zm1.555 3.11H4.11v1.556h1.556v-1.556Zm-3.111 3.111h10.888V2.556H2.556v10.888Z"
      />
    </svg>
  );
};

export default IconListAltOutlined16;
