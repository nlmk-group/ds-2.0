import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconStop24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M6.07715 6L6.07715 18L18.0771 18L18.0771 6L6.07715 6Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconStop24;
