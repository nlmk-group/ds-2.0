import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconRoll32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6.59459C10.8055 6.59459 6.59459 10.8055 6.59459 16C6.59459 21.1945 10.8055 25.4054 16 25.4054C21.1945 25.4054 25.4054 21.1945 25.4054 16C25.4054 10.8055 21.1945 6.59459 16 6.59459ZM4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 10.3243C12.8654 10.3243 10.3243 12.8654 10.3243 16C10.3243 19.1346 12.8654 21.6757 16 21.6757C19.1346 21.6757 21.6757 19.1346 21.6757 16C21.6757 12.8654 19.1346 10.3243 16 10.3243ZM9.02703 16C9.02703 12.1489 12.1489 9.02703 16 9.02703C19.8511 9.02703 22.973 12.1489 22.973 16C22.973 19.8511 19.8511 22.973 16 22.973C12.1489 22.973 9.02703 19.8511 9.02703 16Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M16 18.9189C17.6121 18.9189 18.9189 17.6121 18.9189 16C18.9189 14.3879 17.6121 13.0811 16 13.0811C14.3879 13.0811 13.0811 14.3879 13.0811 16C13.0811 17.6121 14.3879 18.9189 16 18.9189Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoll32;
