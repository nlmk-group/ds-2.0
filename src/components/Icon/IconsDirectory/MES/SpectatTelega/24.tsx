import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSpectatTelega24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h.268a2 2 0 1 0 3.465 0h10.535a2 2 0 1 0 3.465 0H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3Zm.7 1.7v4.45h4.45V4.7H3.7Zm0 7.45v-1.3h4.45v1.3H3.7Zm0 4.15v-2.45h16.6v2.45H3.7Zm16.6-5.45v1.3h-4.45v-1.3h4.45Zm0-6.15v4.45h-4.45V4.7h4.45Zm-10.45 0h4.3v4.45h-4.3V4.7Zm4.3 7.45h-4.3v-1.3h4.3v1.3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSpectatTelega24;
