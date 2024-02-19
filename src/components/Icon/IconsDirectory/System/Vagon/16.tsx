import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVagon16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 3.7a.7.7 0 0 1 .7-.7h12.6a.7.7 0 0 1 .7.7v5.6a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V3.7Zm1.208 5.093V4.208H3.72v4.585H2.208Zm2.72 0h2.468V4.208H4.93v4.585Zm6.143 0H8.604V4.208h2.467v4.585Zm1.208 0h1.514V4.208h-1.514v4.585Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M3.8 11.75a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Zm0 0a1.05 1.05 0 1 1 2.1 0 1.05 1.05 0 0 1-2.1 0Zm7.35 1.05c.58 0 1.05-.47 1.05-1.05a1.05 1.05 0 1 0 2.1 0 1.05 1.05 0 0 0-2.1 0 1.05 1.05 0 1 0-1.05 1.05Z"
      />
    </svg>
  );
};

export default IconVagon16;
