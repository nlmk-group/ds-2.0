import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowLeftUpOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.965 4.287a1 1 0 0 1 1.403 0l6.667 6.563a1 1 0 0 1-1.403 1.425l-4.965-4.887V13.4c0 2.222 0 3.827.105 5.09.104 1.25.305 2.074.655 2.75a6.939 6.939 0 0 0 3.056 3.008c.693.347 1.536.546 2.81.648 1.284.103 2.917.104 5.174.104H28a1 1 0 1 1 0 2h-4.578c-2.203 0-3.916 0-5.29-.11-1.395-.113-2.527-.343-3.546-.855a8.94 8.94 0 0 1-3.936-3.875c-.521-1.008-.757-2.129-.87-3.505-.113-1.355-.113-3.043-.113-5.21V7.389l-4.965 4.887a1 1 0 0 1-1.404-1.425l6.667-6.563Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowLeftUpOutlined32;
