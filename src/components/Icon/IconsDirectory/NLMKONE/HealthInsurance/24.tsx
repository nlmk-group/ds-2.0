import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHealthInsurance24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M10.8 12.8v3h2v-3h3v-2h-3v-3h-2v3h-3v2h3Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M11.92 2.001c-3.66 0-7.27 1.252-8.695 1.806a1.918 1.918 0 0 0-1.214 1.98c.15 1.559.64 5.494 2.005 9.065C5.346 18.327 7.726 22 11.92 22s6.575-3.672 7.904-7.147c1.365-3.572 1.854-7.506 2.005-9.066a1.918 1.918 0 0 0-1.214-1.979c-1.425-.554-5.035-1.806-8.695-1.806ZM5.883 14.139c-1.254-3.278-1.727-6.95-1.878-8.491 1.397-.54 4.68-1.649 7.915-1.649 3.235 0 6.518 1.11 7.915 1.649-.151 1.54-.624 5.213-1.878 8.49-1.305 3.413-3.233 5.863-6.037 5.863s-4.732-2.45-6.037-5.862Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHealthInsurance24;
