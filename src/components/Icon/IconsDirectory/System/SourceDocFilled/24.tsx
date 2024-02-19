import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDocFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M20 16.402C20 17.28 19.28 18 18.4 18V7.6l-4-4H7.2c0-.88.72-1.6 1.6-1.6h6.4L20 6.8v9.602Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15.2 21.2c.88 0 1.6-.72 1.6-1.6v-8.101h-6.315v-6.3H5.6c-.88 0-1.6.72-1.6 1.6v12.8c0 .88.712 1.6 1.592 1.6H15.2Zm-8-8h6.4v1.6H7.2v-1.6Zm0 3.2h4.267V18H7.2v-1.6Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M11.985 5.2H12l4.8 4.799h-4.815v-4.8Z" />
    </svg>
  );
};

export default IconSourceDocFilled24;
