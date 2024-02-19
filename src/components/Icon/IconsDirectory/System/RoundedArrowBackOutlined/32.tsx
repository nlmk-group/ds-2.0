import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRoundedArrowBackOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m8.037 9.053 3.337 3.432-1.86 1.914L3 7.699 9.513 1l1.86 1.914-3.336 3.432h9.437C23.287 6.346 28 11.193 28 17.173 28 23.153 23.287 28 17.474 28H5.632v-2.707h11.842c4.36 0 7.894-3.635 7.894-8.12 0-4.485-3.534-8.12-7.894-8.12H8.037Z"
      />
    </svg>
  );
};

export default IconRoundedArrowBackOutlined32;
