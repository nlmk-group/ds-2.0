import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEmployeeContacts24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h11.998a3 3 0 0 0 3-3v-2H23v-2h-2.002v-3H23v-2h-2.002V8H23V6h-2.002V4a3 3 0 0 0-3-3H6ZM5 4a1 1 0 0 1 1-1h11.998a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm3.75 5.25a3.25 3.25 0 1 1 5.541 2.305A5 5 0 0 1 17 16v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1a5 5 0 0 1 2.709-4.445A3.24 3.24 0 0 1 8.75 9.25ZM12 8a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 8Zm0 5a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEmployeeContacts24;
