import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWhatShotFireOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M18.063 1s1.017 3.727 1.017 6.751c0 2.897-1.856 5.246-4.689 5.246-2.846 0-4.991-2.349-4.991-5.246l.041-.506C6.664 10.62 5 14.995 5 19.748 5 25.965 9.922 31 16 31s11-5.035 11-11.252C27 12.168 23.439 5.402 18.062 1Zm-2.654 17.567c-1.87.393-2.984 1.631-2.984 3.39a3.406 3.406 0 0 0 3.424 3.403c2.818 0 5.1-2.335 5.1-5.218a15.11 15.11 0 0 0-.632-4.388c-1.086 1.505-3.025 2.419-4.908 2.813ZM7.75 19.748c0 4.655 3.699 8.439 8.25 8.439s8.25-3.784 8.25-8.439c0-3.6-.907-7.074-2.599-10.169-.729 3.657-3.602 6.231-7.26 6.231a7.59 7.59 0 0 1-5.458-2.293A17.05 17.05 0 0 0 7.75 19.748Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWhatShotFireOutlined32;
