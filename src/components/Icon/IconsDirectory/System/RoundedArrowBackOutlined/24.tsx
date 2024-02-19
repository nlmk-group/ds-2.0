import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRoundedArrowBackOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m5.828 6.965 2.536 2.542-1.414 1.418L2 5.962 6.95 1l1.414 1.418L5.828 4.96H13c4.418 0 8 3.59 8 8.02S17.418 21 13 21H4v-2.005h9c3.314 0 6-2.693 6-6.015 0-3.322-2.686-6.015-6-6.015H5.828Z"
      />
    </svg>
  );
};

export default IconRoundedArrowBackOutlined24;
