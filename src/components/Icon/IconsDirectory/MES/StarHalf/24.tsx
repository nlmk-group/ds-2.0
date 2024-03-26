import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStarHalf24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12 13.749h2.318l2.79-2.417-3.669-.311L12 7.625l-1.44 3.396-3.668.311 2.79 2.417H12ZM5.82 21.5l1.64-7.03L2 9.74l7.19-.61L12 2.5l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03L12 17.77 5.82 21.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconStarHalf24;
