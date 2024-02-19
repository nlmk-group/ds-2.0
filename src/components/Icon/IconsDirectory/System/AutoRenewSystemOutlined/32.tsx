import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAutoRenewSystemOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M23.636 16h-3.818l5.091 5 5.09-5h-3.817c0-5.525-4.557-10-10.182-10a10.23 10.23 0 0 0-5.422 1.55l1.858 1.825A7.58 7.58 0 0 1 16 8.5c4.213 0 7.636 3.363 7.636 7.5Zm-2.214 8.45-1.858-1.825A7.77 7.77 0 0 1 16 23.5c-4.213 0-7.636-3.363-7.636-7.5h3.818L7.09 11 2 16h3.818c0 5.525 4.556 10 10.182 10a10.23 10.23 0 0 0 5.422-1.55Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.84 17.23h2.65l.59 1.77h1.32l-2.5-7h-1.4L13 19h1.26l.58-1.77Zm2.3-1.06h-1.95l.51-1.53.47-1.44.97 2.97Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAutoRenewSystemOutlined32;
