import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRequestDeclinedFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13 15H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Zm-7.938-2.446.884.884L8 11.384l2.054 2.054.884-.884L8.884 10.5l2.054-2.054-.884-.884L8 9.616 5.946 7.562l-.884.884L7.116 10.5l-2.054 2.054ZM5.5 6h3a.5.5 0 1 0 0-1h-3a.5.5 0 1 0 0 1Zm5-3h-5a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRequestDeclinedFilled16;
