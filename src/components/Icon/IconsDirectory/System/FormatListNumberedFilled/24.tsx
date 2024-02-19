import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatListNumberedFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3Zm1.484 5.205h.884v-3.59H3.6v.898h.884v2.692Zm.884 8.077v.449h-.884v.897h.884v.449H3.6v.897h2.653v-3.59H3.6v.898h1.768Zm-.176-5.385H3.6V10h2.653v.808L4.66 12.692h1.592v.898H3.6v-.808l1.592-1.885Zm2.83-5.384v1.795H20.4V5.513H8.021ZM20.4 18.077H8.021v-1.795H20.4v1.795ZM8.021 12.692H20.4v-1.795H8.021v1.795Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFormatListNumberedFilled24;
