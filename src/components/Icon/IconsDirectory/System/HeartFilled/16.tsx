import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

export const IconHeartFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.009 14.5H7.99a.334.334 0 0 1-.195-.063c-.187-.134-4.606-3.312-6.234-5.993l-.007-.01A3.933 3.933 0 0 1 1 6.414C1 4.257 2.742 2.5 4.883 2.5c1.24 0 2.39.594 3.117 1.58a3.871 3.871 0 0 1 3.117-1.58C13.258 2.5 15 4.256 15 6.415a3.932 3.932 0 0 1-.562 2.03c-1.628 2.68-6.047 5.858-6.234 5.992a.332.332 0 0 1-.195.063Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHeartFilled16;
