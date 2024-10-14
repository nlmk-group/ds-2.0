import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconToRepairFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m11.592 9.056 2.515-2.515a3.64 3.64 0 0 1 .525 2.423l.009-.006a3.644 3.644 0 0 1-4.85 2.965L7.42 14.37a1.014 1.014 0 0 1-1.433 0l-.86-.86a1.013 1.013 0 0 1 0-1.433l2.414-2.455a3.973 3.973 0 0 1-.138-.645 3.647 3.647 0 0 1 5.556-3.583L10.444 7.91l.215.932.933.215ZM5.008 7.018l-.942-.943 1.408-1.408h-4.14V3.333h4.14L4.065 1.925l.943-.943L8 4 5.008 7.018Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconToRepairFilled16;
