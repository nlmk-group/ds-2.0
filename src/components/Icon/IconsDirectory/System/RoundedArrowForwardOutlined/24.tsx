import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRoundedArrowForwardOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M18.172 6.965H11c-3.314 0-6 2.693-6 6.015 0 3.322 2.686 6.015 6 6.015h9V21h-9c-4.418 0-8-3.59-8-8.02s3.582-8.02 8-8.02h7.172l-2.536-2.542L17.05 1 22 5.962l-4.95 4.963-1.414-1.418 2.536-2.542Z"
      />
    </svg>
  );
};

export default IconRoundedArrowForwardOutlined24;
