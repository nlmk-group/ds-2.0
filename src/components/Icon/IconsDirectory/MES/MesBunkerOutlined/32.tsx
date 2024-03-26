import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMesBunkerOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2"
        d="M4 5a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v12.65a1 1 0 0 1-.22.624l-7.48 9.35a1 1 0 0 1-.78.376h-7.04a1 1 0 0 1-.78-.375l-7.48-9.351a1 1 0 0 1-.22-.625V5Zm0 8h24"
      />
    </svg>
  );
};

export default IconMesBunkerOutlined32;
