import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStaffUnitOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.498 15.761a6.06 6.06 0 0 1 1.359-2.48c-.304-.02-.59-.031-.857-.031-3.338 0-10 1.675-10 5V22h11.445a6.085 6.085 0 0 1-1.77-2.5H4.5v-1.238c.238-.855 3.752-2.355 6.998-2.5Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7 7c0-2.763 2.238-5 5-5s5 2.237 5 5c0 2.762-2.238 5-5 5S7 9.762 7 7Zm7.5 0c0-1.375-1.125-2.5-2.5-2.5A2.507 2.507 0 0 0 9.5 7c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5Zm3.856 5.812a5.152 5.152 0 0 0-1.999.001 1.856 1.856 0 0 1-.954 1.328 2.042 2.042 0 0 1-1.689.121 4.61 4.61 0 0 0-1 1.645c.464.352.735.886.734 1.45a1.82 1.82 0 0 1-.733 1.45c.21.607.55 1.168.998 1.645a2.042 2.042 0 0 1 1.69.12c.515.283.866.772.955 1.33.66.131 1.34.13 1.999-.001.089-.558.44-1.046.955-1.328a2.042 2.042 0 0 1 1.688-.12 4.61 4.61 0 0 0 1-1.645 1.82 1.82 0 0 1-.734-1.45c0-.565.27-1.099.733-1.45a4.587 4.587 0 0 0-.998-1.646 2.042 2.042 0 0 1-1.69-.121 1.855 1.855 0 0 1-.955-1.329Zm.467 4.545c0 .77-.656 1.393-1.466 1.393-.81 0-1.466-.623-1.466-1.393 0-.769.657-1.392 1.466-1.392.81 0 1.466.623 1.466 1.392Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconStaffUnitOutlined24;
