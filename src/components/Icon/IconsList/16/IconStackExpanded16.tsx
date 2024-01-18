import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconStackExpanded16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M12.6663 5L3.33301 5L7.99967 12.3333L12.6663 5Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconStackExpanded16;
