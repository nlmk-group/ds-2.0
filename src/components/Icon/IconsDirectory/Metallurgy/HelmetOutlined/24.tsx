import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelmetOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M19.945 15.526V14c0-1.743-.56-3.4-1.619-4.791a8.063 8.063 0 0 0-3.691-2.698A1.587 1.587 0 0 0 13.055 5h-2.11c-.846 0-1.54.67-1.58 1.51a8.063 8.063 0 0 0-3.691 2.7A7.848 7.848 0 0 0 4.054 14v1.527C3 15.526 3 15.526 3 17.146c0 1.618 0 1.618 1.582 1.618h14.836c1.582 0 1.582.063 1.582-1.588 0-1.65 0-1.65-1.055-1.65ZM5.11 14c0-1.91.813-3.696 2.145-4.971v1.794h1.054V8.198a6.85 6.85 0 0 1 1.055-.553v4.237h1.055V6.59c0-.293.236-.53.527-.53h2.11c.29 0 .527.237.527.53v5.292h1.055V7.644c.37.154.722.34 1.054.553v2.625h1.055V9.03A6.903 6.903 0 0 1 18.892 14v1.527l-13.782.062V14Zm14.309 3.706H4.582c-.29 0-.527 0-.527-.53s.236-.53.527-.53h14.836c.29 0 .527 0 .527.53s-.236.53-.527.53Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelmetOutlined24;
