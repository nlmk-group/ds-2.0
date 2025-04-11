import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconClaimScan24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.388 17.522c0-1.925 1.533-3.488 3.427-3.488 1.898 0 3.435 1.563 3.435 3.488s-1.537 3.487-3.435 3.487c-1.894 0-3.427-1.562-3.427-3.487Zm3.088-1.744h.686v2.092h-.686v-2.092Zm0 2.79h.686v.697h-.686v-.697Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.297 7.897c.979-1.983 2.52-3.465 4.231-4.503l-.59-.971c-2.665 1.618-5.247 4.434-5.761 8.71a7.88 7.88 0 0 0 9.952 10.04 4.563 4.563 0 0 1-.927-.916 6.744 6.744 0 1 1 5.156-7.001c.415.15.8.357 1.149.614l.002-.172A7.88 7.88 0 0 0 6.297 7.897Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.146 13a5.561 5.561 0 1 0-4.55 6.175 4.503 4.503 0 0 1-.279-1.106 4.425 4.425 0 1 1 3.691-5.01 4.558 4.558 0 0 1 1.138-.06Z"
      />
    </svg>
  );
};

export default IconClaimScan24;
