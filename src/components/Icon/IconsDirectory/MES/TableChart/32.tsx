import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTableChart32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M4 10.667v-4c0-.734.261-1.361.784-1.883A2.574 2.574 0 0 1 6.667 4h18.666c.734 0 1.362.261 1.884.784.523.523.784 1.15.783 1.883v4H4ZM6.667 28c-.734 0-1.361-.26-1.883-.783A2.573 2.573 0 0 1 4 25.333v-12h6V28H6.667ZM22 28V13.333h6v12a2.57 2.57 0 0 1-.783 1.884 2.561 2.561 0 0 1-1.884.783H22Zm-9.333 0V13.333h6.666V28h-6.666Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTableChart32;
