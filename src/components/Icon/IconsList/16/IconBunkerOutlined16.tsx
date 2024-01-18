import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconBunkerOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M2.5 3.5C2.5 2.94772 2.94772 2.5 3.5 2.5H12.5C13.0523 2.5 13.5 2.94772 13.5 3.5V8.65689C13.5 8.87927 13.4259 9.0953 13.2894 9.27083L10.3003 13.1139C10.1108 13.3575 9.81951 13.5 9.51092 13.5H6.48908C6.18049 13.5 5.88919 13.3575 5.69973 13.1139L2.71065 9.27083C2.57412 9.0953 2.5 8.87927 2.5 8.65689V3.5Z"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="1.2"
      />
      <path d="M3 7H13" stroke={htmlColor || 'currentColor'} strokeWidth="1.2" />
    </svg>
  );
};

export default IconBunkerOutlined16;
