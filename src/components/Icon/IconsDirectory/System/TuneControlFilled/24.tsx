import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTuneControlFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 1a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm0 18v-2h6v2H3ZM3 7V5h10v2H3Zm10 12v2h-2v-6h2v2h8v2h-8Zm-6-8V9h2v6H7v-2H3v-2h4Zm14 0v2H11v-2h10Zm-4-2h-2V3h2v2h4v2h-4v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTuneControlFilled24;
