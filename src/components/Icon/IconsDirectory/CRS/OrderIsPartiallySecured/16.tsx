import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsPartiallySecured16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'var(--spectrum-yellow-50)'}
        d="M1.333 11.905V5.119h4.875l7.1 6.967c.445.437.164 1.247-.433 1.247H2.633c-.718 0-1.3-.64-1.3-1.428Z"
      />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M2.633 3.333v8.571h10.4v-8.57h1.3v8.57c0 .79-.582 1.43-1.3 1.43h-10.4c-.718 0-1.3-.64-1.3-1.43v-8.57h1.3Z"
        clipRule="evenodd"
      />
      <path fill={'var(--steel-80)'} fillRule="evenodd" d="M13.033 6.19h-10.4V4.762h10.4V6.19Z" clipRule="evenodd" />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M12.239 11.905 5.874 6.19H7.95L6.758 5.12l6.275 5.64v1.146h-.794Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsPartiallySecured16;
