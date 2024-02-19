import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEnterFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M10.995 3h7.995c1.095 0 1.995.9 1.995 1.995V19.02c0 1.095-.9 1.98-1.995 1.98h-7.995A1.991 1.991 0 0 1 9 19.02v-6.015h4.995v3L18 12l-4.005-4.005v3H9v-6C9 3.885 9.9 3 10.995 3ZM3 10.995h6v1.995H3v-1.995Z"
      />
    </svg>
  );
};

export default IconEnterFilled24;
