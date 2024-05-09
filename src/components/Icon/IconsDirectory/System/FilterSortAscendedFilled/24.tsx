import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterSortAscendedFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M21.5 18.5h-19v-3h19v3ZM15.5 13.5h-13v-3h13v3ZM9.5 8.5h-7v-3h7v3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFilterSortAscendedFilled24;
