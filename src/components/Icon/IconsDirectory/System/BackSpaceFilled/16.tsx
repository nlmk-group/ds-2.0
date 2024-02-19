import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBackSpaceFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.083 3h8.75C14.475 3 15 3.5 15 4.111v7.778C15 12.5 14.475 13 13.833 13h-8.75c-.402 0-.717-.2-.927-.494L1 8l3.156-4.511A1.11 1.11 0 0 1 5.083 3Zm4.084 5.783-2.095 1.995-.822-.784L8.344 8 6.25 6.005l.822-.783 2.095 1.995 2.094-1.995.822.783L9.99 8l2.094 1.994-.822.784-2.094-1.995Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBackSpaceFilled16;
