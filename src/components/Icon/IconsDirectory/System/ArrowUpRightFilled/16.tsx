import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ArrowUpRightFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.5 3.5H4.18v2.331h4.34l-5.227 5.228 1.648 1.648L10.17 7.48v4.341h2.33V3.5Z"
      />
    </svg>
  );
};

export default ArrowUpRightFilled16;
