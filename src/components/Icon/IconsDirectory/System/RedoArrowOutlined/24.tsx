import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRedoArrowOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M19.97 11.8V7.165h2v8.071h-2.543l-.026.006-.002-.006h-5.5v-2h4.626C17.126 11.113 14.562 10 11.871 10c-3.442 0-6.674 1.819-7.53 5.242l-1.94-.485C3.543 10.181 7.811 8 11.87 8c3.055 0 6.229 1.236 8.1 3.8Z"
      />
    </svg>
  );
};

export default IconRedoArrowOutlined24;
