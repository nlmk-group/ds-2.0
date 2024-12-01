import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDrilldown16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M6 8c0-.867-.56-1.6-1.333-1.88V4.547A2.007 2.007 0 0 0 6 2.667a2 2 0 1 0-4 0c0 .866.56 1.6 1.333 1.88v1.58A1.992 1.992 0 0 0 2 8c0 .867.56 1.6 1.333 1.88v1.573A2.007 2.007 0 0 0 2 13.333a2 2 0 0 0 4 0c0-.866-.56-1.6-1.333-1.88V9.88A2.007 2.007 0 0 0 6 8ZM4 2a.667.667 0 1 1 0 1.333A.667.667 0 0 1 4 2Zm0 12a.667.667 0 1 1 0-1.333A.667.667 0 0 1 4 14ZM7.333 2H14v1.333H7.333V2ZM7.333 7.333H14v1.334H7.333V7.333ZM7.333 12.667H14V14H7.333v-1.333Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDrilldown16;
