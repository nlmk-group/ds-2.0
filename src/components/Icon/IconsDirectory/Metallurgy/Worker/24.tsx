import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWorker24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.75 2.298V1.5h-1.5v.798a5.711 5.711 0 0 0-1.5.409V2.5h-1.5v1.141A5.737 5.737 0 0 0 6.25 8v1.25H5.5v1.5h1.25v1.75c0 1.152.371 2.217 1 3.083v2.406l-5.716 2.252.003.009H2v1.5h20v-1.5h-.025l.003-.01-5.728-2.251v-2.406c.629-.866 1-1.931 1-3.083v-1.75h1.25v-1.5h-.75V8a5.737 5.737 0 0 0-2-4.359V2.5h-1.5v.207c-.471-.2-.974-.34-1.5-.409Zm5.152 17.952-3.152-1.239v-2.038c-.8.493-1.742.777-2.75.777a5.226 5.226 0 0 1-2.75-.777v2.038L6.103 20.25h11.8ZM14.75 15h.045c.594-.663.955-1.54.955-2.5v-1.75h-7.5v1.75c0 .96.361 1.837.955 2.5h.045v.05a3.74 3.74 0 0 0 2.75 1.2 3.74 3.74 0 0 0 2.75-1.2V15Zm-.5-10.606a4.224 4.224 0 0 0-1.5-.578V7h-1.5V3.816a4.224 4.224 0 0 0-1.5.578V6h-1.5v-.002c-.32.597-.5 1.278-.5 2.002v1.25h8.5V8c0-.724-.18-1.405-.5-2.002V6h-1.5V4.394Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWorker24;
