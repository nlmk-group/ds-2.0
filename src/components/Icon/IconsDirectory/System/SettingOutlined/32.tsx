import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSettingOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.454 22.661a13.357 13.357 0 0 1-1.304-3.1 4 4 0 0 0 .003-7.13A13.32 13.32 0 0 1 6.487 6.65a4 4 0 0 0 6.174-3.565 13.32 13.32 0 0 1 6.676.002 4 4 0 0 0 6.176 3.563 13.32 13.32 0 0 1 2.033 2.68c.577.998 1.01 2.04 1.304 3.1a4 4 0 0 0-.003 7.13 13.318 13.318 0 0 1-3.334 5.782 4 4 0 0 0-6.175 3.565 13.32 13.32 0 0 1-6.675-.002 4 4 0 0 0-6.176-3.563 13.356 13.356 0 0 1-2.033-2.68Zm7.546.262a6.657 6.657 0 0 1 3 3.693 10.64 10.64 0 0 0 1.998.001A6.657 6.657 0 0 1 20 22.924a6.657 6.657 0 0 1 4.7-.753c.386-.544.72-1.124.997-1.731A6.657 6.657 0 0 1 24 15.995c0-1.68.626-3.25 1.697-4.445a10.833 10.833 0 0 0-1-1.73A6.657 6.657 0 0 1 20 9.066a6.657 6.657 0 0 1-3-3.693 10.647 10.647 0 0 0-2 0 6.657 6.657 0 0 1-3 3.693 6.657 6.657 0 0 1-4.7.753 10.67 10.67 0 0 0-.998 1.73A6.657 6.657 0 0 1 8 15.996a6.65 6.65 0 0 1-1.697 4.445c.28.607.614 1.186 1 1.73a6.657 6.657 0 0 1 4.697.753Zm4-2.928a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2.667a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.667Z"
      />
    </svg>
  );
};

export default IconSettingOutlined32;
