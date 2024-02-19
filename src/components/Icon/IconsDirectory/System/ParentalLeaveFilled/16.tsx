import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconParentalLeaveFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.084 2.633h2.6a.65.65 0 0 1 .65.65v10.4a.65.65 0 0 1-.65.65H8.5v-1.3h4.534v-7.8h-10.4V6.5h-1.3V3.283a.65.65 0 0 1 .65-.65h2.6v-1.3h1.3v1.3h3.9v-1.3h1.3v1.3Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.734 7.183v1.3h-1.3v-1.3h1.3Zm0 2.6v1.3h-1.3v-1.3h1.3ZM5.34 6.22l-.007 2.395H8c-.025-1.58-.883-2.504-2.424-2.614a.222.222 0 0 0-.236.22Zm-1.007 7.3a.99.99 0 0 1-1 .98.99.99 0 0 1-1-.98.99.99 0 0 1 1-.981.99.99 0 0 1 1 .98Zm2.334.98a.99.99 0 0 0 1-.98.99.99 0 0 0-1-.981.99.99 0 0 0-1 .98.99.99 0 0 0 1 .981Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="m8 9.433-.313 1.555a.714.714 0 0 1-.7.57H3.108a.715.715 0 0 1-.706-.608l-.388-2.698h-.538A.474.474 0 0 1 1 7.78c0-.26.213-.472.476-.472h.95c.237 0 .438.172.471.405l.248 1.72H8Z"
      />
    </svg>
  );
};

export default IconParentalLeaveFilled16;
