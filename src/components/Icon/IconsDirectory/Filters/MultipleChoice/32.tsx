import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMultipleChoice32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M28 10.684H17.2v2.4H28v-2.4Zm0 9.6H17.2v2.4H28v-2.4Zm-19.752-4.8L4 11.236l1.692-1.692 2.544 2.544L13.324 7l1.692 1.692-6.768 6.792Zm0 9.6L4 20.836l1.692-1.692 2.544 2.544 5.088-5.088 1.692 1.692-6.768 6.792Z"
      />
    </svg>
  );
};

export default IconMultipleChoice32;
