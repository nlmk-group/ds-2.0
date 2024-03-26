import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconASM24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.91 2.963H2.96v7.95h7.95v-7.95ZM4.537 9.338v-4.8h4.8v4.8h-4.8Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M2.96 14.664h6.377v4.799H2.96v1.575h7.95v-7.949H2.96v1.575ZM19.457 4.538h-6.374V2.963h7.95v7.969h-1.576V4.538Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M21.036 13.088h-7.95v7.95h7.95v-7.95Zm-6.375 6.375v-4.8h4.8v4.8h-4.8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconASM24;
