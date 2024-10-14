import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTekhnologicheskijUniversitet24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M22 1a20.39 20.39 0 0 0-3.37.277c-3.848.446-7.311 1.41-10.064 2.753C4.759 5.887 2 8.643 2 12c0 3.357 2.76 6.113 6.566 7.97 2.752 1.343 6.216 2.307 10.063 2.753A20.52 20.52 0 0 0 22 23v-2.327c-.549-.353-1.12-1.009-1.641-2.05C19.537 16.98 19 14.64 19 12s.537-4.98 1.359-6.624c.52-1.04 1.092-1.696 1.641-2.05V1ZM9.443 5.828C5.83 7.59 4 9.834 4 12c0 2.166 1.83 4.41 5.443 6.172l.224.108C8.013 16.53 7 14.377 7 12c0-2.377 1.013-4.531 2.667-6.28l-.224.108Zm9.127 13.69c.11.22.228.437.353.646C16.03 18.741 14 15.644 14 12s2.031-6.741 4.923-8.164a10 10 0 0 0-.353.646C17.582 6.457 17 9.117 17 12s.582 5.543 1.57 7.518Zm-3.764-.032C13.061 17.515 12 14.877 12 12s1.061-5.515 2.806-7.486c-.771.358-1.483.77-2.124 1.229C10.334 7.419 9 9.645 9 12c0 2.355 1.335 4.58 3.682 6.257.641.458 1.353.871 2.124 1.229Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTekhnologicheskijUniversitet24;
