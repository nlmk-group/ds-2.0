import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAutoRenewSystemOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.818 8H9.91l2.545 2.5L15 8h-1.91c0-2.763-2.277-5-5.09-5-1 0-1.928.288-2.71.775l.928.913A3.79 3.79 0 0 1 8 4.25c2.106 0 3.818 1.681 3.818 3.75Zm-1.108 4.225-.928-.912A3.885 3.885 0 0 1 8 11.75c-2.106 0-3.818-1.681-3.818-3.75H6.09L3.545 5.5 1 8h1.91c0 2.762 2.277 5 5.09 5 1 0 1.928-.287 2.71-.775Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.134 8.938h1.59L9.078 10h.792l-1.5-4.2h-.84L6.03 10h.756l.348-1.062Zm1.38-.636h-1.17l.306-.918.282-.864.582 1.782Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAutoRenewSystemOutlined16;
