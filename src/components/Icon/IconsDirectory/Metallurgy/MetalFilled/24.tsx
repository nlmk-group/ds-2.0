import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetalFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14.492 4.16v3.136l2.21-1.563-2.21-1.572Zm-1.2-.082v4.188l-2.167 3.097-2.657-4.71 4.824-2.575Zm-5.71 3.447L4.99 13.98l5.206-1.823-2.614-4.632ZM5.22 15.17l4.29 5.556.854-7.356-5.144 1.8Zm5.448 5.98h5.066a.61.61 0 0 0 .554-.361l2.598-5.607-7.3-1.938-.918 7.906Zm8.389-7.164L17.36 6.738l-3.036 2.147-2.27 3.242 7.003 1.859Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetalFilled24;
