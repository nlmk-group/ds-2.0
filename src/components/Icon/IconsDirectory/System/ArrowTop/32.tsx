import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowTop32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.286 11.264V28h-2.572V11.264l-6.896 7.375L6 16.695 16 6l10 10.695-1.818 1.944-6.896-7.375Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M2.667 4h26.666v2.667H2.667V4Z" />
    </svg>
  );
};

export default IconArrowTop32;
