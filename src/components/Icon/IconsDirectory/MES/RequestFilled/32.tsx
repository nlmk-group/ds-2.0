import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRequestFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2ZM11 16h5.75a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2ZM21 6H11a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2Zm0 4H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRequestFilled32;