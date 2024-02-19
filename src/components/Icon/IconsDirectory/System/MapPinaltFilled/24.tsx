import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMapPinaltFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11 11.899v5.1a1 1 0 0 0 2 0v-5.1a5 5 0 1 0-2 0Zm5.21 2.52a1.023 1.023 0 0 0-.42 2c2.27.45 3.21 1.26 3.21 1.58 0 .58-2.45 2-7 2s-7-1.42-7-2c0-.32.94-1.13 3.21-1.62a1.023 1.023 0 0 0-.42-2c-3.04.7-4.79 2.01-4.79 3.62 0 2.63 4.53 4 9 4s9-1.37 9-4c0-1.61-1.75-2.92-4.79-3.58Z"
      />
    </svg>
  );
};

export default IconMapPinaltFilled24;
