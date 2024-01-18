import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconStackCollapsed24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M6.57715 5L6.57715 19L17.5771 12L6.57715 5Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconStackCollapsed24;
