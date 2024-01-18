import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconLotok24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <rect y="6" width="18" height="2" fill={htmlColor || 'currentColor'} />
      <rect x="6" y="18" width="4" height="4" rx="2" fill={htmlColor || 'currentColor'} />
      <rect x="14" y="18" width="4" height="4" rx="2" fill={htmlColor || 'currentColor'} />
      <rect x="5" y="15" width="14" height="2" fill={htmlColor || 'currentColor'} />
      <rect
        x="4.50635"
        y="6"
        width="10.4666"
        height="2"
        transform="rotate(75 4.50635 6)"
        fill={htmlColor || 'currentColor'}
      />
      <rect
        width="9.87466"
        height="2"
        transform="matrix(-0.258819 0.965926 0.965926 0.258819 19.5557 6)"
        fill={htmlColor || 'currentColor'}
      />
      <rect x="18" y="6" width="6" height="2" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconLotok24;
