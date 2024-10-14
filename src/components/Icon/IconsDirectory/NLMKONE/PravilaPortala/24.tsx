import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPravilaPortala24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M10.5 2h3L13 13h-2l-.273-6-.182-4-.045-1Zm3 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 3h5.543l.181 4H3v12h18V7h-5.726l.182-4H21a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPravilaPortala24;
