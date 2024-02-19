import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArticleFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2.556 1h10.888C14.3 1 15 1.7 15 2.556v10.888C15 14.3 14.3 15 13.444 15H2.556A1.56 1.56 0 0 1 1 13.444V2.556C1 1.7 1.7 1 2.556 1ZM4 11.778h5.444v-1.556H4v1.556Zm0-3.111h7.778V7.11H4v1.556Zm0-3.111h7.778V4H4v1.556Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArticleFilled16;
