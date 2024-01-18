import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconVagon24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <mask id="path-1-inside-1_1661_304" fill="white">
        <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6V14C22 14.5523 21.5523 15 21 15H3C2.44772 15 2 14.5523 2 14V6Z" />
      </mask>
      <path
        d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6V14C22 14.5523 21.5523 15 21 15H3C2.44772 15 2 14.5523 2 14V6Z"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="3"
        mask="url(#path-1-inside-1_1661_304)"
      />
      <path d="M7 6V14" stroke={htmlColor || 'currentColor'} strokeWidth="1.5" />
      <path d="M12 6V14" stroke={htmlColor || 'currentColor'} strokeWidth="1.5" />
      <path d="M17 6V14" stroke={htmlColor || 'currentColor'} strokeWidth="1.5" />
      <circle cx="4.5" cy="17.5" r="1.5" fill={htmlColor || 'currentColor'} />
      <circle cx="16.5" cy="17.5" r="1.5" fill={htmlColor || 'currentColor'} />
      <circle cx="7.5" cy="17.5" r="1.5" fill={htmlColor || 'currentColor'} />
      <circle cx="19.5" cy="17.5" r="1.5" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconVagon24;
