import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartSolar16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.653 9.605 9.217 8.118v-2.88a3.341 3.341 0 0 1 2.436 4.367Zm.367 1.751 1.676 1.023A6.497 6.497 0 0 1 8.484 15C5.102 15 2.328 12.416 2 9.136h1.97a4.561 4.561 0 0 0 4.514 3.91 4.49 4.49 0 0 0 3.536-1.689Zm-1.03-.63L8.381 9.136H5.221a3.34 3.34 0 0 0 5.768 1.592ZM5.226 7.833h2.687v-2.62a3.343 3.343 0 0 0-2.687 2.62Zm3.99-5.823A6.52 6.52 0 0 1 15 8.483c0 .945-.209 1.845-.573 2.652l-1.708-.996a4.382 4.382 0 0 0 .326-1.656 4.558 4.558 0 0 0-3.828-4.496V2.009ZM3.969 7.832a4.562 4.562 0 0 1 3.863-3.858V2A6.51 6.51 0 0 0 2 7.832h1.969Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartSolar16;
