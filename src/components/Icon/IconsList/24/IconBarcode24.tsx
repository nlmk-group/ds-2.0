import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconBarcode24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M3.0061 6.00214H4.82069V18.001H3.0061V6.00214Z" fill={htmlColor || 'currentColor'} />
      <path d="M5.72583 6.00214H7.54042V15.2365H5.72583V6.00214Z" fill={htmlColor || 'currentColor'} />
      <path d="M8.73047 6.00214H10.2611V15.2365H8.73047V6.00214Z" fill={htmlColor || 'currentColor'} />
      <path d="M11.1697 6.00214H12.9843V18.001H11.1697V6.00214Z" fill={htmlColor || 'currentColor'} />
      <path d="M13.8904 6.00214H15.705V18.001H13.8904V6.00214Z" fill={htmlColor || 'currentColor'} />
      <path d="M19.3354 6.00214H21.15V18.001H19.3354V6.00214Z" fill={htmlColor || 'currentColor'} />
      <path d="M16.615 6.00214H18.4296V15.2365H16.615V6.00214Z" fill={htmlColor || 'currentColor'} />
      <path d="M5.72583 16.6174H7.54042V17.9996H5.72583V16.6174Z" fill={htmlColor || 'currentColor'} />
      <path d="M8.73047 16.6174H10.2611V17.9996H8.73047V16.6174Z" fill={htmlColor || 'currentColor'} />
      <path d="M16.615 16.6174H18.4296V17.9996H16.615V16.6174Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconBarcode24;
