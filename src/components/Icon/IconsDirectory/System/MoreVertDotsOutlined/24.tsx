import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMoreVertDotsOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 3c-.825 0-1.5.675-1.5 1.5S10.675 6 11.5 6 13 5.325 13 4.5 12.325 3 11.5 3Zm0 15c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5ZM10 12c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5-.675 1.5-1.5 1.5S10 12.825 10 12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMoreVertDotsOutlined24;
