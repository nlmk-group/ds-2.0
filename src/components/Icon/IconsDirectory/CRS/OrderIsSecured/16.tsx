import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsSecured16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'var(--spectrum-green-50)'} d="M1.983 6.571h11.7v5.786h-11.7V6.571Z" />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M2.633 4v7.714h10.4V4h1.3v7.714c0 .71-.582 1.286-1.3 1.286h-10.4c-.718 0-1.3-.576-1.3-1.286V4h1.3Z"
        clipRule="evenodd"
      />
      <path fill={'var(--steel-80)'} fillRule="evenodd" d="M13.033 6.571h-10.4V5.286h10.4V6.57Z" clipRule="evenodd" />
    </svg>
  );
};

export default IconOrderIsSecured16;
