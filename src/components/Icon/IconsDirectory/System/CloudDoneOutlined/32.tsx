import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloudDoneOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.188 13.55C24.337 9.237 20.55 6 16 6a9.37 9.37 0 0 0-8.313 5.05A7.493 7.493 0 0 0 1 18.5C1 22.637 4.362 26 8.5 26h16.25C28.2 26 31 23.2 31 19.75c0-3.3-2.563-5.975-5.813-6.2Zm-.438 9.95H8.5c-2.763 0-5-2.238-5-5 0-2.563 1.912-4.7 4.45-4.963l1.337-.137.625-1.188A6.836 6.836 0 0 1 16 8.5a6.88 6.88 0 0 1 6.738 5.537l.375 1.875 1.912.138a3.725 3.725 0 0 1 3.475 3.7 3.761 3.761 0 0 1-3.75 3.75Zm-13.863-7.387 2.613 2.612 5.75-5.75 1.762 1.763L13.5 22.25l-4.375-4.375 1.762-1.762Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCloudDoneOutlined32;
