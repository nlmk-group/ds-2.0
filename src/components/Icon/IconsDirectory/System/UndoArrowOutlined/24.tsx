import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUndoArrowOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.4 11.8V7.165h-2v8.071h2.543l.027.006.002-.006h5.5v-2H5.845C7.245 11.113 9.808 10 12.5 10c3.441 0 6.674 1.819 7.53 5.242l1.94-.485C20.826 10.181 16.56 8 12.5 8c-3.055 0-6.229 1.236-8.1 3.8Z"
      />
    </svg>
  );
};

export default IconUndoArrowOutlined24;
