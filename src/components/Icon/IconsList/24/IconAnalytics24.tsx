import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAnalytics24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM17.9536 12.75C17.5845 15.7097 15.0597 18 12 18C8.68629 18 6 15.3137 6 12C6 8.94029 8.29027 6.41549 11.25 6.04642V12.75H17.9536ZM17.9536 11.25H12.75V6.04642C15.464 6.38486 17.6151 8.53596 17.9536 11.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAnalytics24;
