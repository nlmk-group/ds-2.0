import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovshInProgress32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m14.35 4.148-1.749-1.75L11.4 3.602l.901.9-7.96 8.012a2.85 2.85 0 0 0 .005 4.022l6.64 6.65a2.85 2.85 0 0 0 4.031 0L23 15.203l.813.813c.216.216.337.508.337.813v10.855h-1.8V20.5h-1.7v7.183H4v1.7h24v-1.7h-2.15V16.828c0-.755-.3-1.48-.835-2.015L20.601 10.4 19.4 11.6l2.399 2.4-7.984 7.983a1.15 1.15 0 0 1-1.627-.001l-6.639-6.649a1.15 1.15 0 0 1-.002-1.623l7.104-7.15v5.087a2.5 2.5 0 1 0 1.7 0v-7.5Z"
      />
    </svg>
  );
};

export default IconKovshInProgress32;
