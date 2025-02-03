import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSplittingAnOperation16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M12.03 8 15 11l-2.97 3v-2.25H9.912v-1.5h2.118V8ZM3.97 2 1 5l2.97 3V5.75h2.118v-1.5H3.97V2ZM7.268 2h1.464v12H7.268V2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSplittingAnOperation16;
