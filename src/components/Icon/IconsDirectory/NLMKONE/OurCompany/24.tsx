import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOurCompany24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M17 2a1 1 0 0 0-.994.89L15.105 11H12V9.5a1 1 0 0 0-1.336-.942l-7 2.5A1 1 0 0 0 3 12v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9a.992.992 0 0 0-.006-.11l-1-9A1 1 0 0 0 19 2h-2Zm-.006 10.11L17.895 4h.21L19 12.055V20H5v-7.295l5-1.786V12a1 1 0 0 0 1 1h5a1 1 0 0 0 .994-.89ZM7 19v-4h2v4H7Zm4-4v4h2v-4h-2Zm4 0v4h2v-4h-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconOurCompany24;
