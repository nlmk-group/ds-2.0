import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCancelFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 8c0-3.871 3.129-7 7-7s7 3.129 7 7-3.129 7-7 7-7-3.129-7-7Zm9.513 3.5.987-.987L8.987 8 11.5 5.487l-.987-.987L8 7.013 5.487 4.5l-.987.987L7.013 8 4.5 10.513l.987.987L8 8.987l2.513 2.513Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCancelFilled16;
