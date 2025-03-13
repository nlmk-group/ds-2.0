import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUnrs32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3 2a1 1 0 0 0-1 1v3.65a1 1 0 0 0 .22.624l3.48 4.35a1 1 0 0 0 .78.376h4.04a1 1 0 0 0 .78-.375l3.48-4.351a1 1 0 0 0 .22-.625V3a1 1 0 0 0-1-1H3ZM16.136 21.75H18.5v1.5h-2.364a8.386 8.386 0 0 1-8.386-8.386v-1.41H6v1.41C6 20.462 10.538 25 16.136 25H30v-5H16.136A5.136 5.136 0 0 1 11 14.864v-1.41H9.25v1.41a6.886 6.886 0 0 0 6.886 6.886Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM29 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM22 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 28a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM27 30a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM24 28a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};

export default IconUnrs32;
