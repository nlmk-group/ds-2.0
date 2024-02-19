import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWorkerFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M12.75 2v.794h-.034l.027.004h-1.486l.027-.004h-.034V2h1.5Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M17.25 13c0 1.43-.572 2.727-1.5 3.674v1.8l6.21 2.26-.006.016H22v1.5H2v-1.5h.058l-.006-.016 6.198-2.259v-1.8A5.233 5.233 0 0 1 6.75 13v-1.75H5.5v-1.5h.75V8.5c0-1.743.775-3.305 2-4.359V3h1.5v.207c.471-.2.974-.34 1.5-.409V7.5h1.5V2.798a5.711 5.711 0 0 1 1.5.409V6.5h1.5V4.171l-1.5-.966V3h1.5v1.141a5.737 5.737 0 0 1 2 4.359v1.25h.75v1.5h-1.25V13Zm-9-1.75h7.5V13a3.75 3.75 0 1 1-7.5 0v-1.75Zm1.5-8.02-1.5.941V6.5h1.5V3.23Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWorkerFilled24;
