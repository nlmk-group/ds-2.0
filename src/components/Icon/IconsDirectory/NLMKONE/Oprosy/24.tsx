import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOprosy24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3.98 5.98C4.63 5.33 5.523 5 6.5 5 8.402 5 10 6.309 10 8c0 .81-.208 1.447-.564 1.97-.32.469-.735.8-1.028 1.035l-.033.026c-.33.264-.522.426-.658.626-.113.165-.217.403-.217.843v1h-2v-1c0-.81.208-1.447.564-1.97.32-.469.735-.8 1.028-1.035l.033-.026c.33-.264.522-.426.658-.626C7.896 8.678 8 8.439 8 8c0-.309-.402-1-1.5-1-.523 0-.88.17-1.105.395C5.17 7.619 5 7.977 5 8.5H3c0-.977.33-1.87.98-2.52ZM6.5 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 6v2h9V6h-9Zm0 10v2h9v-2h-9Zm0-5v2h9v-2h-9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconOprosy24;
