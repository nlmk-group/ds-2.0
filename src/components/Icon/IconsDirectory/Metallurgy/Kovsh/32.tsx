import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovsh32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        strokeWidth=".6"
        d="M16.995 15.421a2.67 2.67 0 0 0-2.002 0V4h2.002v1.668H28v2.001h-1.668v17.59a4.336 4.336 0 0 1-4.336 4.336H10.004a4.336 4.336 0 0 1-4.336-4.336V7.67H4V5.668h5.337v2.001H7.669v17.59a2.335 2.335 0 0 0 2.335 2.335h11.992a2.335 2.335 0 0 0 2.335-2.335V7.67h-7.336v5.665a4.668 4.668 0 0 1 3.364 6.22 4.67 4.67 0 0 1-8.958-.816c-.184-1.003-.077-1.596.264-2.555l1.787.902c-.126.81-.083 1.1-.083 1.291a2.668 2.668 0 1 0 3.626-2.955Z"
      />
    </svg>
  );
};

export default IconKovsh32;
