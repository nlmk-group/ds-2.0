import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovshDomen24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M18.3 3H20v8.453a7.207 7.207 0 0 1-1.246 4.047H22v1.6h-4.692a7.997 7.997 0 0 1-.765.566 1.652 1.652 0 0 1 2.057 1.581 1.65 1.65 0 1 1 0 .036 1.65 1.65 0 1 1-2.829-1.173A8.348 8.348 0 0 1 12 19a8.347 8.347 0 0 1-3.772-.89 1.65 1.65 0 1 1-.771-.444 7.983 7.983 0 0 1-.764-.566H2v-1.6h3.246A7.205 7.205 0 0 1 4 11.453V3h1.7v3.149l1.604.535c.452.15.94.15 1.392 0l1.102-.368a3.8 3.8 0 0 1 2.404 0l.99.33a1.9 1.9 0 0 0 1.45-.103 3.5 3.5 0 0 1 2.672-.19l.986.33V3Zm0 5.369-1.492-.498a1.9 1.9 0 0 0-1.45.103 3.5 3.5 0 0 1-2.672.19l-.99-.33a2.2 2.2 0 0 0-1.392 0l-1.102.368a3.8 3.8 0 0 1-2.404 0L5.7 7.836v3.617C5.7 14.59 8.426 17.3 12 17.3s6.3-2.71 6.3-5.847V8.369Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M3.75 20.915a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3Z" />
    </svg>
  );
};

export default IconKovshDomen24;
