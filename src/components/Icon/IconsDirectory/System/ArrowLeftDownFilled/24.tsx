import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowLeftDownFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m19.707 6.411-2.119-2.118-8.091 8.092V5.519H6.5V17.5h11.98v-2.997h-6.865l8.092-8.092Z"
      />
    </svg>
  );
};

export default IconArrowLeftDownFilled24;
