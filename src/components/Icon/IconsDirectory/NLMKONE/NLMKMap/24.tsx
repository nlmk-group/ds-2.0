import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNLMKMap24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="m15 21-6-2.1-4.65 1.8a.902.902 0 0 1-.925-.113A.986.986 0 0 1 3 19.75v-14c0-.217.063-.408.188-.575.125-.167.295-.292.512-.375L9 3l6 2.1 4.65-1.8a.904.904 0 0 1 .925.112.989.989 0 0 1 .425.838v14a.931.931 0 0 1-.188.575 1.126 1.126 0 0 1-.512.375L15 21Zm-1-2.45V6.85l-4-1.4v11.7l4 1.4Zm2 0 3-1V5.7l-3 1.15v11.7ZM5 18.3l3-1.15V5.45l-3 1V18.3ZM16 6.85v11.7-11.7Zm-8-1.4v11.7-11.7Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNLMKMap24;
