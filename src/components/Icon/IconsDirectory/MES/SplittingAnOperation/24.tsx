import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSplittingAnOperation24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M18.332 12 23 16.5 18.332 21v-3.375h-3.328v-2.25h3.328V12ZM5.665 3 .998 7.5 5.665 12V8.625h3.329v-2.25h-3.33V3ZM10.849 3h2.3v18h-2.3V3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSplittingAnOperation24;
