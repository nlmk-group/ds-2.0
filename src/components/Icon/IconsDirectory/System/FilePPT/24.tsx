import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilePPT24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M22 7v14c0 1.1-.9 2-2 2H3.99C2.89 23 2 22.1 2 21l.01-18c0-1.1.89-2 1.99-2h12l6 6ZM4 21h16V8h-3.5A1.5 1.5 0 0 1 15 6.5V3H4v18Zm7.024-11.904a5 5 0 1 1 1.949 9.809 5 5 0 0 1-1.949-9.81Zm.262 1.406a3.57 3.57 0 0 0-2.586 2.13 3.573 3.573 0 0 0 6.27 3.352 3.57 3.57 0 0 0 .527-1.27H12a.714.714 0 0 1-.714-.714v-3.498Zm1.428 2.784h2.785a3.572 3.572 0 0 0-2.785-2.785v2.785Z"
      />
    </svg>
  );
};

export default IconFilePPT24;
