import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUndoArrowOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.77 17.63V9.603h-2v11.28h11.281v-2H7.408C8.995 15.003 12.927 13 17 13c4.523 0 8.871 2.467 10.028 7.236l1.944-.472C27.54 13.866 22.183 11 17 11c-4.514 0-9.16 2.174-11.23 6.63Z"
      />
    </svg>
  );
};

export default IconUndoArrowOutlined32;
