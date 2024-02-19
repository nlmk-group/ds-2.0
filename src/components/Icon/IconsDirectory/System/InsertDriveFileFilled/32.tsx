import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInsertDriveFileFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M28 28.324v-15.99h-8A1.333 1.333 0 0 1 18.667 11V3H5.33C4.596 3 4 3.607 4 4.323v24.021c0 .73.593 1.323 1.324 1.323h21.352A1.334 1.334 0 0 0 28 28.324ZM21.333 9.667H28l-6.667-6.663v6.663Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInsertDriveFileFilled32;
