import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPauseFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M4 21h5.143V3H4v18ZM14.286 3v18h5.143V3h-5.143Z" />
    </svg>
  );
};

export default IconPauseFilled24;
