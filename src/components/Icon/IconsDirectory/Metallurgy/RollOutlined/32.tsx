import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRollOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16 6.595A9.405 9.405 0 0 0 6.595 16 9.405 9.405 0 0 0 16 25.405 9.405 9.405 0 0 0 25.405 16 9.405 9.405 0 0 0 16 6.595ZM4 16C4 9.373 9.373 4 16 4s12 5.373 12 12-5.373 12-12 12S4 22.627 4 16Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16 10.324a5.676 5.676 0 1 0 0 11.352 5.676 5.676 0 0 0 0-11.352ZM9.027 16a6.973 6.973 0 1 1 13.946 0 6.973 6.973 0 0 1-13.946 0Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M16 18.919a2.919 2.919 0 1 0 0-5.838 2.919 2.919 0 0 0 0 5.838Z" />
    </svg>
  );
};

export default IconRollOutlined32;
