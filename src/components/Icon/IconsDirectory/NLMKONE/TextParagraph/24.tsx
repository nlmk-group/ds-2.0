import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTextParagraph24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M9.5 3a5.5 5.5 0 1 0 0 11H12v6a1 1 0 1 0 2 0V5h2v15a1 1 0 1 0 2 0V5h1a1 1 0 1 0 0-2H9.5ZM12 5H9.5a3.5 3.5 0 1 0 0 7H12V5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTextParagraph24;
