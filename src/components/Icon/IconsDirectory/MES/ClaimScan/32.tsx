import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconClaimScan32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || '#1952B6'}
        fillRule="evenodd"
        d="M17.85 23.363c0-2.567 2.045-4.65 4.57-4.65 2.53 0 4.58 2.083 4.58 4.65 0 2.566-2.05 4.65-4.58 4.65-2.525 0-4.57-2.084-4.57-4.65Zm4.118-2.326h.915v2.79h-.915v-2.79Zm0 3.72h.915v.93h-.915v-.93Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || '#1952B6'}
        d="M8.396 10.53c1.305-2.645 3.36-4.62 5.641-6.005l-.786-1.295C9.697 5.388 6.255 9.142 5.57 14.844A10.49 10.49 0 0 0 5 18.264C5 24.066 9.704 28.77 15.506 28.77c1.165 0 2.285-.19 3.333-.54a6.083 6.083 0 0 1-1.236-1.22 8.991 8.991 0 1 1 6.875-9.335 6.03 6.03 0 0 1 1.531.818c.002-.076.002-.152.002-.23 0-5.801-4.703-10.505-10.505-10.505-2.742 0-5.24 1.05-7.11 2.771Z"
      />
      <path
        fill={htmlColor || '#1952B6'}
        d="M22.862 17.332a7.415 7.415 0 0 0-14.77.932 7.414 7.414 0 0 0 8.702 7.302 6.002 6.002 0 0 1-.37-1.473 5.9 5.9 0 1 1 4.921-6.68 6.08 6.08 0 0 1 1.517-.08Z"
      />
    </svg>
  );
};

export default IconClaimScan32;
