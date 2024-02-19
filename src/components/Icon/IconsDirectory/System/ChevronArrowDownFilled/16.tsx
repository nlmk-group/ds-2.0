import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChevronArrowDownFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m12.7 5.909-1.59-1.624L8 7.467 4.888 4.285 3.3 5.909 8 10.715l4.698-4.806Z"
      />
    </svg>
  );
};

export default IconChevronArrowDownFilled16;
