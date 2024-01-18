import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconArrowTop24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M12.9643 8.44763V21H11.0357V8.44763L5.86346 13.9792L4.5 12.5211L12 4.5L19.5 12.5211L18.1365 13.9792L12.9643 8.44763Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M2 3H22V5H2V3Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconArrowTop24;
