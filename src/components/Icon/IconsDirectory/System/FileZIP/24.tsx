import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileZIP24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22 7v14c0 1.1-.9 2-2 2H3.99C2.89 23 2 22.1 2 21l.01-18c0-1.1.89-2 1.99-2h12l6 6ZM4 21h16V8h-3.5A1.5 1.5 0 0 1 15 6.5V3h-3.69a.748.748 0 0 1-.67.715l-.078.004h-.656V5.03h.656l.078.004a.75.75 0 0 1 0 1.492l-.078.004h-.656v1.313h.656l.078.004a.75.75 0 0 1 0 1.492l-.078.004h-.656v1.312h.656l.078.004a.75.75 0 0 1 0 1.492l-.078.004h-.656v1.313h.656a.75.75 0 0 1 .75.75v2.344a2.156 2.156 0 0 1-4.312 0v-2.344a.75.75 0 0 1 .75-.75h.656V10.75H7.75a.75.75 0 0 1 0-1.5h.656V7.937H7.75a.75.75 0 0 1 0-1.5h.656V5.125H7.75a.75.75 0 0 1 0-1.5h.656V3H4v18Zm4.5-4.438a.656.656 0 0 0 1.313 0V14.97H8.5v1.594Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFileZIP24;
