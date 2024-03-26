import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconASM16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.273 1.975h-5.3v5.3h5.3v-5.3Zm-4.25 4.25v-3.2h3.2v3.2h-3.2Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M1.973 9.776h4.25v3.2h-4.25v1.05h5.3v-5.3h-5.3v1.05ZM12.97 3.025H8.72v-1.05h5.3v5.313h-1.05V3.025Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.023 8.725h-5.3v5.3h5.3v-5.3Zm-4.25 4.25v-3.2h3.2v3.2h-3.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconASM16;
