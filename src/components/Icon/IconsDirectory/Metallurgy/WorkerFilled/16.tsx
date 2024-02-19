import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWorkerFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.65 1.9V1h-1.3v.9A4.151 4.151 0 0 0 3.85 6v.35H3.5v1.3h.85V9c0 .972.38 1.856 1 2.51v1.054l-4.31 1.77.006.016H1v1.3h14v-1.3h-.046l.007-.016-4.31-1.77V11.51c.619-.654 1-1.538 1-2.51V7.65h.849v-1.3h-.35V6a4.151 4.151 0 0 0-3.5-4.1Zm-1.3.1v3.5h1.3V2h-1.3Zm3 5.65h-4.7V9a2.35 2.35 0 1 0 4.7 0V7.65Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWorkerFilled16;
