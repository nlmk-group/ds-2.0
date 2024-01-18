import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDotPlot32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <line
        x1="3.65"
        y1="27.0502"
        x2="27.05"
        y2="27.0502"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <line
        x1="4.9498"
        y1="4.9498"
        x2="4.9498"
        y2="28.3498"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M5.23906 3L6.92781 4.95H3.55031L5.23906 3Z" fill={htmlColor || 'currentColor'} />
      <path d="M29 26.7613L27.05 28.45L27.05 25.0725L29 26.7613Z" fill={htmlColor || 'currentColor'} />
      <path
        d="M26.1112 14.556L19.6112 19.6116L17.4445 13.1116L10.2223 19.6116L8.77783 13.8338"
        stroke="currentColor"
        strokeWidth="1.17"
        strokeLinecap="round"
      />
      <circle cx="8.77794" cy="13.6261" r="1.44444" fill={htmlColor || 'currentColor'} />
      <circle cx="17.8092" cy="12.0912" r="1.44444" fill={htmlColor || 'currentColor'} />
      <circle cx="10.2941" cy="20.3121" r="1.44444" fill={htmlColor || 'currentColor'} />
      <circle cx="19.7555" cy="20.3158" r="1.44444" fill={htmlColor || 'currentColor'} />
      <circle cx="26.5441" cy="14.1224" r="1.44444" fill={htmlColor || 'currentColor'} />
      <line
        x1="7.47562"
        y1="7.63595"
        x2="27.0477"
        y2="7.63595"
        stroke="currentColor"
        strokeWidth="1.17"
        strokeLinecap="round"
        strokeDasharray="2.25 2.25"
      />
    </svg>
  );
};

export default IconDotPlot32;
