import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTableChart24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M3 8V5c0-.55.196-1.02.588-1.412A1.93 1.93 0 0 1 5 3h14c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v3H3Zm2 13c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 3 19v-9h4.5v11H5Zm11.5 0V10H21v9c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 19 21h-2.5Zm-7 0V10h5v11h-5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTableChart24;
