import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconViewFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M30.267 30.267a1.332 1.332 0 0 1-1.886 0l-2.923-2.923a6.667 6.667 0 1 1 1.886-1.886l2.923 2.923a1.333 1.333 0 0 1 0 1.886ZM24.61 18.953a4 4 0 1 0-5.656 5.657 4 4 0 0 0 5.655-5.657Zm-6.761-5.62H8V16h6.464a9.146 9.146 0 0 0-1.46 2.667H8v2.666h4.508c-.003.111-.008.222-.008.334a9.12 9.12 0 0 0 1.485 5H5.333A2.667 2.667 0 0 1 2.667 24V5.333a2.667 2.667 0 0 1 2.666-2.666H24a2.667 2.667 0 0 1 2.667 2.666v8.652a9.16 9.16 0 0 0-8.818-.652ZM21.333 8H8v2.667h13.333V8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconViewFilled32;
