import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMesBunkerOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2"
        d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9.15a1 1 0 0 1-.22.624l-5.48 6.85a1 1 0 0 1-.78.376H9.48a1 1 0 0 1-.78-.375l-5.48-6.851a1 1 0 0 1-.22-.625V4Zm0 6h18"
      />
    </svg>
  );
};

export default IconMesBunkerOutlined24;
