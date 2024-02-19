import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsSwapVertFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 1a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4Zm7.714 2L6 8.763h4.286V18.89h2.857V8.763h4.285L11.714 3Zm10 20.237V13.11h-2.857v10.126h-4.285L20.285 29 26 23.237h-4.286Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowsSwapVertFilled32;
