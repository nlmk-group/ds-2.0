import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSettingFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M18.727 2.944a13.32 13.32 0 0 0-5.455.003v.001a5.324 5.324 0 0 1-2.605 3.813 5.32 5.32 0 0 1-4.608.348 13.39 13.39 0 0 0-2.728 4.724A5.324 5.324 0 0 1 5.333 16a5.324 5.324 0 0 1-2 4.162 13.32 13.32 0 0 0 2.724 4.728 5.324 5.324 0 0 1 4.61.347 5.324 5.324 0 0 1 2.606 3.82c1.8.374 3.657.373 5.455-.005a5.324 5.324 0 0 1 2.605-3.814 5.324 5.324 0 0 1 4.608-.348 13.389 13.389 0 0 0 2.728-4.724A5.321 5.321 0 0 1 26.667 16a5.324 5.324 0 0 1 2-4.165 13.322 13.322 0 0 0-2.724-4.727 5.324 5.324 0 0 1-4.61-.348 5.324 5.324 0 0 1-2.606-3.816ZM20 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSettingFilled32;
