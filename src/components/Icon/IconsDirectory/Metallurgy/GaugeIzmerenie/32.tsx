import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGaugeIzmerenie32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16 17.55c.38 0 .739-.084 1.061-.236l.783.784 1.202-1.203-.782-.782a2.5 2.5 0 0 0-3.326-3.326l-3.92-3.919-1.201 1.202 3.919 3.92A2.5 2.5 0 0 0 16 17.55Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.85 2.056v2.028c2.102.161 4.038.912 5.644 2.088l1.377-1.376 1.202 1.202-1.286 1.285A10.965 10.965 0 0 1 27 15.053c0 5.788-4.472 10.533-10.15 10.967V30h-1.7v-3.98C9.472 25.586 5 20.84 5 15.052S9.472 4.518 15.15 4.084V2.056h1.7Zm8.45 12.996a9.3 9.3 0 1 1-18.6 0 9.3 9.3 0 0 1 18.6 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconGaugeIzmerenie32;
