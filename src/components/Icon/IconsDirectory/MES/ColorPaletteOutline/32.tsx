import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconColorPaletteOutline32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M8.85 17.3a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM14.7 10.15a1.95 1.95 0 1 1-3.9 0 1.95 1.95 0 0 1 3.9 0ZM19.25 12.1a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM25.1 15.35a1.95 1.95 0 1 1-3.9 0 1.95 1.95 0 0 1 3.9 0Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 29C8.837 29 3 23.163 3 16S8.837 3 16 3s13 5.252 13 11.7c0 4.303-3.497 7.8-7.8 7.8h-2.301a.644.644 0 0 0-.65.65c0 .156.065.299.169.429.533.611.832 1.378.832 2.171A3.25 3.25 0 0 1 16 29Zm0-23.4C10.267 5.6 5.6 10.267 5.6 16c0 5.733 4.667 10.4 10.4 10.4.364 0 .65-.286.65-.65a.702.702 0 0 0-.182-.455 3.227 3.227 0 0 1-.819-2.145 3.25 3.25 0 0 1 3.25-3.25H21.2c2.873 0 5.2-2.327 5.2-5.2 0-5.018-4.667-9.1-10.4-9.1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconColorPaletteOutline32;
