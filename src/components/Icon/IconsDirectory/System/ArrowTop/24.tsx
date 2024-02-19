import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowTop24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.964 8.448V21h-1.928V8.448l-5.173 5.531L4.5 12.521 12 4.5l7.5 8.021-1.363 1.458-5.173-5.531Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M2 3h20v2H2V3Z" />
    </svg>
  );
};

export default IconArrowTop24;
