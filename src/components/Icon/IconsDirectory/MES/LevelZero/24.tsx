import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLevelZero24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5H8C4.13401 5 1 8.13401 1 12C1 15.866 4.13401 19 8 19H16C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5ZM8 4C3.58172 4 0 7.58172 0 12C0 16.4183 3.58172 20 8 20H16C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4H8Z"
        fill={htmlColor || '#EEA601'}
      />
    </svg>
  );
};

export default IconLevelZero24;
