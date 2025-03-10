import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsOverlySecuredLater24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || '#F76979'} d="M2 8h20v12H2V8Z" />
      <path fill={htmlColor || '#F76979'} d="M4 4h15a1 1 0 0 1 1 1v16H4V4Z" />
      <path
        fill={htmlColor || '#3C4A56'}
        fillRule="evenodd"
        d="M4 12v8h16v-8h2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8h2Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || '#fff'} d="M22 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
      <path
        fill={htmlColor || '#3C4A56'}
        fillRule="evenodd"
        d="M15.993 3A6.997 6.997 0 0 0 9 10c0 3.864 3.129 7 6.993 7A7.004 7.004 0 0 0 23 10c0-3.864-3.136-7-7.007-7ZM16 15.6a5.598 5.598 0 0 1-5.6-5.6c0-3.094 2.506-5.6 5.6-5.6s5.6 2.506 5.6 5.6-2.506 5.6-5.6 5.6Zm-.7-9.1h1.05v3.675l3.15 1.869-.525.861L15.3 10.7V6.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsOverlySecuredLater24;
