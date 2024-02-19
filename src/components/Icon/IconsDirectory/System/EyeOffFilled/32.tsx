import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeOffFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m6.027 7.912-4.17-4.168 1.887-1.887 26.399 26.4-1.887 1.886-4.413-4.414A14.6 14.6 0 0 1 16 28C8.81 28 2.83 22.827 1.575 16a14.643 14.643 0 0 1 4.453-8.088h-.001Zm13.649 13.65-1.952-1.951a4 4 0 0 1-5.335-5.335l-1.952-1.952a6.667 6.667 0 0 0 9.239 9.239ZM16 4c-1.893 0-3.705.36-5.368 1.013v.002l4.39 4.388a6.667 6.667 0 0 1 7.574 7.573l5.147 5.147A14.595 14.595 0 0 0 30.425 16C29.171 9.173 23.19 4 16 4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconEyeOffFilled32;
