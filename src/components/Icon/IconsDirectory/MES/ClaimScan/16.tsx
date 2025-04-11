import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconClaimScan16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.925 11.681c0-1.283 1.023-2.325 2.285-2.325 1.265 0 2.29 1.042 2.29 2.325 0 1.284-1.025 2.325-2.29 2.325-1.262 0-2.285-1.041-2.285-2.325Zm2.059-1.162h.457v1.395h-.457v-1.396Zm0 1.86h.457v.465h-.457v-.465Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.198 5.265c.652-1.322 1.68-2.31 2.82-3.003l-.392-.647c-1.777 1.08-3.499 2.956-3.841 5.807a5.253 5.253 0 0 0 6.635 6.693 3.04 3.04 0 0 1-.619-.61 4.496 4.496 0 1 1 3.438-4.668c.276.1.533.239.765.41l.002-.115a5.253 5.253 0 0 0-8.808-3.867Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.43 8.666a3.708 3.708 0 1 0-3.033 4.117 3.005 3.005 0 0 1-.185-.737 2.95 2.95 0 1 1 2.46-3.34 3.04 3.04 0 0 1 .759-.04Z"
      />
    </svg>
  );
};

export default IconClaimScan16;
