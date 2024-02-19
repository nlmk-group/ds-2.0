import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInsertDriveFileFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14 13.662V5.667h-4A.667.667 0 0 1 9.333 5V1H2.665A.668.668 0 0 0 2 1.661v12.011c0 .365.297.661.662.661h10.676a.666.666 0 0 0 .662-.671Zm-3.333-9.329H14l-3.333-3.331v3.331Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInsertDriveFileFilled16;
