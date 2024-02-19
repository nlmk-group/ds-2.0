import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPeopleCancelFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.054 7.908c1.672 0 3.027-1.322 3.027-2.954C10.081 3.322 8.726 2 7.054 2 5.382 2 4.027 3.322 4.027 4.954c0 1.632 1.355 2.954 3.027 2.954Zm-4.54 4.43c.15-.465 1.944-1.24 3.753-1.432l1.544-1.477a7.241 7.241 0 0 0-.757-.044c-2.02 0-6.054.99-6.054 2.954v1.476h6.81L6.298 12.34H2.514Zm9.459-2.333 1.96-1.913L15 9.134l-1.96 1.912L15 12.96 13.933 14l-1.96-1.913L10.013 14l-1.067-1.041 1.96-1.913-1.96-1.912 1.067-1.042 1.96 1.913Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPeopleCancelFilled16;
