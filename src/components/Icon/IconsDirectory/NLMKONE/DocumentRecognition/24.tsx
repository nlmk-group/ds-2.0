import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDocumentRecognition24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M14.314 8.419a1 1 0 0 0-1.603-.033l-2.93 3.766-.726-.484a1 1 0 0 0-1.314.182l-3 3.5A1 1 0 0 0 5.5 17h13a1 1 0 0 0 .814-1.58l-5-7.001Zm-3.525 5.695 2.677-3.441L16.556 15H7.675l1.009-1.176.762.508a1 1 0 0 0 1.344-.218Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M7.352 6.7a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M1 5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5Zm2 0h18v14H3V5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDocumentRecognition24;
