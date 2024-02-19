import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInteractionFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M9.5 1.07V5h3.685L9.5 1.07Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.5 1v5h4.685v7c0 .733-.562 1.333-1.25 1.333H4.43c-.688 0-1.244-.6-1.244-1.333V2.333C3.185 1.6 3.748 1 4.435 1H8.5ZM5.685 7.667h5V9h-5V7.667Zm0 2.666h5v1.334h-5v-1.334Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInteractionFilled16;
