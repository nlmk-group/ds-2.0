import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNLMKHelp24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M9.48 2.98C10.13 2.33 11.023 2 12 2c1.902 0 3.5 1.309 3.5 3 0 .81-.208 1.447-.564 1.97-.32.469-.735.8-1.028 1.035l-.033.026c-.33.264-.521.426-.658.626-.113.165-.217.404-.217.843v1h-2v-1c0-.81.208-1.447.564-1.97.32-.469.735-.8 1.028-1.035l.033-.026c.33-.264.521-.426.658-.626.113-.165.217-.404.217-.843 0-.309-.402-1-1.5-1-.523 0-.88.17-1.105.395-.225.224-.395.582-.395 1.105h-2c0-.977.33-1.87.98-2.52ZM12 12a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM5 2.75h2.33a5.404 5.404 0 0 0-.559 2H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1.75c0-.74-.172-1.41-.47-2H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Zm-4 17v2h22v-2H1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNLMKHelp24;
