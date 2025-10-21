import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPinLeftFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M31.5 23.5v-15c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5V10H21c-2.49 0-4.5-2.01-4.5-4.5h-3v8.955H3l-1.5 1.5 1.5 1.5h10.5V26.5h3c0-2.49 2.01-4.5 4.5-4.5h7.5v1.5c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5Z"
      />
    </svg>
  );
};

export default IconPinLeftFilled32;
