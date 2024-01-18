import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDotPlot24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <line
        x1="3.65"
        y1="19.4501"
        x2="19.45"
        y2="19.4501"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <line
        x1="4.5499"
        y1="4.5499"
        x2="4.5499"
        y2="20.3499"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M4.5502 3L5.71933 4.35H3.38106L4.5502 3Z" fill={htmlColor || 'currentColor'} />
      <path d="M21 19.4501L19.65 20.6192L19.65 18.281L21 19.4501Z" fill={htmlColor || 'currentColor'} />
      <path
        d="M19 11.0002L14.5 14.5002L13 10.0002L8 14.5002L7 10.5002"
        stroke="currentColor"
        strokeWidth="1.17"
        strokeLinecap="round"
      />
      <circle cx="7" cy="10.3564" r="1" fill={htmlColor || 'currentColor'} />
      <circle cx="13.2524" cy="9.29395" r="1" fill={htmlColor || 'currentColor'} />
      <circle cx="8.0498" cy="14.9854" r="1" fill={htmlColor || 'currentColor'} />
      <circle cx="14.6001" cy="14.9878" r="1" fill={htmlColor || 'currentColor'} />
      <circle cx="19.2998" cy="10.7002" r="1" fill={htmlColor || 'currentColor'} />
      <line
        x1="6.27836"
        y1="6.0295"
        x2="19.4683"
        y2="6.0295"
        stroke="currentColor"
        strokeWidth="1.17"
        strokeLinecap="round"
        strokeDasharray="2.25 2.25"
      />
    </svg>
  );
};

export default IconDotPlot24;
