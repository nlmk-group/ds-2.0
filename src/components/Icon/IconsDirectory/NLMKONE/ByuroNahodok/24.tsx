import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconByuroNahodok24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15 4H9v1h6V4ZM7 4v1H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2Zm2 3h12v13H3V7h6Zm.48 1.98C10.13 8.33 11.023 8 12 8c1.902 0 3.5 1.309 3.5 3 0 .81-.208 1.447-.564 1.97-.32.469-.735.8-1.028 1.035l-.033.026c-.33.264-.521.426-.658.626-.113.165-.217.403-.217.843v.5h-2v-.5c0-.81.208-1.447.564-1.97.32-.469.735-.8 1.028-1.035l.033-.026c.33-.264.521-.426.658-.626.113-.165.217-.403.217-.843 0-.309-.402-1-1.5-1-.523 0-.88.17-1.105.395-.225.224-.395.582-.395 1.105h-2c0-.977.33-1.87.98-2.52ZM12 17a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconByuroNahodok24;
