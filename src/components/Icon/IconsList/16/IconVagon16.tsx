import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconVagon16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <mask id="path-1-inside-1_1661_294" fill="white">
        <path d="M1.33332 3.99992C1.33332 3.63173 1.6318 3.33325 1.99999 3.33325H13.9999C14.3681 3.33325 14.6666 3.63173 14.6666 3.99992V9.33325C14.6666 9.70144 14.3681 9.99992 13.9999 9.99992H1.99999C1.6318 9.99992 1.33332 9.70144 1.33332 9.33325V3.99992Z" />
      </mask>
      <path
        d="M1.33332 3.99992C1.33332 3.63173 1.6318 3.33325 1.99999 3.33325H13.9999C14.3681 3.33325 14.6666 3.63173 14.6666 3.99992V9.33325C14.6666 9.70144 14.3681 9.99992 13.9999 9.99992H1.99999C1.6318 9.99992 1.33332 9.70144 1.33332 9.33325V3.99992Z"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2.4"
        mask="url(#path-1-inside-1_1661_294)"
      />
      <path d="M5 4V9" stroke={htmlColor || 'currentColor'} strokeWidth="1.2" />
      <path d="M8 4V9" stroke={htmlColor || 'currentColor'} strokeWidth="1.2" />
      <path d="M11 4V9" stroke={htmlColor || 'currentColor'} strokeWidth="1.2" />
      <circle cx="3" cy="11.6667" r="1" fill={htmlColor || 'currentColor'} />
      <circle cx="11" cy="11.6667" r="1" fill={htmlColor || 'currentColor'} />
      <circle cx="5" cy="11.6667" r="1" fill={htmlColor || 'currentColor'} />
      <circle cx="13" cy="11.6667" r="1" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconVagon16;
