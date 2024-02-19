import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommunityFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4.667 2a2.333 2.333 0 1 0-.002 4.665A2.333 2.333 0 0 0 4.667 2Zm6.666 0a2.333 2.333 0 1 0 0 4.665 2.333 2.333 0 0 0 0-4.665ZM8 6a2.333 2.333 0 1 0-.001 4.665A2.333 2.333 0 0 0 8 6Zm0 5.25c-1.558 0-4.667.782-4.667 2.333v1.75h9.334v-1.75c0-1.551-3.11-2.333-4.667-2.333Zm-3.333-4c.097 0 .201.003.31.01-.2.427-.31.904-.31 1.407 0 .633.176 1.224.482 1.728-.191.062-.38.129-.562.202a5.864 5.864 0 0 0-1.347.736H0v-1.75C0 8.032 3.11 7.25 4.667 7.25Zm8.093 4.083H16v-1.75c0-1.551-3.11-2.333-4.667-2.333-.098 0-.201.003-.31.01.2.427.31.904.31 1.407 0 .633-.176 1.224-.482 1.728.191.062.38.129.562.202.454.182.929.421 1.347.736Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCommunityFilled16;
