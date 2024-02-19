import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelmetFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M26.594 18.769v1.995c1.406 0 1.406 0 1.406 2.159 0 1.073 0 1.593-.26 1.844-.262.253-.79.233-1.85.233H6.11c-1.054 0-1.581 0-1.845-.264C4 24.472 4 23.942 4 22.882c0-2.118 0-2.118 1.406-2.118V18.77c0-2.28.747-4.446 2.159-6.265.94-1.211 2.15-2.21 3.511-2.92v6.414h1.406v-7.02l.005-.002C12.54 7.877 13.465 7 14.594 7h2.812c1.129 0 2.053.877 2.107 1.976l.005.001v7.02h1.405V9.586a10.713 10.713 0 0 1 3.512 2.919 10.136 10.136 0 0 1 2.159 6.265ZM6.109 23.615h19.782c.387 0 .703 0 .703-.692 0-.693-.316-.693-.703-.693H6.109c-.388 0-.703 0-.703.693 0 .692.315.692.703.692Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelmetFilled32;
