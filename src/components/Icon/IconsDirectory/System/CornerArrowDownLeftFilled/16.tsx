import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowDownLeftFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14 2a1 1 0 0 1 1 1v1.005c0 1.12 0 2.02-.06 2.748-.06.75-.19 1.406-.499 2.011a5.125 5.125 0 0 1-2.24 2.24c-.605.309-1.26.438-2.01.499-.729.06-1.63.06-2.748.06h-.005V14a1 1 0 0 1-1.708.707L2.293 11.27a1 1 0 0 1 0-1.415L5.73 6.418a1 1 0 0 1 1.707.707v2.438c1.152 0 1.96-.002 2.59-.053.627-.052.99-.147 1.267-.288a3.125 3.125 0 0 0 1.365-1.366c.141-.277.237-.64.288-1.266C13 5.953 13 5.134 13 3.963V3a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCornerArrowDownLeftFilled16;
