import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListAltFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M1.7 1h12.6c.311 0 .7.311.7.7v12.6c0 .311-.389.7-.7.7H1.7c-.389 0-.7-.389-.7-.7V1.7c0-.389.311-.7.7-.7Zm2.411 3.111h1.556v1.556H4.11V4.11Zm3.111 0h4.667v1.556H7.222V4.11Zm0 3.111h4.667v1.556H7.222V7.222Zm4.667 3.111H7.222v1.556h4.667v-1.556Zm-6.222-3.11H4.11v1.555h1.556V7.222Zm-1.556 3.11h1.556v1.556H4.11v-1.556Z"
      />
    </svg>
  );
};

export default IconListAltFilled16;
