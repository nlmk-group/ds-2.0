import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSearchFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m12.02 11.078 2.856 2.855-.943.943-2.855-2.855a6.002 6.002 0 0 1-9.745-4.687c0-3.313 2.688-6 6-6a6.002 6.002 0 0 1 4.688 9.744Z"
      />
    </svg>
  );
};

export default IconSearchFilled16;
