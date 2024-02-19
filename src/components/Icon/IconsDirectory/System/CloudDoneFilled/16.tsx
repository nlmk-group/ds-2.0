import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloudDoneFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3a4.37 4.37 0 0 1 4.287 3.523A2.903 2.903 0 0 1 15 9.417a2.918 2.918 0 0 1-2.917 2.916H4.5c-1.93 0-3.5-1.569-3.5-3.5a3.497 3.497 0 0 1 3.12-3.476A4.372 4.372 0 0 1 8 3ZM5.614 7.72l1.22 1.218 2.683-2.683.822.823-3.506 3.505-2.041-2.041.822-.823Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCloudDoneFilled16;
