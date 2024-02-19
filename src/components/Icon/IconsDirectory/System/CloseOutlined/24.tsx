import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloseOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.455 12.273 5 17.728l1.414 1.414 5.455-5.455.202-.202.202.202 5.455 5.455 1.414-1.414-5.455-5.455-.202-.202.203-.202.454-.455 5-5L17.728 5l-5.455 5.455-.202.202-.202-.202-.454-.455-5-5L5 6.414l5.455 5.455.202.202-.202.202Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCloseOutlined24;
