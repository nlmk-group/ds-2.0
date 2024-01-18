import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconErrorOutline16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.326 1.333A6.663 6.663 0 0 0 1.666 8c0 3.68 2.98 6.667 6.66 6.667A6.67 6.67 0 0 0 15 8a6.67 6.67 0 0 0-6.674-6.667ZM9 8.666v-4H7.666v4H9Zm0 2.667V9.999H7.666v1.334H9ZM3 7.999a5.332 5.332 0 0 0 5.333 5.334 5.332 5.332 0 0 0 5.333-5.334 5.332 5.332 0 0 0-5.333-5.333A5.332 5.332 0 0 0 3 8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconErrorOutline16;
