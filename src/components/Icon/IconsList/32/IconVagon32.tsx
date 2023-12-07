import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconVagon32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <mask id="path-1-inside-1_1661_313" fill="white">
        <path d="M2.66688 7.99996C2.66688 7.26358 3.26383 6.66663 4.00021 6.66663H28.0001C28.7365 6.66663 29.3334 7.26358 29.3334 7.99996V18.6666C29.3334 19.403 28.7365 20 28.0001 20H4.00022C3.26384 20 2.66688 19.403 2.66688 18.6666V7.99996Z" />
      </mask>
      <path
        d="M2.66688 7.99996C2.66688 7.26358 3.26383 6.66663 4.00021 6.66663H28.0001C28.7365 6.66663 29.3334 7.26358 29.3334 7.99996V18.6666C29.3334 19.403 28.7365 20 28.0001 20H4.00022C3.26384 20 2.66688 19.403 2.66688 18.6666V7.99996Z"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="4.6"
        mask="url(#path-1-inside-1_1661_313)"
      />
      <path
        d="M9 8V19"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2.3"
      />
      <path
        d="M16 8V19"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2.3"
      />
      <path
        d="M23 8V19"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2.3"
      />
      <circle cx="6" cy="23.3334" r="2" fill={htmlColor || 'currentColor'} />
      <circle cx="22" cy="23.3334" r="2" fill={htmlColor || 'currentColor'} />
      <circle cx="10" cy="23.3334" r="2" fill={htmlColor || 'currentColor'} />
      <circle cx="26" cy="23.3334" r="2" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconVagon32;
