import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBorder16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 5h12v1.5H2V5Zm12 6H2V9.5h12V11Z"
        clipRule="evenodd"
      />
      <mask
        id="icon_border16"
        width="8"
        height="6"
        x="4"
        y="5"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
      >
        <path fill={htmlColor || 'currentColor'} d="M4 5h8v6H4V5Z" />
      </mask>
      <g mask="url(#icon_border16)">
        <path
          fill="#001729"
          d="m4.926 4.391 1.154.6-2.108 3.286-1.154-.6 2.108-3.286Zm2.301.013 1.155.6-4.03 6.284-1.155-.6 4.03-6.284Zm2.316-.01 1.155.6-4.253 6.63-1.155-.6 4.253-6.63Zm2.141.263 1.155.6-4.092 6.379-1.155-.6 4.092-6.38Zm.357 3.043 1.155.6-2.11 3.289-1.155-.6 2.11-3.29Z"
        />
      </g>
    </svg>
  );
};

export default IconBorder16;
