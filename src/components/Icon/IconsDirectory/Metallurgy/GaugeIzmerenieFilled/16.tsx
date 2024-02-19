import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGaugeIzmerenieFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.65 2.538V1.5h-1.3v1.038a5.5 5.5 0 0 0 0 10.924V15.5h1.3v-2.038a5.5 5.5 0 0 0 3.355-9.232l-1.001-.838a5.468 5.468 0 0 0-2.354-.854ZM4.47 5.53l3 3a.75.75 0 0 0 1.06-1.06l-3-3-1.06 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconGaugeIzmerenieFilled16;
