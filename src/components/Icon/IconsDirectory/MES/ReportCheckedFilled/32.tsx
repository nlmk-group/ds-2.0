import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportCheckedFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M26 30H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4.087a2.497 2.497 0 0 1 2.163-1.25h1.25c0-.829 1.12-1.5 2.5-1.5s2.5.671 2.5 1.5h1.25A2.497 2.497 0 0 1 21.913 4H26a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2ZM11.5 6c.375.875 1.005 2 2.25 2h4.5c1.271 0 1.881-1.116 2.25-2h-9Zm10.075 8.37-6.01 6.01-3.89-3.889-1.945 1.945 5.834 5.833 7.955-7.955-1.944-1.944Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportCheckedFilled32;
