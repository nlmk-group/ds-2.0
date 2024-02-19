import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWorkerFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.85 2.5v1.193c.81.085 1.582.293 2.3.604V3.5h1.7v1.807a7.856 7.856 0 0 1 3.039 6.212v1.13H25v1.7h-1.65V16.5c0 2.2-.967 4.176-2.5 5.523v2.906l9.11 3.72H30v1.7H2v-1.7h.024l9.126-3.72v-2.906a7.333 7.333 0 0 1-2.5-5.523v-2.15H7.039v-1.7H8.15v-1.13a7.855 7.855 0 0 1 3-6.183V8.5h1.7V4.314a7.818 7.818 0 0 1 2.3-.617V2.5h1.7Zm-6.5 11.85h11.3v2.15a5.65 5.65 0 0 1-11.3 0v-2.15Zm8.8-5.85V4.322l1.7 1.015V8.5h-1.7Zm-4 1V3.7h1.7v5.8h-1.7Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M12.85 3.5v.81l-1.7 1.027V3.5h1.7Z" />
    </svg>
  );
};

export default IconWorkerFilled32;
