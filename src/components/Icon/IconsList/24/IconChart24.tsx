import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChart24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 5.25H17.25C18.075 5.25 18.75 5.925 18.75 6.75V17.25C18.75 18.075 18.075 18.75 17.25 18.75H6.75C5.925 18.75 5.25 18.075 5.25 17.25V6.75C5.25 5.925 5.925 5.25 6.75 5.25ZM17.25 17.25H6.75V6.75H17.25V17.25ZM12.75 15.75H11.25V8.25H12.75V15.75ZM9.75 15.75H8.25V10.5H9.75V15.75ZM14.25 15.75H15.75V12.75H14.25V15.75Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChart24;
