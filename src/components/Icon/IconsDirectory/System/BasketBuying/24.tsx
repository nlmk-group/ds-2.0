import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBasketBuying24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        d="M20.898 7.737a.561.561 0 0 0-.46-.239H8.442l-.908-3.132C7.176 3.133 6.33 3 5.983 3H3.561a.561.561 0 1 0 0 1.123h2.422c.076 0 .31 0 .47.55l3.124 11.483a.56.56 0 0 0 .54.41h7.632a.561.561 0 0 0 .528-.372l2.69-7.944a.561.561 0 0 0-.069-.513Zm-3.544 7.706h-6.81L8.755 8.62H19.64l-2.287 6.822Zm-1.114 2.26a1.413 1.413 0 1 0 0 2.826 1.413 1.413 0 0 0 0-2.826Zm-5.088 0a1.413 1.413 0 1 0 0 2.826 1.413 1.413 0 0 0 0-2.826Z"
      />
    </svg>
  );
};

export default IconBasketBuying24;
