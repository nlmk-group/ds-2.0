import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVerticalAlignTopFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M21 2H3v4h8.586l-6 6H10v10h4V12h4.414l-6-6H21V2Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconVerticalAlignTopFilled24;
