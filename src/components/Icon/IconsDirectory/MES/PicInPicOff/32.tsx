import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPicInPicOff32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13.667 2H30v28H2V2h11.667ZM5.11 14.444V26.89h19.58l-5.58-5.58v2.467H16V16h7.777v3.111h-2.466l5.578 5.578V5.111H14.444v9.333H5.111Zm0-9.333h6.222v6.222H5.111V5.111Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPicInPicOff32;
