import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSaveFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M11.333 2h-8C2.593 2 2 2.6 2 3.333v9.334C2 13.4 2.593 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667v-8L11.333 2ZM8 8c-1.107 0-2 .893-2 2s.893 2 2 2 2-.893 2-2-.893-2-2-2Zm2-4H4v2.667h6V4Z"
      />
    </svg>
  );
};

export default IconSaveFilled16;
