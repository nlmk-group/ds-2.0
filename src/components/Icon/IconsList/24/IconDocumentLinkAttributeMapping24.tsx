import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDocumentLinkAttributeMapping24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M5 5H7V7H5V5Z" fill={htmlColor || 'currentColor'} />
      <path d="M5 5L5 20H3L3 5L5 5Z" fill={htmlColor || 'currentColor'} />
      <path d="M5 18H7V20H5L5 18Z" fill={htmlColor || 'currentColor'} />
      <path d="M11 5H16V7H11V5Z" fill={htmlColor || 'currentColor'} />
      <path d="M21 10V20H19L19 10H21Z" fill={htmlColor || 'currentColor'} />
      <path d="M11 5L11 20H9L9 5L11 5Z" fill={htmlColor || 'currentColor'} />
      <path d="M11 18H19L19 20H11L11 18Z" fill={htmlColor || 'currentColor'} />
      <path d="M16 5L21 10H16V5Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconDocumentLinkAttributeMapping24;
