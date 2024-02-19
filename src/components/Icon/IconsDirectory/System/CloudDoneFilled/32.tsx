import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloudDoneFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6c4.55 0 8.337 3.238 9.188 7.55 3.25.225 5.812 2.9 5.812 6.2C31 23.2 28.2 26 24.75 26H8.5A7.506 7.506 0 0 1 1 18.5a7.493 7.493 0 0 1 6.688-7.45A9.37 9.37 0 0 1 16 6Zm-5.113 10.113 2.613 2.612 5.75-5.75 1.762 1.763L13.5 22.25l-4.375-4.375 1.762-1.762Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCloudDoneFilled32;
