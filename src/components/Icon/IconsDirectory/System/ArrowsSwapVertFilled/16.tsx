import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsSwapVertFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm4.857 1L3 4.103h2.143v5.453H6.57V4.103h2.143L5.857 1Zm5 10.897V6.445H9.43v5.452H7.286L10.143 15 13 11.897h-2.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowsSwapVertFilled16;
