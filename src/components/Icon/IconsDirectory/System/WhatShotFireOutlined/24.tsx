import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWhatShotFireOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13.5 1s.74 2.733.74 4.95c0 2.125-1.35 3.848-3.41 3.848-2.07 0-3.63-1.723-3.63-3.847l.03-.372C5.21 8.055 4 11.262 4 14.75 4 19.308 7.58 23 12 23s8-3.692 8-8.251C20 9.189 17.41 4.229 13.5 1Zm-1.93 12.882c-1.36.29-2.17 1.197-2.17 2.486a2.488 2.488 0 0 0 2.49 2.496c2.05 0 3.71-1.712 3.71-3.827 0-1.103-.15-2.186-.46-3.218-.79 1.104-2.2 1.774-3.57 2.063ZM6 14.75c0 3.414 2.69 6.188 6 6.188s6-2.774 6-6.188c0-2.64-.66-5.188-1.89-7.457-.53 2.681-2.62 4.569-5.28 4.569a5.5 5.5 0 0 1-3.97-1.681A12.595 12.595 0 0 0 6 14.748Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWhatShotFireOutlined24;
