import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVacancyOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.288 5.738a2.037 2.037 0 1 1 4.074-.001 2.037 2.037 0 0 1-4.074 0ZM4.74 9.93a3.668 3.668 0 0 1-.615-.815c.914-.553 2.333-.83 3.2-.83.871 0 2.298.28 3.212.837a3.667 3.667 0 0 1-5.797.809Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m12.02 11.078 2.856 2.855-.944.943-2.854-2.855a6.002 6.002 0 0 1-9.745-4.687c0-3.313 2.688-6 6-6a6.002 6.002 0 0 1 4.687 9.744Zm-1.337-.494a4.665 4.665 0 0 0-3.35-7.917 4.665 4.665 0 0 0-4.667 4.667 4.665 4.665 0 0 0 7.917 3.35l.1-.1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconVacancyOutlined16;
