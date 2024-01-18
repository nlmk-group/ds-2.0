import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconArrowDownward16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={classes}>
      <path
        d="M8.64284 11.3682L12.091 7.6805L13 8.65263L8 14L3 8.65263L3.90897 7.6805L7.35716 11.3682V3H8.64284V11.3682Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconArrowDownward16;
