import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRollFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.74324 12C7.74324 9.64905 9.64905 7.74324 12 7.74324C14.3509 7.74324 16.2568 9.64905 16.2568 12C16.2568 14.3509 14.3509 16.2568 12 16.2568C9.64905 16.2568 7.74324 14.3509 7.74324 12ZM14.1892 12C14.1892 13.209 13.209 14.1892 12 14.1892C10.7909 14.1892 9.8108 13.209 9.8108 12C9.8108 10.7909 10.7909 9.8108 12 9.8108C13.209 9.8108 14.1892 10.7909 14.1892 12Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 6.77026C9.11169 6.77026 6.77026 9.11169 6.77026 12C6.77026 14.8883 9.11169 17.2297 12 17.2297C14.8883 17.2297 17.2297 14.8883 17.2297 12C17.2297 9.11169 14.8883 6.77026 12 6.77026Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRollFilled24;
