import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEda24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3 4h12a2 2 0 0 1 2 2v2h3l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6a2 2 0 0 1 2-2Zm14 5.5V12h4.46L19.5 9.5H17Zm-9 0c.83 0 1.5-.67 1.5-1.5V5h-1v3H8V5H7v3h-.5V5h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4Zm3 4h1V5c-1.1 0-2 .9-2 2v3h1v3.5ZM4.5 17c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5Zm12 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEda24;
