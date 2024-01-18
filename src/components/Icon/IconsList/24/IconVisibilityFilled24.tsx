import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconVisibilityFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M12.0771 4.5C7.07715 4.5 2.80715 7.61 1.07715 12C2.80715 16.39 7.07715 19.5 12.0771 19.5C17.0771 19.5 21.3471 16.39 23.0771 12C21.3471 7.61 17.0771 4.5 12.0771 4.5ZM12.0771 17C9.31715 17 7.07715 14.76 7.07715 12C7.07715 9.24 9.31715 7 12.0771 7C14.8371 7 17.0771 9.24 17.0771 12C17.0771 14.76 14.8371 17 12.0771 17ZM12.0771 9C10.4171 9 9.07715 10.34 9.07715 12C9.07715 13.66 10.4171 15 12.0771 15C13.7371 15 15.0771 13.66 15.0771 12C15.0771 10.34 13.7371 9 12.0771 9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconVisibilityFilled24;
