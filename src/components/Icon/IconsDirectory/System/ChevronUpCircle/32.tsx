import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ChevronUpCircle32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M19.696 18.892L16 15.196l-3.696 3.696-1.704-1.692 5.4-5.4 5.4 5.4-1.704 1.692ZM16 28C9.376 28 4 22.624 4 16S9.376 4 16 4s12 5.376 12 12-5.376 12-12 12Zm0-21.6A9.597 9.597 0 0 0 6.4 16c0 5.304 4.296 9.6 9.6 9.6 5.304 0 9.6-4.296 9.6-9.6 0-5.304-4.296-9.6-9.6-9.6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default ChevronUpCircle32;
