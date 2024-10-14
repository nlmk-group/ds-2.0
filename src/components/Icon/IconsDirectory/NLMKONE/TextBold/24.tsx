import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTextBold24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9a5 5 0 0 0 2.435-9.367A5 5 0 0 0 14 3H6Zm8 8a3 3 0 0 0 0-6H7v6h7Zm-7 8v-6h8a3 3 0 0 1 0 6H7Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTextBold24;
