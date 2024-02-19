import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendar2Filled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M21 4h-4V2h-2v2H9V2H7v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM8 13v-2H6v2h2Zm0 2v2H6v-2h2Zm5-4h-2v2h2v-2Zm-2 4h2v2h-2v-2Zm7-2v-2h-2v2h2Zm0 2v2h-2v-2h2ZM4 8h16v12H4V8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalendar2Filled24;
