import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconInteraction24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 4.5H7.5C6.675 4.5 6 5.175 6 6V18C6 18.825 6.6675 19.5 7.4925 19.5H16.5C17.325 19.5 18 18.825 18 18V9L13.5 4.5ZM15 12H9V13.5H15V12ZM15 15H9V16.5H15V15ZM7.5 18H16.5V9.75H12.75V6H7.5V18Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInteraction24;
