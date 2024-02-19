import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRedoArrowOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M26.972 17.63V9.603h2v11.28h-11.28v-2h7.642C23.747 15.003 19.816 13 15.742 13c-4.523 0-8.871 2.467-10.028 7.236l-1.944-.472C5.201 13.866 10.56 11 15.742 11c4.514 0 9.16 2.174 11.23 6.63Z"
      />
    </svg>
  );
};

export default IconRedoArrowOutlined32;
