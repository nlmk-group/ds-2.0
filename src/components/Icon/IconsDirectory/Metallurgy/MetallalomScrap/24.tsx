import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetallalomScrap24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.25 4.75H9v-1.5h6v1.5h-2.25v3h4.06L21.06 12l-3.53 3.53-1.06-1.06L18.94 12l-2.75-2.75H7.81L5.06 12l2.47 2.47-1.06 1.06L2.94 12l4.25-4.25h4.06v-3Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22 20.75H2v-1.5h2.674l5.6-6h3.452l5.6 6H22v1.5Zm-4.726-1.5H6.726l4.2-4.5h2.148l4.2 4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMetallalomScrap24;
