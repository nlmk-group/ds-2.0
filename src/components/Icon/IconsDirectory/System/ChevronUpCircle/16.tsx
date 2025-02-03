import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ChevronUpCircle16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9.848 9.446L8 7.598L6.152 9.446L5.3 8.6L8 5.9L10.7 8.6L9.848 9.446ZM8 14C4.688 14 2 11.312 2 8C2 4.688 4.688 2 8 2C11.312 2 14 4.688 14 8C14 11.312 11.312 14 8 14ZM8 3.2C5.348 3.2 3.2 5.348 3.2 8C3.2 10.652 5.348 12.8 8 12.8C10.652 12.8 12.8 10.652 12.8 8C12.8 5.348 10.652 3.2 8 3.2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default ChevronUpCircle16;
