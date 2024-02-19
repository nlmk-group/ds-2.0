import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDocFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14 11.601c0 .66-.54 1.199-1.2 1.199V5l-3-3H4.4c0-.66.54-1.2 1.2-1.2h4.8L14 4.4v7.201Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M11.6 7.774V14c0 .66-.54 1.2-1.2 1.2H3.194C2.534 15.2 2 14.66 2 14V4.4c0-.66.54-1.2 1.2-1.2h3.799v4.574H11.6ZM4.4 9.2h4.8v1.2H4.4V9.2Zm0 2.4h3.2v1.2H4.4v-1.2Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M7.999 3.2H8l3.574 3.574H8V3.2Z" />
    </svg>
  );
};

export default IconSourceDocFilled16;
