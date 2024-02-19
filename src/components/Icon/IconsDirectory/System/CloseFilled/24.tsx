import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloseFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.903 5.913a1.406 1.406 0 1 0-1.99 1.99L10.01 12l-4.097 4.097a1.406 1.406 0 1 0 1.99 1.99L12 13.99l4.097 4.097a1.406 1.406 0 1 0 1.99-1.99L13.99 12l4.097-4.097a1.412 1.412 0 0 0 0-1.981c-.55-.55-1.44-.55-1.99 0L12 10.01 7.903 5.913Z"
      />
    </svg>
  );
};

export default IconCloseFilled24;
